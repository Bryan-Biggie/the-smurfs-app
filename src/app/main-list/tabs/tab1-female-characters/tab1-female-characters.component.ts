import { Component, OnInit } from '@angular/core';

import { ColDef } from 'ag-grid-community';
import { Item } from '../../item.model';
import { RendererComponent } from '../../the-list-items/ag-grid-items/renderer/renderer.component';
import { MainListService } from '../../main-list.service';
import { TabCalculationsService } from 'src/app/services/tab-calculations.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1-female-characters',
  templateUrl: './tab1-female-characters.component.html',
  styleUrls: ['./tab1-female-characters.component.css'],
})
export class Tab1FemaleCharactersComponent implements OnInit {
  subscription: Subscription;
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

  constructor(private tabService: TabCalculationsService) {}

  ngOnInit(): void {
    try {
      this.subscription = this.tabService.characterChanged.subscribe((code) => {
        if (code === 200) {
          this.rowData = this.tabService.getGender();
        }
      });
    } catch (error) {
      console.log(
        '🚀 ~ Tab1FemaleCharactersComponent ~ ngOnInit ~ error:',
        error
      );
    }
  }

  getRowHeight(params): number {
    return 50;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
