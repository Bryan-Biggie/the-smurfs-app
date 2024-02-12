import { Component, OnInit } from '@angular/core';
import { MainListService } from '../main-list.service';
import { Item } from '../item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-the-list-items',
  templateUrl: './the-list-items.component.html',
  styleUrls: ['./the-list-items.component.css'],
})
export class TheListItemsComponent implements OnInit {
  items: Item[] = [];
  subscription: Subscription;
  filterGender: string = '';

  constructor(private listService: MainListService) {}

  ngOnInit(): void {
    if (!this.listService.isFetched) {
      this.listService.setItems();
    }
    this.subscription = this.listService.itemsChanged.subscribe((code) => {
      if (code === 200) {
        this.items = this.listService.getItems();
      }
    });
  }
  // onSaveData() {
  //   this.dataService.storeItems();
  // }

  // onFetchData(){
  //   this.dataService.fetchItems().subscribe();
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
