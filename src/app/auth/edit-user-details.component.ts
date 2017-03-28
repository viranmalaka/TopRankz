import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-edit-user-details',
  templateUrl: './edit-user-details.component.html',
  styles: [`
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
`]
})
export class EditUserDetailsComponent implements OnInit {
  activeTab = 'bio';
  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit() {
    console.log('auth-token', localStorage.getItem('auth-token'));
    this.authService.getCheckToken().subscribe(res => {
      if(!res.validity){
        this.router.navigate(['login']);
      }
    });
  }


}
