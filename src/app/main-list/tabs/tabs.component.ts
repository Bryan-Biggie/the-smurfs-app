import { Component, OnInit } from '@angular/core';
import { TabCalculationsService } from 'src/app/services/tab-calculations.service';
import { MainListService } from '../main-list.service';
import { Item } from '../item.model';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  public className = 'TabsComponent';
  rowData: Item[] = [];

  constructor(
    private listService: MainListService,
    private tabService: TabCalculationsService,
    private loggingService: LoggingService
  ) {}

  ngOnInit(): void {
    let methodName = 'ngOnInit';
    try {    
      this.tabService.setItems();//this tells the business layer to fetch data from the DAL
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }
}
