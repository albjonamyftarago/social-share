import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpingDotComponent } from './jumping-dot.component';

describe('JumpingDotComponent', () => {
  let component: JumpingDotComponent;
  let fixture: ComponentFixture<JumpingDotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumpingDotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpingDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
