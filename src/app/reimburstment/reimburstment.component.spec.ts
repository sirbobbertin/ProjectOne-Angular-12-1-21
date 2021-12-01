import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimburstmentComponent } from './reimburstment.component';

describe('ReimburstmentComponent', () => {
  let component: ReimburstmentComponent;
  let fixture: ComponentFixture<ReimburstmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReimburstmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReimburstmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
