import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FooterComponent, BannerComponent, SharedModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  faqData = [
    {header:'What are your opening hours', content:"We’re open [list days and times, e.g., Monday to Friday, 11 AM - 10 PM, and Saturday to Sunday, 10 AM - 11 PM].", like:null},
    {header:'Do you offer online reservations', content:'	Yes, you can reserve a table online through our website [insert link if available] or call us at [phone number].', like:null},
    {header:'Are walk-ins welcome, or do I need a reservation', content:'We welcome both walk-ins and reservations! However, for large groups or peak hours, reservations are recommended.', like:null},
    {header:'Do you offer takeout or delivery', content:'Yes, we offer both takeout and delivery services. You can place an order directly on our website or through our partnered delivery apps [list apps if any].', like:null},
    {header:'Is there parking available', content:'We offer [free/paid] parking in our on-site parking lot. Additional street parking is also available nearby.', like:null},
    {header:'Do you accommodate dietary restrictions or food allergies', content:'Absolutely! Please inform your server about any dietary needs or allergies, and we’ll do our best to accommodate you.', like:null},
    {header:'Are you family-friendly', content:'Yes, we welcome families! We offer a kids’ menu and high chairs. Feel free to bring the whole family.', like:null},
    {header:'Do you have vegetarian or vegan options', content:'Yes, we offer a variety of vegetarian and vegan dishes. Check out our menu for a full list of options.', like:null},
    {header:'Do you host private events or offer catering', content:'Yes, we can host private events and provide catering for special occasions. Contact us at [contact email or phone number] for more details.', like:null},
    {header:'Do you have gift cards', content:'Yes, we offer gift cards! You can purchase them at our restaurant or online [provide link if available].', like:null},
  ];


  onLike(item:any){
    item.like = true;
  }

  onDisLike(item:any){
    item.like = false;
  }
}
