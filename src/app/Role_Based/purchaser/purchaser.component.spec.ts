import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaserComponent } from './purchaser.component';

describe('PurchaserComponent', () => {
  let component: PurchaserComponent;
  let fixture: ComponentFixture<PurchaserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaserComponent]
    });
    fixture = TestBed.createComponent(PurchaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
