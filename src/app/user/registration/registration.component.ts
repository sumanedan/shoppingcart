import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import {Register} from 'src/app/register'
import {RegistrationService} from 'src/app/registration.service'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder,private service:RegistrationService) { }
  submitted = 'false'
  registerlist:Register[]
  ngOnInit(): void {
    this.service.readRegister().subscribe(data=>{
      this.registerlist=data.map((doc)=>{
        return{
          did:doc.payload.doc.id,
          ...doc.payload.doc.data() as {}
        } as Register
      })
    })
  }
  registerForm = this.fb.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.pattern("^[a-z]+@(gmail.com)|(yahoo.in)$")]],
    password: ["", [Validators.required, Validators.minLength(5)]],
    dob: ["", [Validators.required]],
    mobile: ["", [Validators.required, Validators.pattern("^[0-9]{10}$")]]
  })
  register() {
    this.submitted = 'true'
    if (this.registerForm.invalid) {
      return
    } else {
      console.log(this.registerForm.value)
    }
  }
  save(){
    console.log(this.registerForm.value)
    if(this.registerForm.value.did==null){
    this.service.saveRegister(this.registerForm.value)
  }else{
  this.service.updateRegister(this.registerForm.value)
}}
  reset() {
    this.submitted = 'false'
    this.registerForm.reset()
  }
 
    delete(register){
    this.service.deleteRegister(register)
    }
  get f() {
    return this.registerForm.controls
  }
  
}
