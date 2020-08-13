import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaforgottenPwdComponent } from './spaforgotten-pwd.component';

describe('SpaforgottenPwdComponent', () => {
  let component: SpaforgottenPwdComponent;
  let fixture: ComponentFixture<SpaforgottenPwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaforgottenPwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaforgottenPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
