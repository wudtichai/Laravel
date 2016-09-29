import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { User } from './user';
import { Login } from './login';
import { headers, headersPost } from './ajax-header';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
  private loginUrl = 'auth/login';
  private logoutUrl = 'auth/logout';
  private getStatusUrl = 'auth/status';
  isLoggedIn: boolean = false;
  user :User;
  redirectUrl: string;

  constructor(private http: Http) { }

  login(login: Login) {
    return this.http
      .post(this.loginUrl, JSON.stringify(login), {headers:headersPost})
      .map(this.setUser)
      .catch(this.handleError);
  }

  logout() {
    return this.http
      .get(this.logoutUrl, {headers})
      .map(
        (res) => {
          delete this.user;
          this.isLoggedIn = false;
        })
      .catch(this.handleError);
  }

  check() {
    return this.http
      .get(this.getStatusUrl, {headers})
      .map(this.setUser)
      .catch(this.handleError);
  }

  setUser = (res:Response) => {
    let user = res.json().data.user || { };
    this.user = user;
    this.isLoggedIn = true;
  }

  handleError(error: any){
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
