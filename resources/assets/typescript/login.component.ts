import { Component } from '@angular/core';
import { Router }      from '@angular/router';
import { Login }    from './login';
import { AuthService } from './auth.service'

@Component({
  templateUrl: 'app/login.component.html',
  styleUrls: ['app/login.component.css']
})
export class LoginComponent {
  loginModel = new Login();
  invalid = false;

  constructor(private authService: AuthService, public router: Router) {}

  onSubmit() { 
    this.invalid = false;

    this.authService.login(this.loginModel).subscribe(
      () => {
        if (this.authService.isLoggedIn) {
          this.loginModel = new Login();
          this.router.navigate(['/learn']);
        }
      },
      () => {
        this.invalid = true;
      }
    );
  }

}
