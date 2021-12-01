import { TestBed } from '@angular/core/testing';

import { ReimburstmentService } from './reimburstment.service';

describe('ReimburstmentService', () => {
  let service: ReimburstmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReimburstmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
