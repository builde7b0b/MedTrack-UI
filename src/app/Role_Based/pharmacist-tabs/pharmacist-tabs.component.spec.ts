import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistTabsComponent } from './pharmacist-tabs.component';

describe('PharmacistTabsComponent', () => {
  let component: PharmacistTabsComponent;
  let fixture: ComponentFixture<PharmacistTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharmacistTabsComponent]
    });
    fixture = TestBed.createComponent(PharmacistTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
