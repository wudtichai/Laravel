import { Injectable } from '@angular/core';
import { headersPost } from '../ajax-header';
import { Http } from '@angular/http';

@Injectable()
export class TestService {
  private testUrl = 'api/learn/test';

  constructor(private http: Http) { }

  send(test) {
    return this.http
      .post(this.testUrl, JSON.stringify(test), {headers:headersPost})
  }

}
