import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  email = '';
  username = '';
  password = '';
  confirmpassword = '';
  mobile = null;
  route = inject(Router)


  onSubmit(){
    this.route.navigate(['/'])
  }
}
