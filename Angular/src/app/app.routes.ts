import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
    {path : '', component: HomeComponent},
    {path : 'menu', component: MenuComponent},
    {path : 'aboutUs', component: AboutUsComponent},
    {path : '**', redirectTo : '', pathMatch:'full'}
];
