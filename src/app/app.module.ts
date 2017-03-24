import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {LoginComponent} from "./auth/login.component";
import {routing} from "./app.routing";
import { SignupComponent } from './auth/signup.component';
import { CreatePaperComponent } from './paper/create/create-paper.component';
import { NewPaperComponent } from './paper/create/new-paper.component';
import { NewQuestionComponent } from './paper/create/new-question.component';
import { AnswerSheetComponent } from './paper/create/answer-sheet.component';
import { SelectPaperComponent } from './paper/attempt/select-paper/select-paper.component';
import { StartPaperComponent } from './paper/attempt/start-paper.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CreatePaperComponent,
    NewPaperComponent,
    NewQuestionComponent,
    AnswerSheetComponent,
    SelectPaperComponent,
    StartPaperComponent
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
