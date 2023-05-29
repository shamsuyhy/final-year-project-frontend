import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAgenciesListComponent } from './delivery-agencies-list.component';

describe('DeliveryAgenciesListComponent', () => {
  let component: DeliveryAgenciesListComponent;
  let fixture: ComponentFixture<DeliveryAgenciesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryAgenciesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryAgenciesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
