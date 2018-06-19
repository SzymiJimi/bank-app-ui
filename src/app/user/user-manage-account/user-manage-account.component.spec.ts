import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManageAccountComponent } from './user-manage-account.component';

describe('UserManageAccountComponent', () => {
  let component: UserManageAccountComponent;
  let fixture: ComponentFixture<UserManageAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManageAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManageAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
