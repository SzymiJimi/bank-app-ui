import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerStatsComponent } from './manager-stats.component';

describe('ManagerStatsComponent', () => {
  let component: ManagerStatsComponent;
  let fixture: ComponentFixture<ManagerStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
