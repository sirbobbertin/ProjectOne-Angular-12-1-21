import { TestBed } from '@angular/core/testing';

import { ReimburstmentPendingService } from './reimburstment-pending.service';

describe('ReimburstmentPendingService', () => {
  let service: ReimburstmentPendingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReimburstmentPendingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
