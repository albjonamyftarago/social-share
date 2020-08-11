import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElasticLineComponent } from './elastic-line.component';

describe('ElasticLineComponent', () => {
  let component: ElasticLineComponent;
  let fixture: ComponentFixture<ElasticLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElasticLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElasticLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
