import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadfeedsComponent } from './readfeeds.component';

describe('ReadfeedsComponent', () => {
  let component: ReadfeedsComponent;
  let fixture: ComponentFixture<ReadfeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadfeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadfeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
