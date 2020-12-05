import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewApplicantComponent } from './new-applicant.component';

describe('NewApplicantComponent', () => {
  let component: NewApplicantComponent;
  let fixture: ComponentFixture<NewApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
