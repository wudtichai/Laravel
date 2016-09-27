import { Component } from '@angular/core';
import { Login }    from './login';

@Component({
  selector: 'login',
  templateUrl: 'app/login.component.html',
  styleUrls: ['app/login.component.css']
})
export class LoginComponent { 
  submitted = false;
  loginModel = new Login();
  active = true;

  onSubmit() { 
    this.submitted = true;
    console.log(this.loginModel);
    this.loginModel = new Login();
    this.submitted = false;
    setTimeout(() => this.active = true, 0);
  }
}
