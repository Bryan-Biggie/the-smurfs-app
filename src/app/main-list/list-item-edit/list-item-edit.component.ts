import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { MainListService } from '../main-list.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoggingService } from 'src/app/services/logging.service';
import { takeWhile } from 'rxjs/operators';

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
      if (!this.listService.isFetched) {//this checks if the business layer has fetched the data from the database(DAL)
        this.listService.setItems();// if not then it tells the Bussiness layer to go fetch data from the DAL
      }

      this.listService.itemsChanged.pipe(takeWhile(() => this.alive)).subscribe((code) => {
        if (code === 200) {// when the code is 200 it goes to fetch the array list from the business layer
          this.items = this.listService.getItems();

          this.activatedRoute.paramMap.pipe(takeWhile(() => this.alive)).subscribe((data) => {
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

  onUpdateItem() {// this method tells the business layer to add a new updates of a character to the database
    let methodName = 'onUpdateItem';
    try {
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
