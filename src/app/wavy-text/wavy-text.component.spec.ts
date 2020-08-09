import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WavyTextComponent } from './wavy-text.component';

describe('WavyTextComponent', () => {
  let component: WavyTextComponent;
  let fixture: ComponentFixture<WavyTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WavyTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WavyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
