import { getLocaleFirstDayOfWeek } from '@angular/common';
import { toTypeScript } from '@angular/compiler';
import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';
import { Component, OnInit } from '@angular/core';
import { CartlistService } from 'src/app/cartlist.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart:any
total=0
  constructor(private obj:CartlistService) { }
  
  ngOnInit(): void {   
  console.log(this.obj.cartlist)
  this.cart=this.obj.cartlist
  this.show();
}
show(){
let s=document.getElementById("total")
this.cart.forEach(obj=>{
  this.total+=obj.price*obj.quantity
})
s.innerText="TOTAL:"+this.total
}
}



