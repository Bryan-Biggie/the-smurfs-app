import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { Observable, Subscription } from 'rxjs';
import { MainListService } from '../../main-list.service';
import { Item } from '../../item.model';
import { Router } from '@angular/router';
import { RendererComponent } from './renderer/renderer.component';
import { LoggingService } from 'src/app/services/logging.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-ag-grid-items',
  templateUrl: './ag-grid-items.component.html',
  styleUrls: ['./ag-grid-items.component.css'],
})
export class AgGridItemsComponent implements OnInit {
  public alive: boolean = true;
  public className = 'AgGridItemsComponent';
  public rowData$!: Observable<any[]>;

  rowData: Item[] = [];

  colDefs: ColDef[] = [
    //  { field: 'id' },
    { field: 'name' },
    { field: 'imagePath', cellRendererFramework: RendererComponent },
    { field: 'age', headerName: 'Height' },
    { field: 'height', headerName: 'Age' },
    { field: 'description' },

    { field: 'sex' },

    { field: 'Details', cellRendererFramework: RendererComponent },
    { field: 'Edit', cellRendererFramework: RendererComponent },
    { field: 'Delete', cellRendererFramework: RendererComponent },
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  constructor(
    private http: HttpClient,
    private listService: MainListService,
    private router: Router,
    private loggingService: LoggingService
  ) {}

  ngOnInit() {
    let methodName = 'ngOnInit';
    try {
      if (!this.listService.isFetched) {
        this.listService.setItems();
      }
      this.listService.itemsChanged.pipe(takeWhile(() => this.alive)).subscribe((code) => {// this listens to the business layer if there is nay changes to the array.
        if (code === 200) {
          this.rowData = this.listService.getItems();
          //this.rowData.sort((a, b) => b.height - a.height);
        }
      });
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  getRowHeight(params): number {
    // Your logic to calculate row height based on row data
    // For example, return a fixed height of 50 for demonstration purposes
    return 50;
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
