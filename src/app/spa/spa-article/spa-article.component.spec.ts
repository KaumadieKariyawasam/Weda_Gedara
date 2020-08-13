import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaArticleComponent } from './spa-article.component';

describe('SpaArticleComponent', () => {
  let component: SpaArticleComponent;
  let fixture: ComponentFixture<SpaArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
