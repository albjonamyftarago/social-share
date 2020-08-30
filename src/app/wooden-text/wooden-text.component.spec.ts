import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodenTextComponent } from './wooden-text.component';

describe('WoodenTextComponent', () => {
  let component: WoodenTextComponent;
  let fixture: ComponentFixture<WoodenTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoodenTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodenTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
