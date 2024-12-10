import { Component, ViewEncapsulation } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})
export class ProfileComponent {
  files = [];

  totalSize : number = 0;

  totalSizePercent : number = 0;

  profileForm!:FormGroup;

  constructor(private config: PrimeNGConfig, private messageService: MessageService, private fb:FormBuilder) {
    this.initiateForm();
  }

  initiateForm(){
    this.profileForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      address: new FormControl('', [Validators.required]),
      org: new FormControl(''),
      website: new FormControl(''),
      facebook: new FormControl(''),
      instagram: new FormControl('')

    })
  }

  choose(event:any, callback:any) {
      callback();
  }

  onRemoveTemplatingFile(event:any, file:any, removeFileCallback:any, index:any) {
      removeFileCallback(event, index);
      this.totalSize -= parseInt(this.formatSize(file.size));
      this.totalSizePercent = this.totalSize / 10;
  }


  onClearTemplatingUpload(clear:any) {
      clear();
      this.totalSize = 0;
      this.totalSizePercent = 0;
  }

  onTemplatedUpload() {
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
  }

  onSelectedFiles(event:any) {
      this.files = event.currentFiles;
      this.files.forEach((file:any) => {
          this.totalSize += parseInt(this.formatSize(file.size));
      });
      this.totalSizePercent = this.totalSize / 10;
  }

  uploadEvent(callback:any) {
      callback();
  }

  formatSize(bytes:any) {
      const k = 1024;
      const dm = 2;
      const sizes:any = this.config.translation.fileSizeTypes;
      if (bytes === 0) {
          return `0 ${sizes[0]}`;
      }

      const i = Math.floor(Math.log(bytes) / Math.log(k));
      const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

      return `${formattedSize} ${sizes[i]}`;
  }

  onSubmit(){
    if(this.profileForm.valid){
      this.messageService.add({ severity: 'success', summary: 'Profile updated Successfully', });
      this.profileForm.reset();
      this.initiateForm();
    }else{
      this.profileForm.markAllAsTouched();
    }
  }
}
