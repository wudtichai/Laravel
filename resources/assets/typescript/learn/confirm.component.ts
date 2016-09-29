import { Component } from '@angular/core';
import { Confirm }    from './confirm';

declare var $:any;
declare var jQuery:any;

@Component({
  templateUrl: 'app/learn/confirm.component.html',
  styleUrls: ['app/learn/confirm.component.css']
})
export class ConfirmComponent { 

  submitted = false;
  confirmModel = new Confirm();

  constructor(){
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
    $("#confirm-form").validate({
      submitHandler: function(form) {
      },
      rules: {
        fullname: {
          required: true
        },
        email: {
          required: true,
          email: true
        },        
      }
    });
  }

  onSubmit() { 
    this.submitted = true;
    if($("#confirm-form").valid()){
      alert('ok');
    } else {
      alert('fail');
    }
  }

}