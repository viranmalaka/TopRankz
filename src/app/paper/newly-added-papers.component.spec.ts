/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewlyAddedPapersComponent } from './newly-added-papers.component';

describe('NewlyAddedPapersComponent', () => {
  let component: NewlyAddedPapersComponent;
  let fixture: ComponentFixture<NewlyAddedPapersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewlyAddedPapersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlyAddedPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
