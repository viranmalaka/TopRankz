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
import {RandomComponent} from "./attempt/select-paper/random.component";
import {OneQuestionComponent} from "./attempt/one-question.component";
import {QuestionContainerComponent} from "./attempt/question-container.component";
import {QuestionsDashComponent} from "./attempt/questions-dash.component";
import {ViewPaperComponent} from "./view/view-paper.component";
import {ViewQuestionComponent} from "./view/view-question.component";

export const PAPER_CREATE_ROUTER : Routes = [
  // { path : '', redirectTo : '/new', pathMatch:'full'},
  { path : '', component : NewPaperComponent },
  { path : ':paper_id' , component : NewPaperComponent},
  { path : ':paper_id/answer_sheet' , component : AnswerSheetComponent},
  { path : ':paper_id/submit' , component : SubmitPaperComponent}
];

export const PAPER_ATTEMPT_ROUTER : Routes = [
  { path : '', component : SelectPaperComponent},
  { path : ':paper_id', component : StartPaperComponent },
  { path : ':paper_id/ques', component : QuestionsDashComponent}
];

export const PAPER_VIEW_ROUTER : Routes = [
  { path : '', component : RandomComponent},
  { path : ':paper_id', component : ViewQuestionComponent }

];


