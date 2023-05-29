import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InPreparationComponent } from './in-preparation.component';

describe('InPreparationComponent', () => {
  let component: InPreparationComponent;
  let fixture: ComponentFixture<InPreparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InPreparationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
