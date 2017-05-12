/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AttemptService } from './attempt.service';

describe('AttemptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttemptService]
    });
  });

  it('should ...', inject([AttemptService], (service: AttemptService) => {
    expect(service).toBeTruthy();
  }));
});
