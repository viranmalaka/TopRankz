import {Routes, RouterModule} from "@angular/router";
import { LoginComponent } from './auth/login.component'
import {SignupComponent} from "./auth/signup.component";
import {CreatePaperComponent} from "./paper/create/create-paper.component";
import {PAPER_ATTEMPT_ROUTER, PAPER_VIEW_ROUTER} from "./paper/paper.routes";
import {AttemptComponent} from "./paper/attempt/attempt.component";
import {ViewPaperComponent} from "./paper/view/view-paper.component";
import {EditUserDetailsComponent} from "./auth/edit-user-details.component";
import {SignupDataEntryComponent} from "./auth/admins/signup-data-entry.component";
import {SelectPaperComponent} from "./paper/select/select-paper.component";
import {ReviewComponent} from "./paper/attempt/review/review.component";
import {CreateClassGroupComponent} from "./auth/create-class-group.component";

const APP_ROUTES : Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'admin/signup', component : SignupDataEntryComponent},
  {path : ':username/edit', component : EditUserDetailsComponent},
  {path : 'paper', component : SelectPaperComponent},
  {path : 'paper/create', component : CreatePaperComponent},
  {path : 'paper/create/:paper_id', component : CreatePaperComponent},
  {path : 'paper/attempt' , component : AttemptComponent},
  {path : 'paper/attempt/:id' , component : AttemptComponent},
  {path : 'paper/attempt/review/:id' , component : ReviewComponent},
  {path : 'paper/:paper_id' , component: ViewPaperComponent},//redirectTo : '/paper/:paper_id/1'},
  {path : 'paper/:paper_id/:id' , component : ViewPaperComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
