import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlowingDotsComponent } from './glowing-dots.component';

describe('GlowingDotsComponent', () => {
  let component: GlowingDotsComponent;
  let fixture: ComponentFixture<GlowingDotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlowingDotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlowingDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
