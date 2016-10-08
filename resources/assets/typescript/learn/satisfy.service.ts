import { Injectable } from '@angular/core';
import { headersPost } from '../ajax-header';
import { Http } from '@angular/http';

@Injectable()
export class SatisfyService {
  private satifyUrl = 'api/learn/satify';

  constructor(private http: Http) { }

  send(satify) {
    return this.http
      .post(this.satifyUrl, JSON.stringify(satify), {headers:headersPost})
  }

}
