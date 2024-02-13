import { Component, OnInit } from '@angular/core';

import { ColDef } from 'ag-grid-community';
import { Item } from '../../item.model';
import { RendererComponent } from '../../the-list-items/ag-grid-items/renderer/renderer.component';
import { TabCalculationsService } from 'src/app/services/tab-calculations.service';
import { LoggingService } from 'src/app/services/logging.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-tab1-female-characters',
  templateUrl: './tab1-female-characters.component.html',
  styleUrls: ['./tab1-female-characters.component.css'],
})
export class Tab1FemaleCharactersComponent implements OnInit {
  public className = 'Tab1FemaleCharactersComponent';
  public alive: boolean = true;
  rowData: Item[] = [];

  colDefs: ColDef[] = [
    //  { field: 'id' },
    { field: 'name' },
    { field: 'imagePath', cellRendererFramework: RendererComponent },
    { field: 'age', headerName: 'Height' },
    { field: 'height', headerName: 'Age' },
    { field: 'description' },
    { field: 'sex' },
    // { field: 'Details', cellRendererFramework: RendererComponent },
    // { field: 'Edit', cellRendererFramework: RendererComponent },
    // { field: 'Delete', cellRendererFramework: RendererComponent },
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  constructor(private tabService: TabCalculationsService, private loggingService: LoggingService
    ) {}

  ngOnInit(): void {
    let methodName = 'ngOnInit';
    try {
      this.tabService.characterChanged.pipe(takeWhile(() => this.alive)).subscribe((code) => {
        if (code === 200) {
          this.rowData = this.tabService.getGender();
        }
      });
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  getRowHeight(params): number {
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
