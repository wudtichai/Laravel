import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { ImageSliderComponent } from './image-slider.component';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpModule
  ],

  declarations: [ 
    ImageSliderComponent, 
    LoginComponent, 
    AppComponent 
  ],

  bootstrap:[ AppComponent ]
})
export class AppModule { }
