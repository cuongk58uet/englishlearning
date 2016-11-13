import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { RouterModule }  from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent }   from './app.component';
import  {VocabularyComponent} from './components/vocabulary/vocabulary.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {VocabularyService} from './services/vocabulary.service';




@NgModule({
  imports: [ BrowserModule, 
    HttpModule, 
    FormsModule
   ],
  declarations: [ AppComponent,
  	VocabularyComponent,
    DashboardComponent
  	 ],
  providers: [
  	VocabularyService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
