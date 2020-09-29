

import { FormStyle } from '@angular/common';
import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { CartlistService } from '../cartlist.service';
import { ProdlistService } from '../prodlist.service'
import {AuthService} from '../auth.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productlist: any;
  s: any;
  public cart: string[] = []
  clicked = false;
  constructor(private service: ProdlistService, private obj: CartlistService,private ser:AuthService,private router:Router) { }
  tocart(p) {

    this.cart.push(p)
    this.cartj()
  }
  ngOnInit(): void {
    this.service.getlist().subscribe(list => {
      this.productlist = list
    })
  }
  cartj() {
    console.log("Entries to my Cart...")
    this.obj.cartlist = this.cart;
    console.log(this.obj.cartlist);
   
  }
  incQ(p) {
    p.quantity += 1
  }
  decQ(p) {
    p.quantity -= 1
  }
  logout(){
    this.ser.logout()
    this.router.navigate(["/login"])
  }
mycart(){
  this.router.navigate(["/mycart"])
}
}