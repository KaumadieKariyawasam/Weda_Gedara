import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaRegComponent } from './spa-reg.component';

describe('SpaRegComponent', () => {
  let component: SpaRegComponent;
  let fixture: ComponentFixture<SpaRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
