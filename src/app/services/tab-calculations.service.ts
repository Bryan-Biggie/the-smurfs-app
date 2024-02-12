import { Injectable, OnDestroy } from '@angular/core';
import { MainListService } from '../main-list/main-list.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Item } from '../main-list/item.model';
import { MatDialog } from '@angular/material/dialog';
import { DataStorageService } from '../main-list/data-storage.service';
import { DialogComponent } from '../main-list/dialog/dialog.component';


@Injectable({
  providedIn: 'root',
})
export class TabCalculationsService  {
  item: Item;
  itemId;
  genders: object = { male: 0, female: 0, other: 0 };
  characters: Item[] = [];
  private femaleCharacters: Item[] = [];
  private characterWithName: Item[] = [];
  subscription: Subscription;
  characterChanged: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  creatingCharacterSubscription: Subscription;
  fetchingCharactersSubscription: Subscription;
  updateCharacterSubscription: Subscription;
  deleteCharacterSubscription: Subscription;
    isFetched: boolean = false;
  displayLoading: any = new BehaviorSubject<number>(0);

  constructor(
    private dataService: DataStorageService,
    public dialog: MatDialog
  ) {
    try {
      
      this.fetchingCharactersSubscription =
        this.dataService.fetchingCharacters.subscribe((status) => {
          this.setItemsCheckStatus(status);
        });
      //   this.creatingCharacterSubscription =
      //   this.dataService.creatingCharacter.subscribe((status) => {
      //     this.addItemCheckStatus(status);
      //   });
      // this.updateCharacterSubscription =
      //   this.dataService.updateCharacter.subscribe((status) => {
      //     this.updateCheckStatus(status);
      //   });
      // this.deleteCharacterSubscription =
      //   this.dataService.deleteCharacter.subscribe((status) => {          
      //     this.removeItemCheckStatus(status);
      //   });
    } catch (error) {
      console.log('🚀 ~ TabCalculationsService ~ error:', error);
    }
  }

  setItems() {
    try {
      if (!this.dataService.isDataFetched) {
        this.displayLoading.next(0);
        this.dataService.fetchItems();
        this.isFetched = true;
      }
    } catch (error) {
      console.log('🚀 ~ TabCalculationsService ~ setItems ~ error:', error);
    }
  }
  setItemsCheckStatus(status) {
    try {
      if (status === '200') {
        this.characters = this.dataService.responseData;
        // this.femaleCharacters = [];
        // this.genders = { male: 0, female: 0, other: 0 };
        // this.characters = this.mainListService.getItems();//************************************************ */
        // this.findGender();
        // this.characters.sort((a, b) => b.height - a.height);
        // this.characterWithName = this.characters.filter((person) =>
        //   person.name.startsWith('S')
        // );
        this.characterChanged.next(200);
        this.displayLoading.next(200);
      }
    } catch (error) {
      console.log(
        '🚀 ~ TabCalculationsService ~ setItemsCheckStatus ~ error:',
        error
      );
    }
  }

  // addItem(newItem: Item) {
  //   this.displayLoading.next(0);
  //   this.dataService.createAndStoreItem(newItem); // this adds the item to the database
  // }
  // addItemCheckStatus(status) {
  //   if (status === '200') {
  //     let newItem = this.dataService.responseData;
  //     this.characters.push(newItem);
  //     this.characterChanged.next(200);
  //     this.displayLoading.next(200);
  //     this.dialog.open(DialogComponent, {
  //       data: {
  //         heading: 'NEW SMURF!',
  //         body: 'The smurf ' + newItem.name + ' has been added to the list.',
  //       },
  //     });
  //   }
  // }

  // removeItem( itemDelete: Item): void {
  //   this.dataService.deleteItem( itemDelete);
  // }
  // removeItemCheckStatus(status) {
  //   console.log("🚀 ~ TabCalculationsService ~ removeItemCheckStatus ~ status:", status)
    
  //   if (status === '200') {
  //     let itemDelete: Item = this.dataService.responseData;
  //     const indexToRemove = this.characters.findIndex(
  //       (item) => item.id === itemDelete.id
  //     );

  //     if (indexToRemove !== -1) {
  //       this.characters.splice(indexToRemove, 1);
  //       this.characterChanged.next(200);
  //   }
  //   }
  // }

  // updateItem(itemInfo: Item): void {
  //   this.displayLoading.next(0);
  //   // this.dataService.updateCharacter.next('0');
  //   this.dataService.updateItem(itemInfo); // this adds the item to the database
  // }
  // updateCheckStatus(status: string) {
  //   if (status === '200') {
  //     let itemInfo = this.dataService.responseData;
  //     const foundItem = this.characters.find((item) => item.id === itemInfo.id);

  //     if (foundItem) {
  //       foundItem.name = itemInfo.name;
  //       foundItem.description = itemInfo.description;
  //       foundItem.imagePath = itemInfo.imagePath;
  //       foundItem.sex = itemInfo.sex;
  //       foundItem.height = itemInfo.height;
  //       foundItem.age = itemInfo.age;
  //       this.characterChanged.next(200);
  //       this.displayLoading.next(200);

  //       this.dialog.open(DialogComponent, {
  //         data: {
  //           heading: 'SAVED!',
  //           body: 'The changes made to ' + itemInfo.name + ' have been saved!',
  //         },
  //       });
  //     } else {
  //       this.dialog.open(DialogComponent, {
  //         data: {
  //           heading: 'FAILED!',
  //           body: `Item with ID ${itemInfo.id} not found`,
  //         },
  //       });
  //     }
  //   }
  // }

  findGender(): void {
    try {
      this.femaleCharacters = [];
      this.genders = { male: 0, female: 0, other: 0 };
      // this.characters.sort((a, b) => b.height - a.height);
      // this.characterWithName = this.characters.filter((person) =>
      //   person.name.startsWith('S')
      // );
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
      console.log('🚀 ~ TabCalculationsService ~ findGender ~ error:', error);
    }
  }

  getAllGenders() {
    try {
      this.findGender();
      return this.genders;
    } catch (error) {
      console.log(
        '🚀 ~ TabCalculationsService ~ getAllGenders ~ error:',
        error
      );
    }
  }

  getCharactersWithName() {
    try {
      this.characterWithName = this.characters.filter((person) =>
      person.name.startsWith('S')
    );
      // console.log(
      //   '🚀 ~ TabCalculationsService ~ XgetCharactersWithName ~ this.characterWithName: ',
      //   this.characterWithName
      // );

      return this.characterWithName;
    } catch (error) {
      console.log(
        '🚀 ~ TabCalculationsService ~ getCharactersWithName ~ error:',
        error
      );
    }
  }
  getOldest(): Item[] {
    try {
      this.characters.sort((a, b) => b.height - a.height);
      const old: Item[] = this.characters.slice(0, 5);
      // console.log('🚀 ~ TabCalculationsService ~ XgetOldest ~ old: ', old);
      return old;
    } catch (error) {
      console.log('🚀 ~ TabCalculationsService ~ getOldest ~ error:', error);
    }
  }
  getGender() {
    try {
      this.findGender();
      
      // console.log(
      //   '🚀 ~ TabCalculationsService ~ getGender ~ this.femaleCharacters.slice(): ',
      //   this.femaleCharacters.slice()
      // );

      return this.femaleCharacters.slice();
    } catch (error) {
      console.log('🚀 ~ TabCalculationsService ~ getGender ~ error:', error);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
