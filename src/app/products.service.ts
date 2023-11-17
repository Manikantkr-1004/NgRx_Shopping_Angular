import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './store/reducers/app.reducers';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }

  getCart(){
    return this.http.get("http://localhost:3000/cart");
  }

  addToCart(product:Product){
    return this.http.post("http://localhost:3000/cart",product);
  }

  removeToCart(id:number){
    return this.http.delete(`http://localhost:3000/cart/${id}`);
  }
}
