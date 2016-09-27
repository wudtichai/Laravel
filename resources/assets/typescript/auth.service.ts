import { Injectable } from '@angular/core';
import { User } from './user';
import { Login } from './login';
import { headers } from './ajax-header';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private loginUrl = 'auth/login';
  private user: User; 

  constructor(private http: Http) { }

  login(login: Login) {
    return this.http
      .post(this.loginUrl, JSON.stringify(login), {headers})
      .map(response => <User>response.json().data.user)
      .subscribe(user => this.user = user);
  }
}
