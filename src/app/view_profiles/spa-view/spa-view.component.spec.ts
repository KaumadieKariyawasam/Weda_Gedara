import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaViewComponent } from './spa-view.component';

describe('SpaViewComponent', () => {
  let component: SpaViewComponent;
  let fixture: ComponentFixture<SpaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
