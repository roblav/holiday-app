import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaysSummaryComponent } from './holidays-summary.component';

describe('HolidaysSummaryComponent', () => {
  let component: HolidaysSummaryComponent;
  let fixture: ComponentFixture<HolidaysSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidaysSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidaysSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
