import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEditComponent } from './display-edit.component';

describe('DisplayEditComponent', () => {
  let component: DisplayEditComponent;
  let fixture: ComponentFixture<DisplayEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
