import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [BannerComponent, FooterComponent, SharedModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers:[MessageService]
})
export class ReservationComponent {

  reserveForm!:FormGroup;
  today = new Date();

  constructor(private fb: FormBuilder, private messageService: MessageService){
    this.createFormGroup();
  }

  createFormGroup(){
    this.reserveForm  =this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      date: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
      season :  new FormControl('AM', [Validators.required]),
      count: new FormControl(1, [Validators.required]),
      message: new FormControl('', [Validators.required]),
    })
  }


  onSubmit(){
    this.reserveForm.markAllAsTouched();
    if(this.reserveForm.valid){
      this.messageService.add({ severity: 'success', summary: 'Table Reserved Successfully..!!', });
      this.reserveForm.reset();
      this.createFormGroup();
    }
  }
}
