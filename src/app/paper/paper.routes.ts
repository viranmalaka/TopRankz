/**
 * Created by malaka on 3/19/17.
 */

import {Routes} from "@angular/router";
import {NewPaperComponent} from "./create/new-paper.component";
import {NewQuestionComponent} from "./create/new-question.component";
import {AnswerSheetComponent} from "./create/answer-sheet.component";
import {SelectPaperComponent} from "./attempt/select-paper/select-paper.component";
import {StartPaperComponent} from "./attempt/start-paper.component";

export const PAPER_ROUTER : Routes = [
  { path : 'create' , component : NewPaperComponent},
  { path : ':paper_id/new' , component : NewQuestionComponent},
  { path : ':paper_id/answer_sheet' , component : AnswerSheetComponent},
  { path : 'attempt', component : SelectPaperComponent},
  { path : ':paper_id/start', component : StartPaperComponent }
];
