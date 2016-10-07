import { Injectable } from '@angular/core';
import { headers,headersPost } from '../ajax-header';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class StageService {
  private getStageUrl = 'api/learn/stage';
  stage: number;

  private stageSource = new Subject<number>();
  stageUpdated$ = this.stageSource.asObservable();

  constructor(private http: Http) { }

  getStage() {
    return this.http
      .get(this.getStageUrl, {headers})
      .map(
        (res) => {
          this.stage = res.json().data.stage;
          this.updateStage(this.stage);
        });
  }

  updateStage(stage) {
    this.stageSource.next(stage);
  }

  setStage(stage) {
    return this.http
      .put(this.getStageUrl, JSON.stringify({stage}), {headers:headersPost})
      .map(
        (res) => {
          this.stage = res.json().data.stage;
          this.updateStage(this.stage);
        });
  }

}
