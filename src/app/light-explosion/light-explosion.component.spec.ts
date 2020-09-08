import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightExplosionComponent } from './light-explosion.component';

describe('LightExplosionComponent', () => {
  let component: LightExplosionComponent;
  let fixture: ComponentFixture<LightExplosionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightExplosionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightExplosionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
