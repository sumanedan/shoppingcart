import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import {Register} from 'src/app/register'
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
register:Register
  constructor(private obj:AngularFirestore) { }
  saveRegister(register:Register) {
    console.log("inside service", register)
    this.obj.collection("registerdata").add({ ...register })
  }
  readRegister() {
    return this.obj.collection("registerdata").snapshotChanges()
  }
  updateRegister(register) {
    this.obj.doc("registerdata/" + register.did).update({ ...register })
  }
  deleteRegister(register) {
    this.obj.doc("registerdata/" + register.did).delete()
  }
}
