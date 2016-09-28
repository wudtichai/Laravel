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
  loginStatus = false;
  user :User;
  constructor(private authService: AuthService) { }
  
  ngOnInit() {
    this.check();
  }

  check() {
    this.authService.check().subscribe(
      (res) => this.setUser(res.data.user),
      (err) => this.clearUser()
    );
  }

  logout() {
    this.authService.logout().subscribe(
      (res) => this.clearUser()
    );
  }

  setUser(user){
    this.user = user;
    this.loginStatus = true;
  }

  clearUser(){
    delete this.user;
    this.loginStatus = false;
  }

  onLogin(res) {
    this.setUser(res.data.user);
  }

}
