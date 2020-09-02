import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRotatorComponent } from './text-rotator.component';

describe('TextRotatorComponent', () => {
  let component: TextRotatorComponent;
  let fixture: ComponentFixture<TextRotatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextRotatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextRotatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
