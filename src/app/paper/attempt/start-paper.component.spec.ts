/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StartPaperComponent } from './start-paper.component';

describe('StartPaperComponent', () => {
  let component: StartPaperComponent;
  let fixture: ComponentFixture<StartPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
