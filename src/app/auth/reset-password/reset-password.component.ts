import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: []
})
export class ResetPasswordComponent implements OnInit {
  resetting = false;
  constructor(private authService : AuthService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    if(this.route.snapshot.params['token']){
      this.authService.checkPassToken(this.route.snapshot.params['token']).subscribe(res => {
        if(!res.success){
          this.router.navigate(['/']);
          toastr.error(res.msg);
        }
      });
      this.resetting = true;
    }
  }

  onSubmit(){
    let email = $('#email').val();
    console.log(email);
    this.authService.resetPassword(email).subscribe(res => {
      if(res.success){
        toastr.success(res.msg);
      }else{
        toastr.error(res.msg);
      }
    })
  }

  onUpdate(){
    let p1 = $('#pss1').val();
    let p2 = $('#pss2').val();
    if(p1 == p2){
      console.log('pass');
      this.authService.updatePassword({token : this.route.snapshot.params['token'], password : p1}).subscribe(res => {
        if(res.success){
          toastr.success('password changed');
          this.router.navigate(['login']);
        }
      })
    }else{
      toastr.error('Password miss match');
    }
  }

}
