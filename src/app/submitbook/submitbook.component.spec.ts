import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitbookComponent } from './submitbook.component';

describe('SubmitbookComponent', () => {
  let component: SubmitbookComponent;
  let fixture: ComponentFixture<SubmitbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
