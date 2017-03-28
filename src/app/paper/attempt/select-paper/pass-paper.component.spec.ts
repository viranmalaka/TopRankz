/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PassPaperComponent } from './pass-paper.component';

describe('PassPaperComponent', () => {
  let component: PassPaperComponent;
  let fixture: ComponentFixture<PassPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
