import {Routes, RouterModule} from "@angular/router";
import { LoginComponent } from './auth/login.component'
import {SignupComponent} from "./auth/signup.component";
import {CreatePaperComponent} from "./paper/create/create-paper.component";
import {PAPER_CREATE_ROUTER, PAPER_ATTEMPT_ROUTER, PAPER_VIEW_ROUTER} from "./paper/paper.routes";
import {AttemptComponent} from "./paper/attempt/attempt.component";

const APP_ROUTES : Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'paper/create', component : CreatePaperComponent, children : PAPER_CREATE_ROUTER},
  {path : 'paper/attempt' , component : AttemptComponent, children: PAPER_ATTEMPT_ROUTER},
  {path : 'paper/view' , component : AttemptComponent, children: PAPER_VIEW_ROUTER}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
