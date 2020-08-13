import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogupdateComponent } from './blogupdate.component';

describe('BlogupdateComponent', () => {
  let component: BlogupdateComponent;
  let fixture: ComponentFixture<BlogupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
