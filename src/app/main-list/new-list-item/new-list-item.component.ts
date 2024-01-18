import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainListService } from '../main-list.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-new-list-item',
  templateUrl: './new-list-item.component.html',
  styleUrls: ['./new-list-item.component.css']
})
export class NewListItemComponent implements OnInit {
  smurfForm: FormGroup;
  listSize: number;

  constructor(private formBuilder: FormBuilder, private listService: MainListService) { }

  ngOnInit(): void {
    this.listSize = this.listService.getListSize();

    this.smurfForm = this.formBuilder.group({
      itemName: ['', [Validators.required]],
      itemDescription: ['', [Validators.required]],
      itemImagePath: ['', [Validators.required]],
      itemSex: ['', [Validators.required]],
      itemHeight: ['', [Validators.required]],
      itemAge: ['', [Validators.required]],
    });
  }

  onAddToList() {
    if (this.smurfForm.valid) {
      const newItem = new Item(
        this.listSize + 1,
        this.smurfForm.value.itemName,
        this.smurfForm.value.itemDescription,
        this.smurfForm.value.itemImagePath,
        this.smurfForm.value.itemSex,
        this.smurfForm.value.itemAge,
        this.smurfForm.value.itemHeight
      );

      this.listService.addItem(newItem);
      this.smurfForm.reset();
      alert('The smurf has been added to the list.');
      // console.log(this.listService.getItems());
    } else {
      alert('Form is not valid. Please fill in all required fields.');
    }
  }
}
