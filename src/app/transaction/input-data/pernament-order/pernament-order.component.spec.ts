import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PernamentOrderComponent } from './pernament-order.component';

describe('PernamentOrderComponent', () => {
  let component: PernamentOrderComponent;
  let fixture: ComponentFixture<PernamentOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PernamentOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PernamentOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
