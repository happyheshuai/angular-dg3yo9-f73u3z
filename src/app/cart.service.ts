import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn:'root'
})
export class CartService {
    items = [];

    /*
       add an product to cart
    */
    addToCart(product){
      this.items.push(product);
    }

    /*
      get an all products from cart
    */
    getItems(){
      return this.items;
    }
  

    /*
      clear cart
    */
    clearCar(){
      this.items = [];
      return this.items;
    }

    /*
      get shipping price
    */
    getShippingPrices(){
      return this.http.get('/assets/shipping.json');
    }


  constructor(
    private http:HttpClient
  ) { }

}