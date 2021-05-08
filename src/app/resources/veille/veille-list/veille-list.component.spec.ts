import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeilleListComponent } from './veille-list.component';

describe('VeilleListComponent', () => {
  let component: VeilleListComponent;
  let fixture: ComponentFixture<VeilleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeilleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeilleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
