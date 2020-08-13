import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDistorionComponent } from './text-distorion.component';

describe('TextDistorionComponent', () => {
  let component: TextDistorionComponent;
  let fixture: ComponentFixture<TextDistorionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextDistorionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextDistorionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
