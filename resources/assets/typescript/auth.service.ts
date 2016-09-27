import { Injectable } from '@angular/core';
import { User } from './user';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private loginUrl = 'auth/login';

  constructor(private http: Http) { }

  login(studentId: string): Promise<User> {
    return this.http
      .post(this.loginUrl, JSON.stringify({studentId}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data.user)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
