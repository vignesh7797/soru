import { Component, ViewEncapsulation } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SharedModule } from '../../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BannerComponent, FooterComponent, SharedModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers:[MessageService]
})
export class ContactComponent {

  contactForm = new FormGroup({
    name : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    phone : new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    message : new FormControl('', [Validators.required, Validators.minLength(2)]),
  })

  constructor(private messageService: MessageService){}


  onSubmit(){
    if(this.contactForm.valid){
      this.messageService.add({ severity: 'success', summary: 'Email Sent Successfully', });
      this.contactForm.reset();
    }else{
      this.contactForm.markAllAsTouched();
    }
  }
}
