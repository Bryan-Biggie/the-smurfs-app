import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridItemsComponent } from './ag-grid-items.component';

describe('AgGridItemsComponent', () => {
  let component: AgGridItemsComponent;
  let fixture: ComponentFixture<AgGridItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
