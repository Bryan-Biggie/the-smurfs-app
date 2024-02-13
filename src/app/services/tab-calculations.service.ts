import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Item } from '../main-list/item.model';
import { MatDialog } from '@angular/material/dialog';
import { DataStorageService } from '../main-list/data-storage.service';
import { takeWhile } from 'rxjs/operators';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class TabCalculationsService implements OnDestroy{
  public className = 'TabCalculationsService';
  item: Item;
  itemId;
  genders: object = { male: 0, female: 0, other: 0 };
  characters: Item[] = [];
  private femaleCharacters: Item[] = [];
  private characterWithName: Item[] = [];
  subscription: Subscription;
  characterChanged: BehaviorSubject<number> = new BehaviorSubject<number>(0);


  alive: boolean = true;
  isFetched: boolean = false;
  displayLoading: any = new BehaviorSubject<number>(0);

  constructor(
    private dataService: DataStorageService,
    private loggingService: LoggingService,
    public dialog: MatDialog
  ) {
    let methodName = 'constructor';
    try {
      this.dataService.fetchingCharacters
        .pipe(takeWhile(() => this.alive))
        .subscribe((status) => {
          this.setItemsCheckStatus(status);
        });
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  setItems() {
    let methodName = 'setItems';
    try {
      if (!this.dataService.isDataFetched) {
        this.displayLoading.next(0);
        this.dataService.fetchItems();
        this.isFetched = true;
      }
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }
  setItemsCheckStatus(status) {
    let methodName = 'setItemsCheckStatus';
    try {
      if (status === '200') {
        this.characters = this.dataService.responseData;
        this.characterChanged.next(200);
        this.displayLoading.next(200);
      }
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  findGender(): void {
    let methodName = 'findGender';
    try {
      this.femaleCharacters = [];
      this.genders = { male: 0, female: 0, other: 0 };
      for (const character of this.characters) {
        // Check if the character is male
        if (character.sex.toLowerCase() === 'male') {
          // Add the male character to the maleCharacters array
          this.genders['male']++;
        }
        if (character.sex.toLowerCase() === 'other') {
          // Add the male character to the maleCharacters array
          this.genders['other']++;
        }
        // Check if the character is male
        if (character.sex.toLowerCase() === 'female') {
          // Add the male character to the maleCharacters array
          this.genders['female']++;
          this.femaleCharacters.push(character);
        }
      }
      const old: Item[] = this.characters.slice(0, 5);
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  getAllGenders() {
    let methodName = 'getAllGenders';
    try {
      this.findGender();
      return this.genders;
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  getCharactersWithName() {
    let methodName = 'getCharactersWithName';
    try {
      this.characterWithName = this.characters.filter((person) =>
        person.name.startsWith('S')
      );

      return this.characterWithName;
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }
  getOldest(): Item[] {
    let methodName = 'getOldest';
    try {
      this.characters.sort((a, b) => b.height - a.height);
      const old: Item[] = this.characters.slice(0, 5);
      return old;
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }
  getGender() {
    let methodName = 'getGender';
    try {
      this.findGender();
      return this.femaleCharacters.slice();
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  ngOnDestroy() {
    let methodName = 'ngOnDestroy';
    try {
      this.alive = false;
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }
}
