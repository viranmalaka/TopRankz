/**
 * Created by malaka on 3/19/17.
 */

import {Routes} from "@angular/router";
import {NewPaperComponent} from "./create/new-paper.component";
import {SelectPaperComponent} from "./attempt/select-paper/select-paper.component";
import {StartPaperComponent} from "./attempt/start-paper.component";
import {RandomComponent} from "./attempt/select-paper/random.component";
import {QuestionsDashComponent} from "./attempt/questions-dash.component";
import {ViewQuestionComponent} from "./view/view-question.component";

// define route to the paper creation
export const PAPER_CREATE_ROUTER : Routes = [
  { path : '', component : NewPaperComponent },
  { path : ':paper_id' , component : NewPaperComponent}
];

// defin route to the paper attempts
export const PAPER_ATTEMPT_ROUTER : Routes = [
  { path : '', component : SelectPaperComponent},
  { path : ':paper_id', component : StartPaperComponent },
  { path : ':paper_id/ques', component : QuestionsDashComponent}
];


// define route to the guest paper views.
export const PAPER_VIEW_ROUTER : Routes = [
  { path : '', component : RandomComponent},
  { path : ':paper_id', component : ViewQuestionComponent }
];


