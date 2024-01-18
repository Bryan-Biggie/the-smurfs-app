import { Component, OnInit } from '@angular/core';
import { MainListService } from '../main-list.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-the-list-items',
  templateUrl: './the-list-items.component.html',
  styleUrls: ['./the-list-items.component.css']
})
export class TheListItemsComponent implements OnInit {
  items: Item[] = [];
  constructor(private listService: MainListService) { }

  ngOnInit(): void {
    this.items = this.listService.getItems();
  }

}
