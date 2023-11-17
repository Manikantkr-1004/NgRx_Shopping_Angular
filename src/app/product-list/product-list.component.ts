import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store"
import { ProductsService } from '../products.service';
import { addCartAction, addProductAction } from '../store/actions/app.actions';
import { Product, State } from '../store/reducers/app.reducers';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private store: Store, private productService: ProductsService){}

  productData:Product[] =[];
  cartData: Product[] = [];
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: any) => {
      this.store.dispatch(addProductAction(products));
      this.store.select((state:any) => state.productReducer.products).subscribe((products) => {
        this.productData = products;
      });

      this.productService.getCart().subscribe((cart:any)=>{
        this.store.dispatch(addCartAction(cart));
        this.store.select((state:any)=> state.productReducer.cart).subscribe((cart)=> {
          this.cartData = cart;
        })
      })
    });    
  };

  addToCart(id:number){
    const singleData:any = this.productData.find((ele)=> ele.id===id);
    
    this.productService.addToCart(singleData).subscribe((data)=>{
      alert("Product added in cart");
      
      this.productService.getCart().subscribe((cart:any)=>{
        this.store.dispatch(addCartAction(cart));
        this.store.select((state:any)=> state.productReducer.cart).subscribe((cart)=> {
          this.cartData = cart;
        })
      })

    },(error)=>{
      alert(error.message)
    })
  }

  checkCart(id:number): boolean{
    const singleData = this.cartData.find((ele)=> ele.id===id);
    if(singleData){
      return true;
    }else{
      return false;
    }
  }

}
