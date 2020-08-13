import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSupplierEditComponent } from './admin-supplier-edit.component';

describe('AdminSupplierEditComponent', () => {
  let component: AdminSupplierEditComponent;
  let fixture: ComponentFixture<AdminSupplierEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSupplierEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSupplierEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
