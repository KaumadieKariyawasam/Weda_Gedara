import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDashboartComponent } from './blog-dashboart.component';

describe('BlogDashboartComponent', () => {
  let component: BlogDashboartComponent;
  let fixture: ComponentFixture<BlogDashboartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDashboartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDashboartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
