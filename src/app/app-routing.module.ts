import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './mycart/cart/cart.component';
import { MycartModule } from './mycart/mycart.module';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import {AuthGuardService} from '../app/auth-guard.service'
const routes: Routes = [
   {
    path:"home",
   component:HomeComponent,
   canActivate:[AuthGuardService]
   },
   {
    path:"login",
   component:LoginComponent
   },
   {
    path:"Registration",
   component:RegistrationComponent
   },
  {
    path: "mycart",
    component: CartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
