import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  slides: string[] = [
    'assets/slide1.jpg',
    'assets/slide2.jpg',
    'assets/slide3.jpg'
  ];
  currentIndex: number = 0;
  transform: string = 'translateX(0)';

  constructor(){
    const interval = setInterval(() => {
      this.moveToNext();
    }, 10000);
  }

  moveToSlide(index: number) {
    this.currentIndex = index;
    this.transform = `translateX(-${this.currentIndex * 100}%)`;
  }

  moveToNext() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.moveToSlide(this.currentIndex);
  }

  moveToPrev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.slides.length - 1;
    }
    this.moveToSlide(this.currentIndex);
  }

}
