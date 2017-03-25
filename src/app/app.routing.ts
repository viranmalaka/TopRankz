import {Routes, RouterModule} from "@angular/router";
import { LoginComponent } from './auth/login.component'
import {SignupComponent} from "./auth/signup.component";
import {CreatePaperComponent} from "./paper/create/create-paper.component";
import {PAPER_CREATE_ROUTER} from "./paper/paper.routes";
import {SelectPaperComponent} from "./paper/attempt/select-paper/select-paper.component";

const APP_ROUTES : Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'paper/create', component : CreatePaperComponent},
  {path : 'paper/create', component : CreatePaperComponent, children : PAPER_CREATE_ROUTER},
  {path : 'paper/attempt' , component : SelectPaperComponent},
  {path : 'paper/attempt' , component : SelectPaperComponent, children: PAPER_CREATE_ROUTER}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
