import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { TabCalculationsService } from 'src/app/services/tab-calculations.service';
import { Item } from '../../item.model';
import { MainListService } from '../../main-list.service';
import { RendererComponent } from '../../the-list-items/ag-grid-items/renderer/renderer.component';
import { LoggingService } from 'src/app/services/logging.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-tab4-first-letter-characters',
  templateUrl: './tab4-first-letter-characters.component.html',
  styleUrls: ['./tab4-first-letter-characters.component.css'],
})
export class Tab4FirstLetterCharactersComponent implements OnInit {
  public className = 'Tab4FirstLetterCharactersComponent';
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

  constructor(
    private tabService: TabCalculationsService,
    private loggingService: LoggingService
  ) {}

  ngOnInit(): void {
    let methodName = 'ngOnInit';
    try {
      this.tabService.characterChanged
        .pipe(takeWhile(() => this.alive))
        .subscribe((code) => {
          if (code === 200) {
            this.rowData = this.tabService.getCharactersWithName();
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
