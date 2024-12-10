import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, NO_ERRORS_SCHEMA, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { Menu } from '../../models/menu';
import { ApiService } from '../../services/api.service';
import { PaginatorModule } from 'primeng/paginator';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [DataViewModule, ButtonModule, TagModule, CommonModule, PaginatorModule, TabMenuModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss',
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class MenuListComponent implements OnChanges{

  data!: Menu[];
  filteredData!: Menu[];
  first: number = 0;
  layouts:MenuItem[] = [{name:'grid'},{name:'list'}]
  activeLayout: any = this.layouts[0];

  @Input('category') category = 'all';
  @Input('filterBy') filterBy = '';

  constructor(private apiService: ApiService, private common:CommonService){
    this.apiService.getMenuItems().subscribe((res:any) =>{
      this.data = res['default'];
      this.data.map(menu =>  menu.ratings = Math.round(menu.ratings));
      this.filteredData = this.data;
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['category']){
        if(this.category !== 'all'){
          this.filteredData = this.data.filter(dt => dt.tags.includes(this.category));
        }else{
          this.filteredData = this.data;
        }

        this.first = 0;
      }

      if(changes['filterBy']){
        this.filteredData = this.data.filter(dt => dt.title.includes(this.filterBy) || dt.recipe.includes(this.filterBy));
      }
  }

  onPage(event:any){
    this.first = event?.first
  }

  addFav(prod:Menu){
    let index = this.common.favorities().findIndex(fav => fav._id == prod._id)
    if(index == -1){
      this.common.addFavorities(prod)
    }else{
      this.common.removeFavorities(index);
    }
  }

  addCart(item:Menu){
    let index = this.common.cartList().findIndex(cart => cart._id == item._id);

    if(index == -1){
      this.common.addCartItem(item);
    }else{
      this.common.removeCartItem(index);
    }
  }

  isFav(prod:Menu):boolean{
    let index = this.common.favorities().findIndex(fav => fav._id == prod._id);
    return index == -1 ? false : true;
  }

  isCart(prod:Menu):boolean{
    let index = this.common.cartList().findIndex(fav => fav._id == prod._id);
    return index == -1 ? false : true;
  }
}
