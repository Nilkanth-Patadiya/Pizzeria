import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orderpizza',
  templateUrl: './orderpizza.component.html',
  styleUrls: ['./orderpizza.component.css']
})
export class OrderpizzaComponent implements OnInit  {

  pizzas: any = [];
  flags: boolean[] = [];

  constructor(private orderservice: OrderService, private cartservice: CartService) {
    
  }


  ngOnInit(): void {
    this.orderservice.getPizzas().subscribe((data) => {
      this.pizzas = data;
    });
    for (let i = 0; i < this.cartservice.cart.length; i++) {
      this.flags[this.cartservice.cart[i].id] = true;
    }
  }

  add(pizza) {
    this.cartservice.addToCart(pizza);
    this.cartservice.getTotal();
    this.flags[pizza.id] = !this.flags[pizza.id];
  }

  remove(pizza) {
    this.cartservice.removeFromCart(pizza);
    this.cartservice.getTotal();
    this.flags[pizza.id] = !this.flags[pizza.id];
  }

}

