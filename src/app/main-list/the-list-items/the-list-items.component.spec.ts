import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheListItemsComponent } from './the-list-items.component';

describe('TheListItemsComponent', () => {
  let component: TheListItemsComponent;
  let fixture: ComponentFixture<TheListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheListItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
