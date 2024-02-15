import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainListService } from '../main-list.service';
import { Item } from '../item.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-new-list-item',
  templateUrl: './new-list-item.component.html',
  styleUrls: ['./new-list-item.component.css'],
})
export class NewListItemComponent implements OnInit {
  public className = 'NewListItemComponent';
  smurfForm: FormGroup;
  listSize: number;

  constructor(
    private formBuilder: FormBuilder,
    private listService: MainListService,
    private loggingService: LoggingService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    let methodName = 'ngOnInit';
    try {
      if (!this.listService.isFetched) {//this checks if the business layer has fetched the data from the database(DAL)
        this.listService.setItems();// if not then it tells the Bussiness layer to go fetch data from the DAL
      }
      this.listSize = this.listService.getListSize();
      this.smurfForm = this.formBuilder.group({
        itemName: ['', [Validators.required, Validators.maxLength(50)]],
        itemDescription: ['', [Validators.required, Validators.maxLength(900)]],
        itemImagePath: ['', [Validators.required]],
        itemSex: [null, [Validators.required]],
        itemHeight: [
          '',
          [Validators.required, Validators.min(10), Validators.max(100)],
        ],
        itemAge: [
          '',
          [Validators.required, Validators.min(20), Validators.max(100)],
        ],
      });
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  onAddToList() {// this method tells the business layer to add a new character to the database
    let methodName = 'ngOnInit';
    try {
          if (this.smurfForm.valid) {
      const newItem = new Item(
        this.listSize + 1,//this is to create an id for the character
        this.smurfForm.value.itemName,
        this.smurfForm.value.itemDescription,
        this.smurfForm.value.itemImagePath,
        this.smurfForm.value.itemSex,
        this.smurfForm.value.itemAge,
        this.smurfForm.value.itemHeight
      );
      this.listService.addItem(newItem); // *** Adding character to the list
      this.smurfForm.reset();
    } else {
      this.dialog.open(DialogComponent, {
        data: {
          heading: 'WARNING!',
          body: 'Form is not valid. Please fill in all required fields.',
        },
      });
    }
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }

  }
}
