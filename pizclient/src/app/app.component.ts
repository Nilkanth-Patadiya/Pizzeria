import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'pizclient';
  count:number;
  subscription;

  constructor(private cartservice:CartService){}

  ngOnInit()
  {
    this.subscription = this.cartservice.getLength().subscribe(
    (res)=>{
      this.count=res;
    },
    err => {
      console.error(`An error occurred: ${err.message}`);
    }
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
