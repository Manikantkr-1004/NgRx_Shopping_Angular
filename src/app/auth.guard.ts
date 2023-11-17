import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { Store } from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router, private store: Store) {}

  canActivate(): boolean {
    let userAuth = false;
    this.store.select((state: any) => state.productReducer.authenticated).subscribe((auth)=>{
      userAuth = auth;
    })

    if(userAuth){
      return true;
    }else{
      this.router.navigate(['login'])
      return false;
    }
  }
}
