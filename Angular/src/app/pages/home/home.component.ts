import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { ShortMenuComponent } from '../../components/short-menu/short-menu.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, AboutUsComponent, ShortMenuComponent, CarouselComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
