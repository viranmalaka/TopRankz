/**
 * Created by malaka on 3/19/17.
 */

import {Routes} from "@angular/router";
import {NewPaperComponent} from "./new-paper.component";
import {NewQuestionComponent} from "./new-question.component";
import {AnswerSheetComponent} from "./answer-sheet.component";

export const PAPER_ROUTER : Routes = [
  { path : 'create' , component : NewPaperComponent},
  { path : ':paper_id/new' , component : NewQuestionComponent},
  { path : ':paper_id/answer_sheet' , component : AnswerSheetComponent}
];
