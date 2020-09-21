import { FormStyle } from '@angular/common';
import { ValueTransformer } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {ProdlistService} from '../prodlist.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
productlist:any;
s:any;
 public cartlist:string[]=[]

  constructor(private service:ProdlistService) {}
  tocart(k){
    let s:any=document.getElementById("mytab")
    //console.log(s.rows[k])
    this.cartlist.push(s.rows[k])
    this.cartj()
    }
  ngOnInit(): void {
    this.service.getlist().subscribe(list=>{
      this.productlist=list
    })
  }
cartj(){
console.log("Entries to my Cart...")
  console.log(this.cartlist)

  }
}
