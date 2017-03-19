import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LoginComponent} from "./auth/login.component";
import {routing} from "./app.routing";
import { SignupComponent } from './auth/signup.component';
import { CreatePaperComponent } from './paper/create-paper.component';
import { NewPaperComponent } from './paper/new-paper.component';
import { NewQuestionComponent } from './paper/new-question.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CreatePaperComponent,
    NewPaperComponent,
    NewQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
