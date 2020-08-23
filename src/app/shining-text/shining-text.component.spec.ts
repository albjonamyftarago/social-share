import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiningTextComponent } from './shining-text.component';

describe('ShiningTextComponent', () => {
  let component: ShiningTextComponent;
  let fixture: ComponentFixture<ShiningTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiningTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiningTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
