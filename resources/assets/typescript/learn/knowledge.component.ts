import { Component } from '@angular/core';
import { KnowledgeModel }    from './knowledge-model';
import { KnowledgeService }    from './knowledge.service';
import { KNOWLEDGE_LIST }    from './knowledge-list';
import { Router }      from '@angular/router';

declare var $:any;
declare var jQuery:any;

@Component({
  templateUrl: 'app/learn/knowledge.component.html',
  styleUrls: ['app/learn/knowledge.component.css']
})

export class KnowledgeComponent { 

  knowledgeList = KNOWLEDGE_LIST;

  constructor(private knowledgeService: KnowledgeService, public router: Router) {
    jQuery.validator.setDefaults({
      errorPlacement: function(error, element) {
      }
    });
  }

  onSubmit() {
    if($("#knowledge-form").valid()){
      this.knowledgeService.send(this.prepareKnowledge()).subscribe(
        () => {
          this.resetForm();
          this.router.navigate(['/learn']);
        }
      );
    } else {
      alert('กรุณาตอบทุกข้อ');
    }
  }

  resetForm() {
    $('input[type=radio]', '#knowledge-form').prop('checked', false);
  }

  prepareKnowledge(): KnowledgeModel {
    let knowledgeModel = new KnowledgeModel();
    for(let knowledge of this.knowledgeList) {
      knowledgeModel[knowledge.name] = $('input[name=' + knowledge.name + ']:checked', '#knowledge-form').val()
    }
    return knowledgeModel;
  }

}