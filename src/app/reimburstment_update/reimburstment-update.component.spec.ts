import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimburstmentUpdateComponent } from './reimburstment-update.component';

describe('ReimburstmentUpdateComponent', () => {
  let component: ReimburstmentUpdateComponent;
  let fixture: ComponentFixture<ReimburstmentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimburstmentUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimburstmentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
