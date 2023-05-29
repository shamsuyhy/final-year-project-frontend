import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAgencyComponent } from './add-agency.component';

describe('AddAgencyComponent', () => {
  let component: AddAgencyComponent;
  let fixture: ComponentFixture<AddAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
