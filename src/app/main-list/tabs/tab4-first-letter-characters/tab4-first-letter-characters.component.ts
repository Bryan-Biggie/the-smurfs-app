import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Subscription } from 'rxjs';
import { TabCalculationsService } from 'src/app/services/tab-calculations.service';
import { Item } from '../../item.model';
import { MainListService } from '../../main-list.service';
import { RendererComponent } from '../../the-list-items/ag-grid-items/renderer/renderer.component';

@Component({
  selector: 'app-tab4-first-letter-characters',
  templateUrl: './tab4-first-letter-characters.component.html',
  styleUrls: ['./tab4-first-letter-characters.component.css'],
})
export class Tab4FirstLetterCharactersComponent implements OnInit {
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
        console.log("🚀 ~ Tab4FirstLetterCharactersComponent ~ this.subscription=this.tabService.characterChanged.subscribe ~ code:", code)
        if (code === 200) {
          this.rowData = this.tabService.getCharactersWithName();
        }
      });
    } catch (error) {
      console.log(
        '🚀 ~ Tab4FirstLetterCharactersComponent ~ ngOnInit ~ error:',
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
