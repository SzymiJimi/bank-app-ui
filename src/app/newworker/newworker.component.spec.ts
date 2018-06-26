import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewworkerComponent } from './newworker.component';

describe('NewworkerComponent', () => {
  let component: NewworkerComponent;
  let fixture: ComponentFixture<NewworkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewworkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
