import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgor-password',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  stateOptions: any[] = [{ label: 'Email', value: 'email' },{ label: 'Mobile', value: 'mobile' }];
  value: string = 'email';

  route = inject(Router);
  email = '';
  mobile = null;


  onSubmit(){
    this.route.navigate(['/verify']);
  }
}
