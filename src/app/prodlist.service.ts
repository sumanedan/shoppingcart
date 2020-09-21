import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProdlistService {
list=[]
  constructor(private http:HttpClient) { }
  getlist(){
    return this.http.get("http://localhost:4200/assets/products.json")
  }

valcart(){
return this.list
}
}