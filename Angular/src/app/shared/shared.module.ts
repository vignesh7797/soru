
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
import { InputGroupModule } from 'primeng/inputgroup';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { SidebarModule } from 'primeng/sidebar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputOtpModule } from 'primeng/inputotp';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { AccordionModule } from 'primeng/accordion';
import { ProgressBarModule } from 'primeng/progressbar';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { BadgeModule } from 'primeng/badge';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';

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
    InputGroupModule,
    ToastModule,
    CalendarModule,
    MenuModule,
    RippleModule,
    PasswordModule,
    CheckboxModule,
    SidebarModule,
    SelectButtonModule,
    InputOtpModule,
    TieredMenuModule,
    AccordionModule,
    ProgressBarModule,
    FileUploadModule,
    TabViewModule,
    DialogModule,
    ProgressBarModule,
    BadgeModule,
    OverlayPanelModule,
    DataViewModule,
    TableModule,
    RatingModule
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
    InputGroupModule,
    ToastModule,
    CalendarModule,
    MenuModule,
    RippleModule,
    PasswordModule,
    CheckboxModule,
    SidebarModule,
    SelectButtonModule,
    InputOtpModule,
    TieredMenuModule,
    AccordionModule,
    ProgressBarModule,
    FileUploadModule,
    TabViewModule,
    DialogModule,
    ProgressBarModule,
    BadgeModule,
    OverlayPanelModule,
    DataViewModule,
    TagModule,
    TableModule,
    RatingModule
  ],
  providers: [MessageService],
})
export class SharedModule {}
