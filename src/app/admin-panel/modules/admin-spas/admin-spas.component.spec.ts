import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpasComponent } from './admin-spas.component';

describe('AdminSpasComponent', () => {
  let component: AdminSpasComponent;
  let fixture: ComponentFixture<AdminSpasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSpasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSpasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
