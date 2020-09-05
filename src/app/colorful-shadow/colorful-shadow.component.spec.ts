import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorfulShadowComponent } from './colorful-shadow.component';

describe('ColorfulShadowComponent', () => {
  let component: ColorfulShadowComponent;
  let fixture: ComponentFixture<ColorfulShadowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorfulShadowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorfulShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
