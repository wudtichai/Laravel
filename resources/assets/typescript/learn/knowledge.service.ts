import { Injectable } from '@angular/core';
import { headersPost } from '../ajax-header';
import { Http } from '@angular/http';
import { KnowledgeModel }    from './knowledge-model';

@Injectable()
export class KnowledgeService {
  private knowledgeUrl = 'api/learn/knowledge';

  constructor(private http: Http) { }

  send(knowledge:KnowledgeModel) {
    return this.http
      .post(this.knowledgeUrl, JSON.stringify(knowledge), {headers:headersPost})
  }

}
