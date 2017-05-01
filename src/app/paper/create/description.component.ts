import {Component, OnInit, AfterViewInit, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-description',
  template: `
<div class="container">
  <div class="ui grid">
    <div class="sixteen wide column">
      <div id="editor"></div>
    </div>
  </div>
    <hr>
    <button (click)="onSubmit()" class="ui button">Submit</button>
</div>
  `,
  styles: []
})
export class DescriptionComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() des;
  @Output() onSubmitDes = new EventEmitter<String>();
  editor = null;

  constructor() { }

  ngOnInit() {
    console.log('im here');
  }

  ngAfterViewInit(){
    tinyMCE.init({
      selector : '#editor',
      skin_url: '/assets/skins/lightgray',
      statusbar : false,
      menubar : false,
      init_instance_callback: function (editor) {
        editor.on('blur', function (e) {
          this.des = tinyMCE.activeEditor.getContent();
        }.bind(this))
      }.bind(this),
      setup : function (e) {
        this.editor = e;
      }.bind(this)
    });
    this.ngOnChanges();
  }

  ngOnChanges(){
    if(this.editor){
      this.editor.setContent(this.des);
    }
  }

  onSubmit(){
    this.onSubmitDes.emit(this.editor.getContent());
  }
}
