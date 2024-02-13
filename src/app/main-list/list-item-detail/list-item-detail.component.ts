import { Component, OnDestroy, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { MainListService } from '../main-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { LoggingService } from 'src/app/services/logging.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-list-item-detail',
  templateUrl: './list-item-detail.component.html',
  styleUrls: ['./list-item-detail.component.css'],
})
export class ListItemDetailComponent implements OnInit, OnDestroy {
  public className = 'ListItemDetailComponent';
  public alive: boolean = true;
  item: Item;
  itemId;
  items: Item[] = [];

  constructor(
    private listService: MainListService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private loggingService: LoggingService,
    private router: Router
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

            this.activatedRoute.paramMap
              .pipe(takeWhile(() => this.alive))
              .subscribe((data) => {
                this.itemId = +data.get('id');
                this.item = this.items.find((x) => x.id === this.itemId);
              });
          }
        });
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  onDelete(): void {
    let methodName = 'ngOnInit';
    try {
      this.listService.itemsChanged.next(0);
      this.listService.removeItem(this.item);
      this.router.navigate(['/mainList']);
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
