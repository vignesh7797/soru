import { Component, ViewEncapsulation } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { RippleModule } from 'primeng/ripple';
import { PaginatorModule } from 'primeng/paginator';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [BannerComponent, CommonModule, TabMenuModule, RippleModule, PaginatorModule],
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

  menuItems: any[] = [];

  constructor(private apiService:ApiService){
    this.apiService.getMenuItems().subscribe((res:any) =>{
      this.menuItems = res;

      let category: any[] = []
      this.menuItems.every(itm => category.push(itm.category));

      console.log([... new Set(category)])
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
}
