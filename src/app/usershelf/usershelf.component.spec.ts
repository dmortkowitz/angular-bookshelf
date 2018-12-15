import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsershelfComponent } from './usershelf.component';

describe('UsershelfComponent', () => {
  let component: UsershelfComponent;
  let fixture: ComponentFixture<UsershelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsershelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsershelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
