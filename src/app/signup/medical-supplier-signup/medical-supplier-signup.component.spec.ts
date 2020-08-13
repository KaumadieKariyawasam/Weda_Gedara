import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalSupplierSignupComponent } from './medical-supplier-signup.component';

describe('MedicalSupplierSignupComponent', () => {
  let component: MedicalSupplierSignupComponent;
  let fixture: ComponentFixture<MedicalSupplierSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalSupplierSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalSupplierSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
