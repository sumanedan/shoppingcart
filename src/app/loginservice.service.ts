import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import {login} from './user/login'
import {RegistrationService} from 'src/app/registration.service'
import { Register } from './register';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
login:login
  constructor(private obj:AngularFirestore,private regservice:RegistrationService) { }
  saveLogin(login:login) {
    console.log("inside service", login)
    this.obj.collection("logindata").add({ ...login })
  }
  readLogin() {
    return this.obj.collection("logindata").snapshotChanges()
  }
  validateUser(login:login) {
    
    
}}
