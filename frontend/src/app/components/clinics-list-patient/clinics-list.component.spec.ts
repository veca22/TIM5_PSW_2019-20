import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsListComponent } from './clinics-list.component';

describe('ClinicsListComponent', () => {
  let component: ClinicsListComponent;
  let fixture: ComponentFixture<ClinicsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
