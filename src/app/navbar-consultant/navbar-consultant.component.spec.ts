import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarConsultantComponent } from './navbar-consultant.component';

describe('NavbarConsultantComponent', () => {
  let component: NavbarConsultantComponent;
  let fixture: ComponentFixture<NavbarConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarConsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
