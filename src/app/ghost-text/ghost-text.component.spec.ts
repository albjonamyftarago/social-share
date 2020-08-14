import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostTextComponent } from './ghost-text.component';

describe('GhostTextComponent', () => {
  let component: GhostTextComponent;
  let fixture: ComponentFixture<GhostTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhostTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
