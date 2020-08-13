import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaLoginComponent } from './spa-login.component';

describe('SpaLoginComponent', () => {
  let component: SpaLoginComponent;
  let fixture: ComponentFixture<SpaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
