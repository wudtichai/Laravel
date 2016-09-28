import { Component, EventEmitter, Output } from '@angular/core';
import { Router }      from '@angular/router';
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
  invalid = false;

  constructor(public authService: AuthService, public router: Router) {}

  onSubmit() { 
    this.submitted = true;
    this.invalid = false;

    this.authService.login(this.loginModel);
    if (this.authService.isLoggedIn) {
      this.loginModel = new Login();
      this.submitted = false;
      // Get the redirect URL from our auth service
      // If no redirect has been set, use the default
      let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/learn';
      // Redirect the user
      this.router.navigate([redirect]);
    } else {
      this.invalid = true;
    }
    setTimeout(() => this.active = true, 0);
  }

}
