import { Component, EventEmitter, Output } from '@angular/core';
import { Router }      from '@angular/router';
import { Login }    from './login';
import { AuthService } from './auth.service'

@Component({
  selector: 'login',
  templateUrl: 'app/login.component.html',
  styleUrls: ['app/login.component.css']
})
export class LoginComponent {
  submitted = false;
  loginModel = new Login();
  active = true;
  invalid = false;

  constructor(private authService: AuthService, public router: Router) {}

  onSubmit() { 
    this.submitted = true;
    this.invalid = false;

    this.authService.login(this.loginModel).subscribe(() => {
      if (this.authService.isLoggedIn) {
        this.loginModel = new Login();
        this.submitted = false;
        this.router.navigate(['/learn']);
      } else {
        this.invalid = true;
      }
      setTimeout(() => this.active = true, 0);      
    });
  }

}
