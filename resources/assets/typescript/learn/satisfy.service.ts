import { Injectable } from '@angular/core';
import { headersPost } from '../ajax-header';
import { Http } from '@angular/http';

@Injectable()
export class SatisfyService {
  private satisfyUrl = 'api/learn/satisfy';

  constructor(private http: Http) { }

  send(satisfy) {
    return this.http
      .post(this.satisfyUrl, JSON.stringify(satisfy), {headers:headersPost})
  }

}
