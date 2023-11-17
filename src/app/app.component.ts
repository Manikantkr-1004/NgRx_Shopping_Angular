import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logoutAction } from './store/actions/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shopping-app';

  constructor(private store: Store){}

  auth: boolean = false;

  ngOnInit(): void {
      this.store.select((state:any)=> state.productReducer.authenticated).subscribe((auth)=>{
        this.auth = auth;
        console.log(auth,'authapp')
      })
  }

  checkAuth(): boolean{
    if(this.auth){
      return true;
    }else{
      return false;
    }
  }

  doLogout(): void{
    this.store.dispatch(logoutAction());
    window.location.reload();
  }

}
