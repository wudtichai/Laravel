import { Injectable } from '@angular/core';
import { headers } from './ajax-header';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StageService {
  private getStageUrl = 'learn/stage';

  constructor(private http: Http) { }

  stage() {
    return this.http
      .get(this.getStageUrl, {headers})
      .map(res => res.json());
  }

}
