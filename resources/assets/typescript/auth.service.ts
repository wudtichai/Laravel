import { Injectable } from '@angular/core';
import { Login } from './login';
import { headers, headersPost } from './ajax-header';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  private loginUrl = 'auth/login';
  private logoutUrl = 'auth/logout';
  private getStatusUrl = 'auth/status';

  constructor(private http: Http) { }

  login(login: Login) {
    return this.http
      .post(this.loginUrl, JSON.stringify(login), {headers:headersPost})
      .map(res => res.json());
  }

  logout() {
    return this.http
      .get(this.logoutUrl, {headers})
      .map(res => res.json());
  }

  check() {
    return this.http
      .get(this.getStatusUrl, {headers})
      .map(res => res.json());
  }

}
