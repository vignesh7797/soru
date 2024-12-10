import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { VerifyCodeComponent } from './pages/verify-code/verify-code.component';
import { FaqComponent } from './pages/faq/faq.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MenuDetailComponent } from './pages/menu-detail/menu-detail.component';
import { DashboardComponent } from './pages/account/dashboard/dashboard.component';
import { AccountComponent } from './pages/account/account.component';
import { ProfileComponent } from './pages/account/profile/profile.component';
import { PasswordChangeComponent } from './pages/account/password-change/password-change.component';
import { AddressComponent } from './pages/account/address/address.component';
import { FavoriteComponent } from './pages/account/favorite/favorite.component';
import { OrdersComponent } from './pages/account/orders/orders.component';
import { ReservationsComponent } from './pages/account/reservation/reservation.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
    {path : '', component: HomeComponent},
    {path : 'menu', component: MenuComponent},
    {path : 'menu/:id', component: MenuDetailComponent},
    {path : 'aboutUs', component: AboutUsComponent},
    {path : 'contact', component: ContactComponent},
    {path : 'cart', component: CartComponent},
    {path : 'reservation', component: ReservationComponent},
    {path : 'login', component: LoginComponent},
    {path : 'signup', component: SignupComponent},
    {path : 'forgotpassword', component: ForgotPasswordComponent},
    {path : 'verify', component: VerifyCodeComponent},
    {path : 'faq', component: FaqComponent},
    {path : '404', component: PageNotFoundComponent},
    {path : 'account', component:AccountComponent, children: [
        {path : 'dashboard', component : DashboardComponent},
        {path : 'profile', component : ProfileComponent},
        {path : 'passwordChange', component : PasswordChangeComponent},
        {path : 'address', component : AddressComponent},
        {path : 'favorite', component : FavoriteComponent},
        {path : 'reservation', component : ReservationsComponent},
        {path : 'orders', component : OrdersComponent},
        {path : '', redirectTo:'dashboard', pathMatch:'full'},
        {path : '**', redirectTo:'dashboard', pathMatch:'full'},
    ]},
    {path : '**', redirectTo : '404', pathMatch:'full'}
];
