import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierRegComponent } from './supplier-reg.component';

describe('SupplierRegComponent', () => {
  let component: SupplierRegComponent;
  let fixture: ComponentFixture<SupplierRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
