import { Component } from '@angular/core';
import { Confirm }    from './confirm';
import { ConfirmService }    from './confirm.service';
import { Router }      from '@angular/router';

declare var $:any;
declare var jQuery:any;

@Component({
  templateUrl: 'app/learn/confirm.component.html',
  styleUrls: ['app/learn/confirm.component.css'],
  providers: [ConfirmService]
})

export class ConfirmComponent { 

  confirmModel = new Confirm();

  constructor(private confirmService: ConfirmService, public router: Router) {
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
    if($("#confirm-form").valid()){
      this.confirmService.confirm(this.confirmModel).subscribe(
        () => {
          this.confirmModel = new Confirm();
          this.router.navigate(['/learn']);
        }
      );
    }
  }

}