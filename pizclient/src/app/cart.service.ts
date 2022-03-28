import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cart=[];
  toppings=[];
  total:number=0;
  toppingtotal:number=0;
  private cartlength = new BehaviorSubject(this.cart.length);

  constructor() { }

  clearCart(){
    this.cart=[];
    this.toppings=[];
    this.cartlength.next(this.cart.length);
  }

  addToCart(pizza){
    pizza.qty=1;
    this.cart.push(pizza);
    this.cartlength.next(this.cart.length);
  }

  removeFromCart(pizza){
    let index=this.cart.indexOf(pizza);
    this.cart.splice(index,1);
    this.cartlength.next(this.cart.length);
  }

  addToppings(topping){
    this.toppings.push(topping);
  }

  removeToppings(topping){
    let index=this.toppings.indexOf(topping);
    this.toppings.splice(index,1);
  }

  getLength(){
     return this.cartlength.asObservable();
  }

  increse(pizza) {
    let index=this.cart.indexOf(pizza);
    this.cart[index].qty+=1;
  }

  decrese(pizza) {
    let index=this.cart.indexOf(pizza);
    this.cart[index].qty-=1;
  }

  getTotal(){
    this.total=0;
    for(let item of this.cart)
    {
      this.total=this.total +(parseInt(item.qty)*parseInt(item.price));
    }

  }
    

  getToppingsTotal(){
    this.toppingtotal=0;
    for(let item of this.toppings)
    {
      this.toppingtotal=this.toppingtotal + parseInt(item.price);
    }
  }
}
