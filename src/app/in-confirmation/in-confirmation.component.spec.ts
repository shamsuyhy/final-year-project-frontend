import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InConfirmationComponent } from './in-confirmation.component';

describe('InConfirmationComponent', () => {
  let component: InConfirmationComponent;
  let fixture: ComponentFixture<InConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
