import { Component } from '@angular/core';
import { SATISFY_LIST }    from './satisfy-list';
import { Router }      from '@angular/router';

declare var $:any;
declare var jQuery:any;

@Component({
  templateUrl: 'app/learn/satisfy.component.html',
  styleUrls: ['app/learn/satisfy.component.css']
})

export class SatisfyComponent { 

  satisfyList = SATISFY_LIST;

  // constructor(private satisfyService: SatisfyService, public router: Router) {
  constructor(public router: Router) {
    jQuery.validator.setDefaults({
      errorPlacement: function(error, element) {
      }
    });
  }

  onSubmit() {
    if($("#satisfy-form").valid()){
      console.log(JSON.stringify(this.prepareSatisfy()));
      // this.satisfyService.send(this.prepareSatisfy()).subscribe(
      //   () => {
      //     this.resetForm();
      //     this.router.navigate(['/learn']);
      //   }
      // );
    } else {
      alert('กรุณาตอบทุกข้อ');
    }
  }

  resetForm() {
    $('input[type=radio]', '#satisfy-form').prop('checked', false);
  }

  prepareSatisfy() {
    let satisfy = {};
    for (let i in this.satisfyList) {
      let i2 = parseInt(i)+1;
      for (let j in this.satisfyList[i].sub) {
        let j2 = parseInt(j)+1;
        satisfy['s'+ i2 + '_' + j2] = $('input[name=s' + i2 + '_' + j2 + ']:checked', '#satisfy-form').val()
      }
      
    }
    return satisfy;
  }

}