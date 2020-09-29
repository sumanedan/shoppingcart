import { Component, OnInit } from '@angular/core';
import { login } from '../login'
import { LoginserviceService } from 'src/app/loginservice.service'
import { RegistrationService } from 'src/app/registration.service'
import { Router } from '@angular/router';
import {Register} from 'src/app/register'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new login("", "")
  loginlist:login[]=[]
  registerlist:Register[]
  returnURL:string=""
  constructor(private service: LoginserviceService, private regservice: RegistrationService,private router:Router) {
  }
  ngOnInit(): void {
    this.returnURL="/home"
    this.service.readLogin().subscribe(data => {
      this.loginlist = data.map((doc) => {
        return {
          did: doc.payload.doc.id,
          ...doc.payload.doc.data() as {}
        } as login
      })
    })
    this.regservice.readRegister().subscribe(data=>{
      this.registerlist=data.map((doc)=>{
        return{
          did:doc.payload.doc.id,
          ...doc.payload.doc.data() as {}
        } as Register
      })
    })
  }
  save() {
    console.log(this.model)
    if(this.model.did==null){
    this.service.saveLogin(this.model)
    }else{
      this.service.updatelogin(this.model)
    }
    this.validatelogin(this.model)
  }
  validatelogin(s){
    this.registerlist.forEach((login)=>{
      if(s.email==login.email && s.password==login.password){
        localStorage.setItem("isLoggedIn",'true')
        localStorage.setItem("username",this.model.email)
        this.router.navigate([this.returnURL])
        return
      }
      else{
        alert("UNAUTHORIZED USER")
      }
    })
    
  }
  }
