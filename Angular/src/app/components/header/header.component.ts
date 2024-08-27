import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isFixed = false;

  @HostListener('window:scroll', [])
  onScroll(){
    console.log(window.scrollY)
    this.isFixed = window.scrollY >= 30;
  }

}
