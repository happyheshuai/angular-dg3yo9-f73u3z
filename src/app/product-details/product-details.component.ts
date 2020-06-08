import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
     product;

     //Function start
     /*
        add an product in cart
     */
    addToCart(product){
        window.alert("Your proudct has been added to the cart! ");
        this.cartService.addToCart(product);
    }


  constructor(
        private rout:ActivatedRoute,
        private cartService:CartService) {
  }

  ngOnInit() {
      this.rout.paramMap.subscribe(params => {
      //this.product = products[params.get('productId')];
      this.product = products[0];
  });
  }

}