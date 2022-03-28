import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart = [];
  total:number;
  toppingtotal:number;

  constructor(private cartservice: CartService,private router:Router)
  {

  }

  ngOnInit(): void {
    this.cart = this.cartservice.cart;
    this.total=this.cartservice.total;
    this.toppingtotal=this.cartservice.toppingtotal;
  }

  remove(pizza) {
    this.cartservice.removeFromCart(pizza);
    this.cartservice.getTotal();
    console.log("remove() called");
    this.total=this.cartservice.total;
    
  }
  onPlus(pizza){
    this.cartservice.increse(pizza);
    this.cartservice.getTotal();
    console.log("increse() called");
    this.total=this.cartservice.total;
  }
  onMinus(pizza){
    this.cartservice.decrese(pizza);
    this.cartservice.getTotal();
    console.log("decrese() called");
    this.total=this.cartservice.total;
  }
  clear(){
    this.cartservice.clearCart();
    this.cart = this.cartservice.cart;
    this.cartservice.getTotal();
    this.cartservice.getToppingsTotal();
    this.total=this.cartservice.total;
    this.toppingtotal=this.cartservice.toppingtotal;
  }

  paylo(){
    this.clear();
    this.router.navigateByUrl('/pay');
  }
}


