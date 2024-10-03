import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as menus from '../../assets/json/menu.json';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  getMenuItems(){
    // return this.http.get('media/json/menu.json')

    let obs = new BehaviorSubject<any>({});
    obs.next(menus)
    return obs.asObservable();
  }
}
