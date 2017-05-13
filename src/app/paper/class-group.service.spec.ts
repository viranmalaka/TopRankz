/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClassGroupService } from './class-group.service';

describe('ClassGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassGroupService]
    });
  });

  it('should ...', inject([ClassGroupService], (service: ClassGroupService) => {
    expect(service).toBeTruthy();
  }));
});
