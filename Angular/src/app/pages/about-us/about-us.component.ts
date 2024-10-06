import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [BannerComponent, FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
