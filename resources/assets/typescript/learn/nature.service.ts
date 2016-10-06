import { Injectable } from '@angular/core';
import { headersPost } from '../ajax-header';
import { Http } from '@angular/http';

@Injectable()
export class NatureService {
  private natureUrl = 'api/learn/nature';

  constructor(private http: Http) { }

  send(nature) {
    return this.http
      .post(this.natureUrl, JSON.stringify(nature), {headers:headersPost})
  }

}
