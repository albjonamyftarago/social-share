import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidButtonComponent } from './liquid-button.component';

describe('LiquidButtonComponent', () => {
  let component: LiquidButtonComponent;
  let fixture: ComponentFixture<LiquidButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
