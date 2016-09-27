import { Component } from '@angular/core';
import { Login }    from './login';
import { AuthService } from './auth.service'

@Component({
  selector: 'login',
  templateUrl: 'app/login.component.html',
  styleUrls: ['app/login.component.css'],
  providers: [AuthService]
})
export class LoginComponent { 
  submitted = false;
  loginModel = new Login();
  active = true;

  constructor(private authService: AuthService) {}

  onSubmit() { 
    this.submitted = true;
    this.authService.login(this.loginModel);
    this.loginModel = new Login();
    this.submitted = false;
    setTimeout(() => this.active = true, 0);
  }
}
