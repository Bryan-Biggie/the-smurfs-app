import { Component, OnInit } from '@angular/core';
import { MainListService } from '../main-list.service';
import { Item } from '../item.model';
import { DataStorageService } from '../data-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-the-list-items',
  templateUrl: './the-list-items.component.html',
  styleUrls: ['./the-list-items.component.css'],
})
export class TheListItemsComponent implements OnInit {
  items: Item[] = [];
  subscription: Subscription;

  constructor(
    private listService: MainListService,
  ) {
    
  }

  ngOnInit(): void {
    this.subscription = this.listService.itemsChanged.subscribe((items: Item[]) => {this.items = items;});
    
    this.items = this.listService.getItems();
    if(!this.listService.isFetched){
      this.listService.setItems();
    }
    
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
