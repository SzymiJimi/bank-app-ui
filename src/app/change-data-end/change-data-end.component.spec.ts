import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDataEndComponent } from './change-data-end.component';

describe('ChangeDataEndComponent', () => {
  let component: ChangeDataEndComponent;
  let fixture: ComponentFixture<ChangeDataEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeDataEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDataEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
