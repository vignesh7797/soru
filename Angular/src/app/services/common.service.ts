import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  favorities: WritableSignal<Menu[]> = signal([]);
  cartList: WritableSignal<Menu[]> = signal([])

  constructor() { }

  addFavorities(fav:Menu){
    const currentItem = this.favorities();
    this.favorities.set([...currentItem, fav])
  }
  removeFavorities(index:number){
    let fav =  this.favorities();
    fav.splice(index, 1);
    this.favorities.set(fav)
  }

  addCartItem(item:Menu){
    const currentItem = this.cartList();
    this.cartList.set([...currentItem, item])
  }

  removeCartItem(index:number){
    let cart =  this.cartList();
    cart.splice(index, 1);
    this.cartList.set(cart);
  }
}
