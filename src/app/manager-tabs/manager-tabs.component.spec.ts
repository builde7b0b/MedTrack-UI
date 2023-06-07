import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTabsComponent } from './manager-tabs.component';

describe('ManagerTabsComponent', () => {
  let component: ManagerTabsComponent;
  let fixture: ComponentFixture<ManagerTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerTabsComponent]
    });
    fixture = TestBed.createComponent(ManagerTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
