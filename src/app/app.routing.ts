import {Routes, RouterModule} from "@angular/router";
import { LoginComponent } from './auth/login.component'
import {SignupComponent} from "./auth/signup.component";
import {CreatePaperComponent} from "./paper/create-paper.component";
import {PAPER_ROUTER} from "./paper/paper.routes";

const APP_ROUTES : Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'paper', component : CreatePaperComponent},
  {path : 'paper', component : CreatePaperComponent, children : PAPER_ROUTER}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
