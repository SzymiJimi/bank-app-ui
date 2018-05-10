import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelCardComponent } from './cancel-card.component';

describe('CancelCardComponent', () => {
  let component: CancelCardComponent;
  let fixture: ComponentFixture<CancelCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
