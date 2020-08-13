import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorChannelPatientDetailComponent } from './doctor-channel-patient-detail.component';

describe('DoctorChannelPatientDetailComponent', () => {
  let component: DoctorChannelPatientDetailComponent;
  let fixture: ComponentFixture<DoctorChannelPatientDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorChannelPatientDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorChannelPatientDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
