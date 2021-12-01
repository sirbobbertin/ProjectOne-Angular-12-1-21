import { TestBed } from '@angular/core/testing';

import { ReimburstmentResolvedService } from './reimburstment-resolved.service';

describe('ReimburstmentResolvedService', () => {
  let service: ReimburstmentResolvedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReimburstmentResolvedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
