import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { MainListService } from '../main-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-item-edit',
  templateUrl: './list-item-edit.component.html',
  styleUrls: ['./list-item-edit.component.css'],
  
})
export class ListItemEditComponent implements OnInit {
  item: Item;
  itemId;

  constructor(private listService: MainListService, private activatedRoute: ActivatedRoute) { 
  }
  ngOnInit(): void {
    this.itemId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.item = this.listService.getItems().find(x => x.id === this.itemId);
  }

  onUpdateItem(){
    this.listService.updateItem(this.item);
    alert('The changes made to Smurf have been saved!')
  }

}
