import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { SharedModule } from '../../../shared/shared.module';
import { Menu } from '../../../models/menu';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FavoriteComponent {

  common = inject(CommonService);
  layout: 'list' | 'grid' = 'list';


  getSeverity(product:Menu){
    switch (product.type) {
      case 'veg':
          return 'success';

      case 'nonveg':
          return 'danger';

      default:
          return 'success';
    }
  }
}
