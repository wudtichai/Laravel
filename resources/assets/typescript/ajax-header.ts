import { Headers } from '@angular/http';

declare var $:any;

export let headers = new Headers({
    'Content-Type': 'application/json', 
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
});