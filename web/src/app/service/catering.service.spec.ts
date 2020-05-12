import { TestBed } from '@angular/core/testing';

import { CateringService } from './catering.service';

describe('CateringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CateringService = TestBed.get(CateringService);
    expect(service).toBeTruthy();
  });
});
