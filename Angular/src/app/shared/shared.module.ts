
import { StyleClassModule } from 'primeng/styleclass';
import { AutoFocusModule } from 'primeng/autofocus';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabMenuModule } from 'primeng/tabmenu';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';

@NgModule({
  imports: [
    StyleClassModule,
    AutoFocusModule,
    InputTextModule,
    InputTextareaModule,
    TabMenuModule,
    PaginatorModule,
    ButtonModule,
    FloatLabelModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StyleClassModule,
    AutoFocusModule,
    InputTextModule,
    InputTextareaModule,
    TabMenuModule,
    PaginatorModule,
    ButtonModule,
    FloatLabelModule,
  ],
  providers: [],
})
export class SharedModule {}
