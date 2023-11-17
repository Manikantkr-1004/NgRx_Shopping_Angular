import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../store/reducers/app.reducers';
import { ProductsService } from '../products.service';
import { addCartAction } from '../store/actions/app.actions';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private store:Store, private productSerive: ProductsService){};

  cartData: Product[] =[];

  ngOnInit(): void {
    this.productSerive.getCart().subscribe((cart:any)=>{
      this.store.dispatch(addCartAction(cart));
      this.store.select((state:any)=> state.productReducer.cart).subscribe((cart)=> {
        this.cartData = cart;
      })
    })
  }

  removeItem(id: number){
    this.productSerive.removeToCart(id).subscribe((data)=>{
      alert("Item removed successfully!!");

      this.productSerive.getCart().subscribe((cart:any)=>{
        this.store.dispatch(addCartAction(cart));
        this.store.select((state:any)=> state.productReducer.cart).subscribe((cart)=> {
          this.cartData = cart;
        })
      })

    },(error)=>{
      alert(error.message)
    })
  }

}
