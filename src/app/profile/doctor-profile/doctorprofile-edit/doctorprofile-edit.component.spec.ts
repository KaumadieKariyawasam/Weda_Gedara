import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorprofileEditComponent } from './doctorprofile-edit.component';

describe('DoctorprofileEditComponent', () => {
  let component: DoctorprofileEditComponent;
  let fixture: ComponentFixture<DoctorprofileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorprofileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorprofileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
