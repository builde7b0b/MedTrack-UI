import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfersGridListComponent } from './transfers-grid-list.component';

describe('TransfersGridListComponent', () => {
  let component: TransfersGridListComponent;
  let fixture: ComponentFixture<TransfersGridListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransfersGridListComponent]
    });
    fixture = TestBed.createComponent(TransfersGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
