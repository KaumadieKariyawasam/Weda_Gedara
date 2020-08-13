import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierLoginComponent } from './supplier-login.component';

describe('SupplierLoginComponent', () => {
  let component: SupplierLoginComponent;
  let fixture: ComponentFixture<SupplierLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
