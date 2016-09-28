import { Component, EventEmitter, Output } from '@angular/core';
import { Login }    from './login';
import { AuthService } from './auth.service'

@Component({
  selector: 'login',
  templateUrl: 'app/login.component.html',
  styleUrls: ['app/login.component.css'],
  providers: [AuthService]
})
export class LoginComponent { 
  @Output() onLogin = new EventEmitter();
  submitted = false;
  loginModel = new Login();
  active = true;
  invalid = false;

  constructor(private authService: AuthService) {}

  onSubmit() { 
    this.submitted = true;
    this.invalid = false;
    this.authService.login(this.loginModel).subscribe(
      (res) => {
        this.onLogin.emit(res);
        this.loginModel = new Login();
        this.submitted = false;
      },
      (err) => {
        this.invalid = true;
      });

    setTimeout(() => this.active = true, 0);
  }
}
