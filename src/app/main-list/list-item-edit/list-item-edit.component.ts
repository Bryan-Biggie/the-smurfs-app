import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { MainListService } from '../main-list.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-item-edit',
  templateUrl: './list-item-edit.component.html',
  styleUrls: ['./list-item-edit.component.css'],
})
export class ListItemEditComponent implements OnInit {
  item: Item;
  itemId;
  items: Item[];
  subscription: Subscription;

  constructor(
    private listService: MainListService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    if (!this.listService.isFetched) {
      this.listService.setItems();
    }

    this.subscription = this.listService.itemsChanged.subscribe((code) => {
      if (code === 200) {
        this.items = this.listService.getItems();
        
        this.activatedRoute.paramMap.subscribe((data) => {
          this.item = this.items.find((x) => x.id === +data.get('id'));
        });
      }
    });
  }

  onUpdateItem() {
    this.listService.itemsChanged.next(0);
    this.listService.updateItem(this.item);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
