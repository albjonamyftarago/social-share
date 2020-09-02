import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WavyCircleComponent } from './wavy-circle.component';

describe('WavyCircleComponent', () => {
  let component: WavyCircleComponent;
  let fixture: ComponentFixture<WavyCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WavyCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WavyCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
