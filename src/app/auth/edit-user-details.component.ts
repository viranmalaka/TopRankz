import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
