import { Component, OnInit } from '@angular/core';
import { BuildService } from '../build.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-buildurpizza',
  templateUrl: './buildurpizza.component.html',
  styleUrls: ['./buildurpizza.component.css']
})
export class BuildurpizzaComponent implements OnInit {

  constructor(private buildservice: BuildService,private cartservice: CartService) { }

  toppings:any=[];
  toppingtotal:number;
  flags: boolean[] = [];

  ngOnInit(): void {
    this.buildservice.getToppings().subscribe((data) => {
    this.toppings = data;
    });

    this.toppingtotal=this.cartservice.toppingtotal;
    
    console.log("Inside ngoninit length of pizzas array is "+this.cartservice.toppings.length);
    for (let i = 0; i < this.cartservice.toppings.length; i++) {
      this.flags[this.cartservice.toppings[i].id] = true;
    }
  }

  checkUncheck(e:any,topping:any){
    if(e.target.checked)
    {
    this.cartservice.addToppings(topping);
    this.flags[topping.id] = !this.flags[topping.id];
    }
    else
    {
    this.cartservice.removeToppings(topping);
    this.flags[topping.id] = !this.flags[topping.id];
    }
  }

  getTotal(){
     this.cartservice.getToppingsTotal();
     this.toppingtotal=this.cartservice.toppingtotal;
  }

}
