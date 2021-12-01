import { TestBed } from '@angular/core/testing';

import { ReimburstmentUpdateService } from './reimburstment-update.service';

describe('ReimburstmentUpdateService', () => {
  let service: ReimburstmentUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReimburstmentUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
