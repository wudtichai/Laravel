import { Component } from '@angular/core';
import { AuthService } from './auth.service'
import { User } from './user';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [AuthService]
})
export class AppComponent { 

  isLoggedIn = false;
  user :User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.checkAuth();
  }

  fetch() {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.user = this.authService.user;
  }

  checkAuth() {
    this.authService.check();
    this.fetch();
  }

  logout() {
    this.authService.logout();
    this.fetch();
  }

}
