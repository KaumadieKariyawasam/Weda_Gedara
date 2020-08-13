import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalSearchComponent } from './medical-search.component';

describe('MedicalSearchComponent', () => {
  let component: MedicalSearchComponent;
  let fixture: ComponentFixture<MedicalSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
