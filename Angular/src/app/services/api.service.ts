import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as menus from '../../assets/json/menu.json';
import * as address from '../../assets/json/address.json'
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  address = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { 
    let add = JSON.parse(JSON.stringify(address))
    this.address.next(add.default);
  }

  getMenuItems(){
    let obs = new BehaviorSubject<any>({});
    obs.next(menus)
    return obs.asObservable();
  }

  getAddressData(){
    return this.address.asObservable();
  }

  getCountries(){
    return this.http.get('https://restcountries.com/v3.1/all?status=true&fields=name,flags')
  }
}
