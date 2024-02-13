import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { MainListService } from '../main-list.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-list-item-edit',
  templateUrl: './list-item-edit.component.html',
  styleUrls: ['./list-item-edit.component.css'],
})
export class ListItemEditComponent implements OnInit, OnDestroy {
  public className = 'ListItemEditComponent';
  item: Item;
  itemId;
  items: Item[];
  public alive: boolean = true;

  constructor(
    private listService: MainListService,
    private activatedRoute: ActivatedRoute,
    private loggingService: LoggingService
  ) {}
  ngOnInit(): void {
    let methodName = 'ngOnInit';
    try {
      if (!this.listService.isFetched) {
        this.listService.setItems();
      }

      this.listService.itemsChanged.subscribe((code) => {
        if (code === 200) {
          this.items = this.listService.getItems();

          this.activatedRoute.paramMap.subscribe((data) => {
            this.item = JSON.parse(
              JSON.stringify(this.items.find((x) => x.id === +data.get('id')))
            );
          });
        }
      });
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  onUpdateItem() {
    let methodName = 'onUpdateItem';
    try {
      // this.listService.itemsChanged.next(0);
      this.listService.updateItem(this.item);
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  ngOnDestroy() {
    let methodName = 'ngOnDestroy';
    try {
      this.alive = false;
      // this.listService.resetValues();
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }
}
