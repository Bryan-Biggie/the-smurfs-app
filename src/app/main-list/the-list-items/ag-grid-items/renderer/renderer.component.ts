import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import {
  ICellRendererParams,
  IAfterGuiAttachedParams,
} from 'ag-grid-community';
import { MainListService } from 'src/app/main-list/main-list.service';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css'],
})
export class RendererComponent implements ICellRendererAngularComp {
  public className = 'RendererComponent';
  public alive: boolean = true;
  fieldName: any;
  data;
  imagePath;
  constructor(
    private router: Router,
    private listService: MainListService,
    private loggingService: LoggingService
  ) {}
  agInit(params: ICellRendererParams): void {
    let methodName = 'agInit';
    try {
      this.data = params.data;
      this.imagePath = this.data['imagePath'];//to show  the image on the grid
      if (params.colDef) {
        this.fieldName = params.colDef.field;
        // You can use fieldName as needed
      }
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }
  refresh(params: any): boolean {
    return false;
  }

  onClick(evebt: any) {
    let methodName = 'onClick';
    try {
      if (this.fieldName === 'Delete') {//if the delete button is clicked
        this.listService.itemsChanged.next(0);
        this.listService.removeItem(this.data);
      }
      if (this.fieldName === 'Details') {
        this.router.navigate(['/mainList/itemDetails', this.data['id']]);//if the details button is clicked
      }
      if (this.fieldName === 'Edit') {
        this.router.navigate(['/mainList/itemEdit', this.data['id']]);//if the edit button is clicked
      }
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
