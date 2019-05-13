import { TestBed } from '@angular/core/testing';

import { DinosaureService } from './dinosaure.service';

describe('DinosaureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DinosaureService = TestBed.get(DinosaureService);
    expect(service).toBeTruthy();
  });
});
