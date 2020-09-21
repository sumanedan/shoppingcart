import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProdlistService } from 'src/app/prodlist.service';
import { HomeComponent } from '../../home/home.component'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void {   
  
    let h=new HomeComponent(null)
    console.log(h.cartlist)
}

}


