import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimburstmentResolvedComponent } from './reimburstment-resolved.component';

describe('ReimburstmentResolvedComponent', () => {
  let component: ReimburstmentResolvedComponent;
  let fixture: ComponentFixture<ReimburstmentResolvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimburstmentResolvedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimburstmentResolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
