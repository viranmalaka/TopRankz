import {Routes, RouterModule} from "@angular/router";
import { LoginComponent } from './auth/login.component'
import {SignupComponent} from "./auth/signup.component";
// import {CreatePaperComponent} from "./papers/create-paper/create-paper.component";

const APP_ROUTES : Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'signup', component : SignupComponent}
  // {path : 'paper/create', component : CreatePaperComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
