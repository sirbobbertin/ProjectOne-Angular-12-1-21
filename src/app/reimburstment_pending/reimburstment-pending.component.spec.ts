import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimburstmentPendingComponent } from './reimburstment-pending.component';

describe('ReimburstmentPendingComponent', () => {
  let component: ReimburstmentPendingComponent;
  let fixture: ComponentFixture<ReimburstmentPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimburstmentPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimburstmentPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
