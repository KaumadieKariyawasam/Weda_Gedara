import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorChannelTimeSlotComponent } from './doctor-channel-time-slot.component';

describe('DoctorChannelTimeSlotComponent', () => {
  let component: DoctorChannelTimeSlotComponent;
  let fixture: ComponentFixture<DoctorChannelTimeSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorChannelTimeSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorChannelTimeSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
