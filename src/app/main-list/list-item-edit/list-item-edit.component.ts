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
  items: Item[];

  constructor(private listService: MainListService, private activatedRoute: ActivatedRoute) { 
  }
  ngOnInit(): void {

    this.listService.itemsChanged.subscribe((itemsChanged)=>{
      this.items = itemsChanged;
    });

    this.activatedRoute.paramMap.subscribe((data) => {
      this.item = this.items.find(x => x.id === +data.get('id'));
    });
  }

  onUpdateItem(){
    
    this.listService.updateItem(this.item);
    
  }

}
