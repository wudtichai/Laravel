import { Component } from '@angular/core';
import { KnowledgeModel }    from './knowledge-model';

declare var $:any;
declare var jQuery:any;

@Component({
  templateUrl: 'app/learn/knowledge.component.html',
  styleUrls: ['app/learn/knowledge.component.css']
})

export class KnowledgeComponent { 

  knowledgeList = [
    {title: "3D printing", name: "three_d_printing"},
    {title: "Advanced search", name: "advanced_search"},
    {title: "banner ad", name: "banner_ad"},
    {title: "Bcc (on e-mail)", name: "bcc_on_email"},
    {title: "Blog", name: "blog"},
    {title: "Bookmark", name: "bookmark"},
    {title: "Browser", name: "browser"},
    {title: "Cache", name: "cache"},
    {title: "Cloud storage", name: "cloud_storage"},
    {title: "cookie", name: "cookie"},
    {title: "e-Book", name: "ebook"},
    {title: "Filtibly", name: "filtibly"},
    {title: "JFW", name: "jfw"},
    {title: "JPG", name: "jpg"},
    {title: "PDF", name: "pdf"},
    {title: "Phishing", name: "phishing"},
    {title: "Podcasting", name: "podcasting"},
    {title: "Preference setting", name: "preference_setting"},
    {title: "refresh/reload", name: "refresh_reload"},
    {title: "remote login", name: "remote_login"},
    {title: "spam", name: "spam"},
    {title: "Spyware", name: "spyware"},
    {title: "torrent", name: "torrent"},
    {title: "wiki", name: "wiki"}
  ];

  constructor() {
    let required_rules = {};
    for(let knowledge of this.knowledgeList) {
      required_rules[knowledge.name] = {required : true};
    }
    
    jQuery.validator.setDefaults({
      highlight: function(element) {
          $(element).closest('.form-group').addClass('has-error');
      },
      unhighlight: function(element) {
          $(element).closest('.form-group').removeClass('has-error');
      },
      errorElement: 'span',
      errorClass: 'help-block',
      errorPlacement: function(error, element) {
          if(element.parent('.input-group').length) {
              error.insertAfter(element.parent());
          } else {
              error.insertAfter(element);
          }
      }
    });
    $("#knowledge-form").validate({
      submitHandler: function(form) {
      },
      rules: required_rules
    });
    console.log({
      submitHandler: function(form) {
      },
      rules: required_rules
    });
    $("#knowledge-form").submit(function(event){
      event.preventDefault();
    });
  }

  onSubmit() {
    if($("#knowledge-form").valid()){
      console.log(this.prepareKnowledge());
      // this.resetForm();
      // this.confirmService.confirm(this.knowledgeModel).subscribe(
      //   () => {
      //     this.confirmModel = new Confirm();
      //     this.router.navigate(['/learn']);
      //   }
      // );
    }
  }

  resetForm() {
    $('input[type=radio]').removeAttr('checked');
  }

  prepareKnowledge() {
    let knowledgeModel = new KnowledgeModel();
    for(let knowledge of this.knowledgeList) {
      knowledgeModel[knowledge.name] = $(`input[name={{knowledge.name}}]`).value;
    }
    return knowledgeModel;
  }
}