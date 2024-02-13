import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import {
  ICellRendererParams,
  IAfterGuiAttachedParams,
} from 'ag-grid-community';
import { MainListService } from 'src/app/main-list/main-list.service';
import { LoggingService } from 'src/app/services/logging.service';
import { TabCalculationsService } from 'src/app/services/tab-calculations.service';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css'],
})
export class RendererComponent implements ICellRendererAngularComp {
  public className = 'RendererComponent';
  fieldName: any;
  data;
  imagePath;
  constructor(
    private router: Router,
    private listService: MainListService,
    private tabService: TabCalculationsService,
    private loggingService: LoggingService
  ) {}
  agInit(params: ICellRendererParams): void {
    let methodName = 'agInit';
    try {
      this.data = params.data;
      this.imagePath = this.data['imagePath'];
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
      // alert('Cell value is : '+ this.fieldName);
      if (this.fieldName === 'Delete') {
        this.listService.itemsChanged.next(0);
        // this.tabService.characterChanged.next(0);
        this.listService.removeItem(this.data);
      }
      if (this.fieldName === 'Details') {
        this.router.navigate(['/mainList/itemDetails', this.data['id']]);
      }
      if (this.fieldName === 'Edit') {
        this.router.navigate(['/mainList/itemEdit', this.data['id']]);
      }
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }
}
