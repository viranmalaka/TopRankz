import {Component, OnInit, isDevMode} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {AuthService} from "./auth.service";
import {Headers, RequestOptions} from "@angular/http";

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
  user = JSON.parse(localStorage.getItem('user'));

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getCheckToken().subscribe(res => {
      if(!res.validity){
        this.router.navigate(['login']);
      }
    }, err => {
      if(isDevMode()){
        toastr.error(err._body);    // toastr the server error messages
      }else{
        toastr.error('Error');      // toastr custome msg
      }
    });
  }

  changeImg(event){
    let files = event.target.files;
    if(files.length > 0){
      let file = files[0];
      let data : FormData = new FormData();
      data.append('profImg', file, file.name);
      this.authService.postProfileImage(data).subscribe(res => {
        console.log(res);
        $("#profImg").attr("src", "assets/prof-pic/" + this.user.profile_picture +
          "?" +(new Date()).getTime());
      })

    }
  }
}
