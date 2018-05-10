import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselornavbarComponent } from './counselornavbar.component';

describe('CounselornavbarComponent', () => {
  let component: CounselornavbarComponent;
  let fixture: ComponentFixture<CounselornavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounselornavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounselornavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
