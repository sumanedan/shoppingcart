import { Component, OnInit } from '@angular/core';
import {login} from '../login'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
model=new login("","")
  constructor() {
   }
  ngOnInit(): void {
  }
save(){
  console.log(this.model)
}
  
}
