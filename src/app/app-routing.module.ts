import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './mycart/cart/cart.component';
import { MycartModule } from './mycart/mycart.module';

const routes: Routes = [
   {
    path:"home",
   component:HomeComponent
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
