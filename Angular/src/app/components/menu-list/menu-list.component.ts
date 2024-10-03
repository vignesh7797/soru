import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { Menu } from '../../models/menu';
import { ApiService } from '../../services/api.service';
import { PaginatorModule } from 'primeng/paginator';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [DataViewModule, ButtonModule, TagModule, CommonModule, PaginatorModule, TabMenuModule],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss',
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuListComponent {

  data!: Menu[];
  first: number = 0;

  layouts:MenuItem[] = [{name:'grid'},{name:'list'}]
  activeLayout: any = this.layouts[0];

  constructor(private apiService: ApiService){
    this.apiService.getMenuItems().subscribe((res:any) =>{
      this.data = res['default'];
      this.data.map(menu =>  menu.ratings = Math.round(menu.ratings))
    })
  }

  onPage(event:any){
    this.first = event?.first
  }

}
