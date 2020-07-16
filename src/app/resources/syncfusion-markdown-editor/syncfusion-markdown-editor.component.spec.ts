import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncfusionMarkdownEditorComponent } from './syncfusion-markdown-editor.component';

describe('SyncfusionMarkdownEditorComponent', () => {
  let component: SyncfusionMarkdownEditorComponent;
  let fixture: ComponentFixture<SyncfusionMarkdownEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncfusionMarkdownEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncfusionMarkdownEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
