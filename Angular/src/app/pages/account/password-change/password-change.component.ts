import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-password-change',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './password-change.component.html',
  styleUrl: './password-change.component.scss',
})
export class PasswordChangeComponent {

  pswdForm!: FormGroup;
  pattern = /^(?=.*[A-Z])(?=.*\d).{6,}$/i;

  constructor(private fb:FormBuilder, private messageService: MessageService){
    this.initiateForm();
  }

  initiateForm(){
    this.pswdForm = this.fb.group({
      old : new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
      new : new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
      confirm : new FormControl('', [Validators.required])
    })
  }

  onSubmit(){
    if(this.pswdForm.valid){
      this.messageService.add({ severity: 'success', summary: 'Password Updated Successfully', });
      this.pswdForm.reset();
      this.initiateForm();
    }else{
      this.pswdForm.markAllAsTouched();
    }
  }
}
