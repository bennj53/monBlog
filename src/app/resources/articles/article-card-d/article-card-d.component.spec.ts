import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCardDComponent } from './article-card-d.component';

describe('ArticleCardDComponent', () => {
  let component: ArticleCardDComponent;
  let fixture: ComponentFixture<ArticleCardDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCardDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCardDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
