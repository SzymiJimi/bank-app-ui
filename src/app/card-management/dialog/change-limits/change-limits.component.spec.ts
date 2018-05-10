import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLimitsComponent } from './change-limits.component';

describe('ChangeLimitsComponent', () => {
  let component: ChangeLimitsComponent;
  let fixture: ComponentFixture<ChangeLimitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeLimitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
