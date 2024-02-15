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
    try {// listens to the DAL if there is any change to the database
      this.dataService.fetchingCharacters
        .pipe(takeWhile(() => this.alive))
        .subscribe((status) => {
          this.setItemsCheckStatus(status);//calls this method to go and fetch the data
        });
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  setItems() {// this method is called by the components to tell the business layer to go fetch the data from the DAL
    let methodName = 'setItems';
    try {
      if (!this.dataService.isDataFetched) {// this checks if the data is fetched, if its fetched it does not call the DAL it just sends the array it has to the components.
        this.displayLoading.next(0);//this starts the loading screen
        this.dataService.fetchItems();//this calls the DAL to fetch the data from the api
        this.isFetched = true;
      }
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }
  setItemsCheckStatus(status) {// this method listens to the code from the DAL
    let methodName = 'setItemsCheckStatus';
    try {
      if (status === '200') {
        this.characters = this.dataService.responseData;
        this.characterChanged.next(200);//this tells the components that the data has been fetched
        this.displayLoading.next(200);// stops the loading screen
      }
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  findGender(): void { // this makes all the calculations regarding gender
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
          this.femaleCharacters.push(character);// pushes all the female
        }
      }
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  getAllGenders() { // this method returns how many Males, Females and Others are in the list and it calls the find Gender method to do the calculations
    let methodName = 'getAllGenders';
    try {
      this.findGender();
      return this.genders;
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  getCharactersWithName() { // this method returns all the characters with a name startintg with an "S" in the list
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
  getOldest(): Item[] { // this method returns the 5 oldest characters in the list
    let methodName = 'getOldest';
    try {
      this.characters.sort((a, b) => b.height - a.height);// this sorts the list in Aphabetical order
      const old: Item[] = this.characters.slice(0, 5);
      return old;
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }
  getGender() { // this method returns all the female characters in the list
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
