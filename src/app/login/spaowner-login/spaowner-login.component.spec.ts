import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaownerLoginComponent } from './spaowner-login.component';

describe('SpaownerLoginComponent', () => {
  let component: SpaownerLoginComponent;
  let fixture: ComponentFixture<SpaownerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaownerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaownerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
