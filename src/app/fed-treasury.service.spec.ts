import { TestBed } from '@angular/core/testing';

import { FedTreasuryService } from './fed-treasury.service';

describe('FedTreasuryService', () => {
  let service: FedTreasuryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FedTreasuryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
