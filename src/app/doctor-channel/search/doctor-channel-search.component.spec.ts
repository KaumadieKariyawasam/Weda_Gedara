import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorChannelSearchComponent } from './doctor-channel-search.component';

describe('DoctorChannelSearchComponent', () => {
  let component: DoctorChannelSearchComponent;
  let fixture: ComponentFixture<DoctorChannelSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorChannelSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorChannelSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
