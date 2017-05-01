/**
 * Created by malaka on 3/19/17.
 */

import {Routes} from "@angular/router";
import {SelectPaperComponent} from "./select/select-paper.component";
import {StartPaperComponent} from "./attempt/start-paper.component";
import {QuestionsDashComponent} from "./attempt/questions-dash.component";
import {ViewQuestionComponent} from "./view/view-question.component";


// defin route to the paper attempts
export const PAPER_ATTEMPT_ROUTER : Routes = [
  { path : '', component : SelectPaperComponent},
  { path : ':paper_id', component : StartPaperComponent },
  { path : ':paper_id/ques', component : QuestionsDashComponent}
];


// define route to the guest paper views.
export const PAPER_VIEW_ROUTER : Routes = [
  { path : '', component : ViewQuestionComponent},
  { path : ':id', component : ViewQuestionComponent }
];


