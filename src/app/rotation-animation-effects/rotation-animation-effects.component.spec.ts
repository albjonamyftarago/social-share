import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotationAnimationEffectsComponent } from './rotation-animation-effects.component';

describe('RotationAnimationEffectsComponent', () => {
  let component: RotationAnimationEffectsComponent;
  let fixture: ComponentFixture<RotationAnimationEffectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotationAnimationEffectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotationAnimationEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
