import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-group',
  template: `
<h3 class="ui dividing header">Your Class Groups</h3>
class group list here
<app-card-list></app-card-list>
`,
  styles: []
})
export class ClassGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
