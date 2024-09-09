import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-short-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './short-menu.component.html',
  styleUrl: './short-menu.component.scss'
})
export class ShortMenuComponent {

  menus = [
    {
      title : 'Paniyaaram & Sambar',
      recipe : 'Rice flour, Dall, Tomato, Kari leaves',
      ratings : 4,
      type : 'veg'
    },
    {
      title : 'Ghee Dosai & Sambar',
      recipe : 'Rice flour, Dall, Tomato, Kari leaves',
      ratings : 3,
      type : 'veg'
    },
    {
      title : 'Idli & Sambar',
      recipe : 'Rice flour, Dall, Tomato, Kari leaves',
      ratings : 5,
      type : 'veg'
    },
    {
      title : 'Idli & Chicken Kari',
      recipe : 'Rice flour, Tomato, Chicken,',
      ratings : 4,
      type : 'nonveg'
    },
    {
      title : 'Meals & Chicken Kari',
      recipe : 'Rice, Chicken,',
      ratings : 5,
      type : 'nonveg'
    }
  ];

  set ratings(num:number) {
    new Array(num)
  }

  get ratings(){
    return this.ratings;
  }
}
