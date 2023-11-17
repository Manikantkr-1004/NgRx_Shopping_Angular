import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginAction } from '../store/actions/app.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  constructor(private store:Store, private router: Router){};

  email:string = "";
  password: string = '';

  onSubmit(event:Event){
    event.preventDefault();

    if(this.email==='ram@gmail.com' && this.password==='1234'){
      this.store.dispatch(loginAction());
      alert("Login successfully!!");
      this.router.navigate([''])
    }else{
      alert("Wrong Credentials!!");
    }
    
  }

  onEmail(e:Event){
    this.email = (e.target as HTMLInputElement).value;
  }

  onPass(e:Event){
    this.password = (e.target as HTMLInputElement).value;
  }
}
