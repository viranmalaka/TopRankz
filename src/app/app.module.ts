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
import { PassPaperComponent } from './paper/attempt/select-paper/pass-paper.component';
import { ClassGroupComponent } from './paper/attempt/select-paper/class-group.component';
import { RandomComponent } from './paper/attempt/select-paper/random.component';
import { OneQuestionComponent } from './paper/attempt/one-question.component';
import { SubmitPaperComponent } from './paper/create/submit-paper.component';
import { AttemptComponent } from './paper/attempt/attempt.component';
import { PaperCardComponent } from './paper/attempt/select-paper/paper-card.component';
import { CardListComponent } from './paper/attempt/select-paper/card-list.component';
import { QuestionContainerComponent } from './paper/attempt/question-container.component';
import { QuestionsDashComponent } from './paper/attempt/questions-dash.component';

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
    StartPaperComponent,
    PassPaperComponent,
    ClassGroupComponent,
    RandomComponent,
    OneQuestionComponent,
    SubmitPaperComponent,
    AttemptComponent,
    PaperCardComponent,
    CardListComponent,
    QuestionContainerComponent,
    QuestionsDashComponent
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
