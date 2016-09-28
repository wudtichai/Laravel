import { Headers } from '@angular/http';

declare var $:any;

let headers = new Headers({
    'Content-Type': 'application/json'
});

let headersPost = new Headers({
    'Content-Type': 'application/json', 
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
});

export {headers, headersPost};