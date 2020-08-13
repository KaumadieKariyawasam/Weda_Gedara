import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaUpdateComponent } from './spa-update.component';

describe('SpaUpdateComponent', () => {
  let component: SpaUpdateComponent;
  let fixture: ComponentFixture<SpaUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
