import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreditInputDataComponent } from './user-credit-input-data.component';

describe('UserCreditInputDataComponent', () => {
  let component: UserCreditInputDataComponent;
  let fixture: ComponentFixture<UserCreditInputDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCreditInputDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreditInputDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
