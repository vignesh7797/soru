import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, FloatLabelModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  email = '';
  message = '';
  @Input()feedback: boolean = false;

}
