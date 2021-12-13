import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FedTreasuryComponent } from './fed-treasury.component';

describe('FedTreasuryComponent', () => {
  let component: FedTreasuryComponent;
  let fixture: ComponentFixture<FedTreasuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FedTreasuryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FedTreasuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
