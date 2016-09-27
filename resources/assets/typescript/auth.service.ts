import { Injectable } from '@angular/core';
import { User } from './user';
import { Login } from './login';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private loginUrl = 'auth/login';
  user: User; 

  constructor(private http: Http) { }

  login(login: Login) {
    return this.http
      .post(this.loginUrl, JSON.stringify(login), {headers: this.headers})
      .map(response => <User>response.json().data.user)
      .subscribe(user => this.user = user);
  }
}
