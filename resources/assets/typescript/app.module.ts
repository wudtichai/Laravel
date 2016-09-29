import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { LearnModule }   from './learn/learn.module';

import { AppComponent }   from './app.component';
import { ImageSliderComponent } from './image-slider.component';
import { LoginComponent } from './login.component';

import { routing,
         appRoutingProviders }  from './app.routing';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    routing,
    LearnModule
  ],

  declarations: [ 
    AppComponent,
    LoginComponent,
    ImageSliderComponent
  ],

  providers: [
    appRoutingProviders
  ],
  
  bootstrap:[ AppComponent ]
})
export class AppModule { }