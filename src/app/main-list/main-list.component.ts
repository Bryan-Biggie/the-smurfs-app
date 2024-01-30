import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { MainListService } from './main-list.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  isLoading;

  constructor(private dataService: DataStorageService, private listService: MainListService) { }

  ngOnInit(): void {
    this.listService.displayLoading.subscribe((data) =>{
      if(data === 0){
        this.isLoading = true;
      }
      else{
        this.isLoading = false;
      }

    })
  }

}
