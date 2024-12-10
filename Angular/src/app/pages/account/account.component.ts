import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet,} from '@angular/router';
import { MenuItem } from 'primeng/api';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {

  menuItems: MenuItem[] =[
    {
      separator : true
    },
    {
      label : 'Dashboard',
      icon : 'dashboard',
      routerLink : 'dashboard'
    },
    {
      label : 'Profile',
      icon : 'person',
      routerLink : 'profile'
    },
    {
      label : 'Password Change',
      icon : 'key',
      routerLink : 'passwordChange'
    },
    {
      label : 'Address',
      icon : 'location_on',
      routerLink : 'address'
    },
    {
      label : 'Favorites',
      icon : 'favorite',
      routerLink : 'favorite'
    },
    {
      label : 'Reservation',
      icon : 'confirmation_number',
      routerLink : 'reservation'
    },
    {
      label : 'Orders',
      icon : 'checklist_rtl',
      routerLink : 'orders'
    },
    {
      separator : true
    },
  ]

  sidebarVisible: boolean = false;
}
