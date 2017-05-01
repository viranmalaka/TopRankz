import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from "./auth/login.component";
import { routing} from "./app.routing";
import { SignupComponent } from './auth/signup.component';
import { CreatePaperComponent } from './paper/create/create-paper.component';
import { NewPaperComponent } from './paper/create/new-paper.component';
import { NewQuestionComponent } from './paper/create/new-question.component';
import { AnswerSheetComponent } from './paper/create/answer-sheet.component';
import { StartPaperComponent } from './paper/attempt/start-paper.component';
import { SubmitPaperComponent } from './paper/create/submit-paper.component';
import { AttemptComponent } from './paper/attempt/attempt.component';
import { QuestionContainerComponent } from './paper/attempt/question-container.component';
import { QuestionsDashComponent } from './paper/attempt/questions-dash.component';
import { ViewPaperComponent } from './paper/view/view-paper.component';
import { ViewQuestionComponent } from './paper/view/view-question.component';
import { EditUserDetailsComponent } from './auth/edit-user-details.component';
import { UserDetailsBioComponent } from './auth/user-details-bio.component';
import { UserDetailsEnrollComponent } from './auth/user-details-enroll.component';
import {SignupDataEntryComponent} from "./auth/admins/signup-data-entry.component";
import { DescriptionComponent } from './paper/create/description.component';
import { SelectPaperComponent } from './paper/select/select-paper.component';
import { PaperListComponent } from './paper/select/paper-list.component';
import { PaperCardComponent } from './paper/select/paper-card.component';
import { AttemptAnswerSheetComponent } from './paper/attempt/attempt-answer-sheet.component';
import { AttemptSubmitPaperComponent } from './paper/attempt/attempt-submit-paper.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CreatePaperComponent,
    NewPaperComponent,
    NewQuestionComponent,
    AnswerSheetComponent,
    StartPaperComponent,
    SubmitPaperComponent,
    AttemptComponent,
    QuestionContainerComponent,
    QuestionsDashComponent,
    ViewPaperComponent,
    ViewQuestionComponent,
    EditUserDetailsComponent,
    UserDetailsBioComponent,
    UserDetailsEnrollComponent,
    SignupDataEntryComponent,
    DescriptionComponent,
    SelectPaperComponent,
    PaperListComponent,
    PaperCardComponent,
    AttemptAnswerSheetComponent,
    AttemptSubmitPaperComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
