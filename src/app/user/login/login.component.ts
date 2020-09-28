import { Component, OnInit } from '@angular/core';
import { login } from '../login'
import { LoginserviceService } from 'src/app/loginservice.service'
import { RegistrationService } from 'src/app/registration.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new login("", "")
  loginlist: login[]
  constructor(private service: LoginserviceService, private regservice: RegistrationService) {
  }
  ngOnInit(): void {
    this.service.readLogin().subscribe(data => {
      this.loginlist = data.map((doc) => {
        return {
          did: doc.payload.doc.id,
          ...doc.payload.doc.data() as {}
        } as login
      })
    })
  }
  save() {
    console.log(this.model)
    this.service.saveLogin(this.model)
    this.service.validateUser(this.model)
  }
  
  }
