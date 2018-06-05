import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindclientComponent } from './findclient.component';

describe('FindclientComponent', () => {
  let component: FindclientComponent;
  let fixture: ComponentFixture<FindclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindclientComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
