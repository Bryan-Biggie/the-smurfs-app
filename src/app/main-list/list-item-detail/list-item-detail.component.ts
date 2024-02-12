import { Component, OnDestroy, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { MainListService } from '../main-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-item-detail',
  templateUrl: './list-item-detail.component.html',
  styleUrls: ['./list-item-detail.component.css'],
})
export class ListItemDetailComponent implements OnInit, OnDestroy {
  item: Item;
  itemId;
  items: Item[] = [];
  subscription: Subscription;

  constructor(
    private listService: MainListService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router
  ) {}
  ngOnInit(): void {
    if (!this.listService.isFetched) {
      this.listService.setItems();
    }
    try {

    this.subscription = this.listService.itemsChanged.subscribe((code) => {

      if (code === 200) {
        this.items = this.listService.getItems();

        this.activatedRoute.paramMap.subscribe((data) => {
          this.itemId = +data.get('id');
          this.item = this.items.find((x) => x.id === this.itemId);
        });
      }
    });
    } catch (error) {
      console.error('Error in ngOnInit:', error);
    }

  }

  onDelete(): void {
    this.listService.itemsChanged.next(0);
    this.listService.removeItem(this.item);
    this.router.navigate(['/mainList']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
