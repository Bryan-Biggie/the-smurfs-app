import { Component, OnDestroy, OnInit } from '@angular/core';
import { MainListService } from '../main-list.service';
import { Item } from '../item.model';
import { Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-the-list-items',
  templateUrl: './the-list-items.component.html',
  styleUrls: ['./the-list-items.component.css'],
})
export class TheListItemsComponent implements OnInit, OnDestroy {
  public className = 'TheListItemsComponent';
  items: Item[] = [];
  subscription: Subscription;
  filterGender: string = '';
  public alive: boolean = true;

  constructor(
    private listService: MainListService,
    private loggingService: LoggingService
  ) {}

  ngOnInit(): void {
    let methodName = 'ngOnInit';
    try {
      if (!this.listService.isFetched) {
        this.listService.setItems();
      }
      this.listService.itemsChanged
        .pipe(takeWhile(() => this.alive))
        .subscribe((code) => {
          if (code === 200) {
            this.items = this.listService.getItems();
          }
        });
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
      // console.log("🚀 ~ TheListItemsComponent ~ ngOnDestroy ~ error:", error);
    }
  }
}
