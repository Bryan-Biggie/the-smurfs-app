import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { MainListService } from '../main-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-item-detail',
  templateUrl: './list-item-detail.component.html',
  styleUrls: ['./list-item-detail.component.css'],
})
export class ListItemDetailComponent implements OnInit {
  item: Item;
  itemId;
  items: Item[];

  constructor(
    private listService: MainListService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router
  ) {}
  ngOnInit(): void {
    // this.itemId = +this.activatedRoute.snapshot.paramMap.get('id');
    // this.item = this.listService.getItems().find(x => x.id === this.itemId);

    this.listService.itemsChanged.subscribe((itemsChanged)=>{    
      this.items = itemsChanged;
    });

    this.activatedRoute.paramMap.subscribe((data) => {   
      this.itemId = +data.get('id');
      this.item = this.items.find((x) => x.id === this.itemId);
    });
  }

  onDelete(): void {
    this.listService.removeItem( this.item);
    this.router.navigate(['/mainList']);
  }
}
