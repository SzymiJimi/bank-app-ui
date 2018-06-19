import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashwithdrawalComponent } from './cashwithdrawal.component';

describe('CashwithdrawalComponent', () => {
  let component: CashwithdrawalComponent;
  let fixture: ComponentFixture<CashwithdrawalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashwithdrawalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashwithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
