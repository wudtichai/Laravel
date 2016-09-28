import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { Login } from './login';
import { headers, headersPost } from './ajax-header';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private loginUrl = 'auth/login';
  private logoutUrl = 'auth/logout';
  private getStatusUrl = 'auth/status';
  isLoggedIn: boolean = false;
  redirectUrl: string;
  user :User;

  constructor(private http: Http) { }

  login(login: Login) {
    this.http
      .post(this.loginUrl, JSON.stringify(login), {headers:headersPost})
      .map(res => res.json())
      .subscribe(res => this.setUser(res.data.user));
  }

  logout() {
    this.http
      .get(this.logoutUrl, {headers})
      .map(res => res.json())
      .subscribe((res) => this.clearUser());
  }

  check() {
    this.http
      .get(this.getStatusUrl, {headers})
      .map(res => res.json())
      .subscribe(
        (res) => this.setUser(res.data.user),
        (err) => this.clearUser()
      );
  }

  setUser(user){
    this.user = user;
    this.isLoggedIn = true;
  }

  clearUser(){
    delete this.user;
    this.isLoggedIn = false;
  }

}
