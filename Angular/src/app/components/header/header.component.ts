import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { filter } from 'rxjs';
import { CommonService } from '../../services/common.service';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  route = inject(Router);
  showMenu = true;
  showside = false;
  isFixed = false;
  accMenu = [ 
    { label: 'Settings', icon: 'settings', routerLink:'/account/dashboard' },
    { label: 'Favorites', icon: 'favorite', routerLink:'/account/favorite' },
    { label: 'Edit Profile', icon: 'edit', routerLink:'/account/profile'  },
    { label: 'Help', icon: 'help_outline', routerLink:'/faq' },
  ];

  pageMenu = [
    {label: 'Reservation', routerLink : '/reservation'},
    {label: 'FAQ', routerLink : '/faq'},
    {label: 'Account', items : [
      {label : 'Log In', routerLink:'/login'},
      {label : 'Sign Up', routerLink:'/signup'},
      {label : 'Forgot Password', routerLink:'/forgotpassword'},
      {label : 'Verify Code', routerLink:'/verify'},
    ]},
    {label: '404', routerLink : '/404'}
  ]

  restrictUrl = ['login', 'signup', 'forgotpassword', 'changepassword', 'verify'];
  favoriteList:Menu[] = []

  @HostListener('window:scroll', [])
  onScroll(){
    this.isFixed = window.scrollY >= 30;
  }
  

  ngOnInit(): void {
      this.route.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event =>{
        if(event instanceof NavigationEnd){
            this.showMenu = this.restrictUrl.find(url => event.url.includes(url)) ? false : true;
        }
      })
  }

  constructor(public common:CommonService){}

}
