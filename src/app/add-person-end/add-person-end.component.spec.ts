import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonEndComponent } from './add-person-end.component';

describe('AddPersonEndComponent', () => {
  let component: AddPersonEndComponent;
  let fixture: ComponentFixture<AddPersonEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPersonEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
