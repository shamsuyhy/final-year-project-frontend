import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAgencyComponent } from './edit-agency.component';

describe('EditAgencyComponent', () => {
  let component: EditAgencyComponent;
  let fixture: ComponentFixture<EditAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
