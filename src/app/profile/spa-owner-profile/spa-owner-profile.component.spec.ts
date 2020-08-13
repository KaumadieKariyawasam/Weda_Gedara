import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaOwnerProfileComponent } from './spa-owner-profile.component';

describe('SpaOwnerProfileComponent', () => {
  let component: SpaOwnerProfileComponent;
  let fixture: ComponentFixture<SpaOwnerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaOwnerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaOwnerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
