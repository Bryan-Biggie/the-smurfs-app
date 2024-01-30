import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { DataStorageService } from './data-storage.service';
import { Item } from './item.model';
import { MainListService } from './main-list.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ItemsResolverService implements Resolve<Item[]> {
  constructor(
    private listService: MainListService,
    private dataService: DataStorageService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const itemsGet = this.listService.getItems();
    if (itemsGet.length === 0) {
      this.listService.setItems();
      return this.dataService.fetchItemsResolver();
    } else {
      return itemsGet;
    }
  }
}
