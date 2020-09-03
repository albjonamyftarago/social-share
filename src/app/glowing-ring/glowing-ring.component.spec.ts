import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowingRingComponent } from './glowing-ring.component';

describe('GlowingRingComponent', () => {
  let component: GlowingRingComponent;
  let fixture: ComponentFixture<GlowingRingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlowingRingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlowingRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
