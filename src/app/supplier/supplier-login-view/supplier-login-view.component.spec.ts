import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierLoginViewComponent } from './supplier-login-view.component';

describe('SupplierLoginViewComponent', () => {
  let component: SupplierLoginViewComponent;
  let fixture: ComponentFixture<SupplierLoginViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierLoginViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierLoginViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
