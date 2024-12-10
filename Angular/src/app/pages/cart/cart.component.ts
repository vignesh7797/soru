import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from '../../components/banner/banner.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonService } from '../../services/common.service';
import { Menu } from '../../models/menu';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [SharedModule, BannerComponent, FooterComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  providers:[ConfirmationService, MessageService]
})
export class CartComponent {

  selectedProducts:Menu[] = [];
  filter = '';
  quantity = 1;
  
  constructor(public common:CommonService, private confirmationService:ConfirmationService, private messageService : MessageService){}


  getSeverity (product: Menu) {
    switch (product.stock) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return 'danger';
    }
  };

  editProduct(product: Menu) {
    // this.product = { ...product };
    // this.productDialog = true;
  }

  deleteProduct(product: Menu) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete ' + product.title + '?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              let index = this.common.cartList().findIndex(cart => cart._id == product._id);
              this.common.removeCartItem(index)
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
          }
      });
  }

}
