import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { User } from './user';
import { Login } from './login';
import { headers, headersPost } from './ajax-header';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
  private loginUrl = 'api/auth/login';
  private logoutUrl = 'api/auth/logout';
  private getStatusUrl = 'api/auth/status';
  isLoggedIn: boolean = false;
  user :User;
  redirectUrl: string;

  private userSource = new Subject<User>();
  userUpdated$ = this.userSource.asObservable();

  private isLoggedInSource = new Subject<boolean>();
  isLoggedInUpdated$ = this.isLoggedInSource.asObservable();

  constructor(private http: Http) { }

  login(login: Login) {
    return this.http
      .post(this.loginUrl, JSON.stringify(login), {headers:headersPost})
      .map(this.setUser);
  }

  check() {
    return this.http
      .get(this.getStatusUrl, {headers})
      .map(this.setUser);
  }
  
  logout() {
    return this.http
      .get(this.logoutUrl, {headers})
      .map(
        (res) => {
          this.clearSession();
        });
  }

  updateUser(user: User) {
    this.userSource.next(user);
  }

  clearSession(){
    delete this.user;
    this.isLoggedIn = false;
    this.isLoggedInSource.next(this.isLoggedIn);
  }

  setUser = (res:Response) => {
    let user = res.json().data.user || { };
    this.user = user;
    this.updateUser(user);
    this.isLoggedIn = true;
  }

}
