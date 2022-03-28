import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  constructor(private http:HttpClient) { }

  getToppings(){
    return this.http.get("http://localhost:3000/toppings");
  }
}
