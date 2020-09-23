import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  submitted = 'false'
  ngOnInit(): void {
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
  }
  reset() {
    this.submitted = 'false'
    this.registerForm.reset()
  }
  get f() {
    return this.registerForm.controls
  }
}
