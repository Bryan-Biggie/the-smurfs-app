import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Item } from './item.model';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  responseMessage;
  responseResult;
  responseData;
  isDataFetched: boolean = false;
  

  // isLoading: any = new BehaviorSubject<number>(0);
  creatingCharacter: BehaviorSubject<string> = new BehaviorSubject<string>('0');
  fetchingCharacters: BehaviorSubject<string> = new BehaviorSubject<string>(
    '0'
  );

  updateCharacter: BehaviorSubject<string> = new BehaviorSubject<string>('0');
  deleteCharacter: BehaviorSubject<string> = new BehaviorSubject<string>('0');

  constructor(private http: HttpClient) {}

  createAndStoreItem(item: Item) {
    this.http
      .post('http://localhost:4200/users/insertUser', item)
      .pipe(
        map((itemsData) => {
          this.responseMessage = itemsData['message'];
          this.responseResult = itemsData['result'];
          this.responseData = itemsData['data'];

          return itemsData['result'];
        }),
        tap((items) => {
          this.creatingCharacter.next(items);
        })
      )
      .subscribe((responseData) => {
        console.log('Status message: ' + this.responseMessage);
        console.log('Status code: ' + this.responseResult);
      });
  }

  fetchItems() {
    return this.http
      .post('http://localhost:4200/users/retrieveUser', { Theme: 'Smurfs' })
      .pipe(
        map((itemsData) => {
          this.responseMessage = itemsData['message'];
          this.responseResult = itemsData['result'];
          this.responseData = itemsData['data'];
          // console.log( itemsData['data']);

          return itemsData['result'];
        }),
        tap((items) => {
          this.isDataFetched = true;
          this.fetchingCharacters.next(items);
        })
      )
      .subscribe((responseData) => {
        console.log('Status message: ' + this.responseMessage);
        console.log('Status code: ' + this.responseResult);
      });
  }

  fetchItemsResolver() {
    return this.http
      .post('http://localhost:4200/users/retrieveUser', { Theme: 'Smurfs' })
      .pipe(
        map((itemsData) => {
          this.responseMessage = itemsData['message'];
          this.responseResult = itemsData['result'];
          this.responseData = itemsData['data'];

          this.fetchingCharacters.next(this.responseResult);
          return itemsData['data'];
        })
      );
  }

  updateItem(item: Item) {
    this.http
      .post('http://localhost:4200/users/updateGradUser', item)
      .pipe(
        map((itemsData) => {
          this.responseMessage = itemsData['message'];
          this.responseResult = itemsData['result'];
          this.responseData = itemsData['data'];

          return itemsData['result'];
        }),
        tap((items) => {
          this.updateCharacter.next(items); //200
        })
      )
      .subscribe((responseData) => {
        console.log('Status message: ' + this.responseMessage);
        console.log('Status code: ' + this.responseResult);
      });
  }

  deleteItem(item: Item) {
    this.http
      .post('http://localhost:4200/users/deleteGradUser', item)
      .pipe(
        map((itemsData) => {
          this.responseMessage = itemsData['message'];
          this.responseResult = itemsData['result'];
          this.responseData = itemsData['data'];

          return itemsData['result'];
        }),
        tap((items) => {
          this.deleteCharacter.next(items);
        })
      )
      .subscribe((responseData) => {
        console.log('Status message: ' + this.responseMessage);
        console.log('Status code: ' + this.responseResult);
      });
  }

  // =========================================== OLD CODE ===============================================================================================

  // createAndStoreItem(item: Item) {
  //   this.isLoading.next(0);
  //   //this is to put 1 item without overiding any data
  //   // Send Http request
  //   this.http
  //     .post(
  //       'http://localhost:4200/users/insertUser', item

  //     ).pipe(
  //       map((itemsData) => {
  //         this.responseMessage = itemsData['message'];
  //         this.responseResult = itemsData['result'];

  //         if(itemsData['result'] === "200" ){
  //           this.mainlistService.addItem(itemsData['data']);
  //         }
  //         return itemsData['result'];
  //       }),tap((items) => {
  //         this.isLoading.next(items);
  //         this.creatingCharacter.next(items);
  //       })
  //     )
  //     .subscribe((responseData) => {

  //       // console.log(responseData);
  //       console.log("Status message: " + this.responseMessage);
  //         console.log("Status code: "+ this.responseResult);
  //     });
  // }

  // fetchItems() {
  //   return this.http
  //     .post(
  //       'http://localhost:4200/users/retrieveUser', { "Theme": "Smurfs"}
  //     )
  //     .pipe(
  //       map((itemsData) => {
  //         this.responseMessage = itemsData['message'];
  //         this.responseResult = itemsData['result'];

  //         if(itemsData['result'] === "200" ){
  //           this.mainlistService.setItems(itemsData['data']);
  //         }
  //         return itemsData['result'];
  //       }),
  //       tap((items) => {
  //         // this.mainlistService.setItems(items);
  //         this.isLoading.next(items);
  //         this.isFetched = true;
  //         // console.log(items);
  //         console.log("Status message: " + this.responseMessage);
  //         console.log("Status code: "+ this.responseResult);
  //       })
  //     );
  // }

  // updateItem(item: Item){
  //   this.isLoading.next(0);
  //   this.http.post('http://localhost:4200/users/updateGradUser', item)
  //   .pipe(
  //     map((itemsData) => {
  //       this.responseMessage = itemsData['message'];
  //       this.responseResult = itemsData['result'];

  //       if(itemsData['result'] === "200" ){
  //         this.mainlistService.updateItem(itemsData['data']);
  //       }

  //       return itemsData['result'];
  //     }),tap((items) => {
  //       this.isLoading.next(items);
  //       this.updateCharacter.next(items);
  //     })
  //   )
  //   .subscribe((responseData) => {
  //     // console.log(responseData);
  //     console.log("Status message: " + this.responseMessage);
  //     console.log("Status code: "+ this.responseResult);
  //   });

  // }

  // deleteItem(itemId: number, item: Item){
  //   this.isLoading.next(0);
  //   this.http.post(
  //     'http://localhost:4200/users/deleteGradUser', item
  //   ).pipe(
  //     map((itemsData) => {
  //       this.responseMessage = itemsData['message'];
  //       this.responseResult = itemsData['result'];

  //       if(itemsData['result'] === "200" ){
  //         this.mainlistService.removeItem(itemId);
  //       }
  //       return itemsData['result'];
  //     }),tap((items) => {
  //       this.isLoading.next(items);
  //       this.deleteCharacter.next(items);
  //     })
  //   )
  //   .subscribe((responseData) => {
  //     // console.log(responseData);
  //     console.log("Status message: " + this.responseMessage);
  //         console.log("Status code: "+ this.responseResult);
  //   });
  // }

  //================================================================================ FIRE BASE ===============================================================================

  // storeItems() {
  //   const items = this.mainlistService.getItems(); //Get the items from the array in the service file
  //   this.http
  //     .put(
  //       // I want to add all my items and overide any existing items in the database
  //       'https://ng-smurfs-app-default-rtdb.firebaseio.com/smurfs.json',
  //       items
  //     )
  //     .subscribe((response) => {
  //       console.log(response);
  //     });
  // }

  // createAndStoreItem(item: Item) {
  //   //this is to put 1 item without overiding ant data
  //   // Send Http request
  //   this.http
  //     .post(
  //       // 'https://ng-smurfs-app-default-rtdb.firebaseio.com/smurfs.json',
  //       'http://localhost:4200/users/insertUser', item

  //     )
  //     .subscribe((responseData: any) => {
  //       // Success: Check the HTTP status code
  //       if (responseData && responseData.status === 200) {
  //         console.log('Request successful with status 200');
  //         // Additional logic for a successful request (status 200)
  //       } else {
  //         console.warn('Unexpected response:', responseData);
  //         // Handle other status codes or unexpected responses
  //       }
  //       //console.log(responseData);
  //     });
  // }

  // fetchItems() {
  //   return this.http
  //     .get<Item[]>(
  // 'https://ng-smurfs-app-default-rtdb.firebaseio.com/smurfs.json'
  //
  //     )
  //     .pipe(
  //       map((items) => {
  //         const itemArray: Item[] = [];
  //         for (const key in items) {
  //           if (items.hasOwnProperty(key)) {
  //             // Replace existing 'id' with the key value
  //             // items[key].id = +key;
  //             itemArray.push({...items[key], idData: key});
  //           }
  //         }

  //         return itemArray;
  //       }),
  //       tap((items) => {
  //         this.mainlistService.setItems(items);
  //         console.log(items);
  //       })
  //     );
  // }

  // updateItem(idData: string, item: Item){
  //   this.http.put('https://ng-smurfs-app-default-rtdb.firebaseio.com/smurfs/'+idData +'.json', item)
  //   .subscribe();

  // }

  // deleteItem(idData: string){
  //   console.log(idData);
  //   this.http.delete(
  //     'https://ng-smurfs-app-default-rtdb.firebaseio.com/smurfs/'+idData +'.json'
  //   ).subscribe((response) => {
  //     console.log(response);
  //   });
  // }
}
