import { TestBed } from '@angular/core/testing';

import { PrimeiroService } from './primeiro.service';

describe('PrimeiroService', () => {
  let service: PrimeiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimeiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
