import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaOwnerSignupComponent } from './spa-owner-signup.component';

describe('SpaOwnerSignupComponent', () => {
  let component: SpaOwnerSignupComponent;
  let fixture: ComponentFixture<SpaOwnerSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaOwnerSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaOwnerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
