import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { MainListService } from './main-list.service';
import { TabCalculationsService } from '../services/tab-calculations.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  isLoading;

  constructor(private dataService: DataStorageService, private listService: MainListService, private tabService: TabCalculationsService) { }

  ngOnInit(): void {
    this.listService.displayLoading.subscribe((data) =>{// this listens to the business layer when its time to put the loading screen
      if(data === 0){
        this.isLoading = true;
      }
      else{
        this.isLoading = false;
      }

    });

    this.tabService.displayLoading.subscribe((data) =>{// this listens to the business layer when its time to put the loading screen
      if(data === 0){
        this.isLoading = true;
      }
      else{
        this.isLoading = false;
      }

    });
  }

}
