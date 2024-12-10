import { Component, ViewEncapsulation } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { FooterComponent } from "../../components/footer/footer.component";
import { Menu } from '../../models/menu';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuListComponent } from '../../components/menu-list/menu-list.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FooterComponent, BannerComponent, PaginatorModule, ButtonModule, TabMenuModule, MenuListComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {
  type = 'menu';
  categories = [
    {name:'all', label: 'All', selected: true},
    {name:'starters', label: 'Starters'},
    {name:'meals', label: 'Meals'},
    {name:'chicken', label: 'Chicken'},
    {name:'mutton', label: 'Mutton'},
    {name:'seafoods', label: 'Sea Foods'},
    {name:'soups', label: 'Soups'},
    {name:'desserts', label: 'Desserts'},
    {name:'drinks', label: 'Drinks'},
  ];
  activeCategory = this.categories[0];

  layouts = [
    {name:'grid', label:'Grid', image:'layout_1'},
    {name:'list', label:'List',  image:'layout_2'},
  ]
  activeLayout = this.layouts[0];

  first: number = 0;

  rows: number = 10;

  menuItems: Menu[] = [];

  layout:any = 'list';
  search: string = '';

  constructor(private apiService:ApiService){
    this.apiService.getMenuItems().subscribe((res:any) =>{
      this.menuItems = res['default'];
      this.menuItems.map(menu =>  menu.ratings = Math.round(menu.ratings))
    })
  }


  onSearch(){

  }

  changeCategory(i:number){
    this.categories.forEach((cat, ind)=>{
      if(ind == i){
        cat.selected = true;
      }else{
        cat.selected = false;
      }
    })
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  getSeverity(e:any){

  }
}
