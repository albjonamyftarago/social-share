import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowingCircleComponent } from './glowing-circle.component';

describe('GlowingCircleComponent', () => {
  let component: GlowingCircleComponent;
  let fixture: ComponentFixture<GlowingCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlowingCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlowingCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
