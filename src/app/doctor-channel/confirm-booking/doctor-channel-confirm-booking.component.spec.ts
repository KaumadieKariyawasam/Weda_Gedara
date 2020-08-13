import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorChannelConfirmBookingComponent } from './doctor-channel-confirm-booking.component';

describe('DoctorChannelConfirmBookingComponent', () => {
  let component: DoctorChannelConfirmBookingComponent;
  let fixture: ComponentFixture<DoctorChannelConfirmBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorChannelConfirmBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorChannelConfirmBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
