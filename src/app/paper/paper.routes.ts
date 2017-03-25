/**
 * Created by malaka on 3/19/17.
 */

import {Routes} from "@angular/router";
import {NewPaperComponent} from "./create/new-paper.component";
import {NewQuestionComponent} from "./create/new-question.component";
import {AnswerSheetComponent} from "./create/answer-sheet.component";
import {SelectPaperComponent} from "./attempt/select-paper/select-paper.component";
import {StartPaperComponent} from "./attempt/start-paper.component";
import {SubmitPaperComponent} from "./create/submit-paper.component";

export const PAPER_CREATE_ROUTER : Routes = [
  // { path : '', redirectTo : '/new', pathMatch:'full'},
  { path : '', component : NewPaperComponent },
  { path : ':paper_id' , component : NewPaperComponent},
  { path : ':paper_id/answer_sheet' , component : AnswerSheetComponent},
  { path : ':paper_id/submit' , component : SubmitPaperComponent}
];

export const PAPER_ATTEMPT_ROUTER : Routes = [
  { path : ':paper_id', component : StartPaperComponent }
];
