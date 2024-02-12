import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { MainListService } from 'src/app/main-list/main-list.service';
import { TabCalculationsService } from 'src/app/services/tab-calculations.service';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})
export class RendererComponent implements OnInit, ICellRendererAngularComp {
fieldName: any;
data;
imagePath;
  constructor(private router: Router, private listService: MainListService, private tabService: TabCalculationsService) { }
  agInit(params: ICellRendererParams): void {
    this.data = params.data;
    this.imagePath = this.data['imagePath'];
    if (params.colDef) {
       this.fieldName = params.colDef.field;
      // You can use fieldName as needed
    }

  }  
  refresh(params: any): boolean {
    return false;
  }

  onClick(evebt: any){
    // alert('Cell value is : '+ this.fieldName);
    if(this.fieldName === 'Delete'){
      this.listService.itemsChanged.next(0);
      // this.tabService.characterChanged.next(0);
      this.listService.removeItem(this.data);
    }
    if(this.fieldName === 'Details'){
      this.router.navigate(['/mainList/itemDetails', this.data['id']]);
    }
    if(this.fieldName === 'Edit'){
      this.router.navigate(['/mainList/itemEdit', this.data['id']]);
    }
  }

  ngOnInit(): void {
  }

}
