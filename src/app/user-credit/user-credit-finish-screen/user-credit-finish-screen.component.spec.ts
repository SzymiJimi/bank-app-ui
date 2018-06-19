import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreditFinishScreenComponent } from './user-credit-finish-screen.component';

describe('UserCreditFinishScreenComponent', () => {
  let component: UserCreditFinishScreenComponent;
  let fixture: ComponentFixture<UserCreditFinishScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCreditFinishScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreditFinishScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
