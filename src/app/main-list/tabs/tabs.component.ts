import { Component, OnInit } from '@angular/core';
import { TabCalculationsService } from 'src/app/services/tab-calculations.service';
import { MainListService } from '../main-list.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  rowData: Item[] = [];

  constructor(private listService: MainListService, private tabService: TabCalculationsService) { }

  ngOnInit(): void {
    try {
      this.tabService.setItems();
    } catch (error) {
      console.log("🚀 ~ TabsComponent ~ ngOnInit ~ error:", error)
      
    }
    // if (!this.listService.isFetched) {
    //   this.listService.setItems();
    // }
  }

}
