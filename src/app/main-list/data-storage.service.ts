import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError, retry, timeout } from 'rxjs/operators';
import { Item } from './item.model';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { LoggingService } from '../services/logging.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  public className = 'DataStorageService';
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

  constructor(
    private http: HttpClient,
    private loggingService: LoggingService
  ) {}

  /**
   * //The Generic Post method for sending/retrieving data
   * @param postObject - the object that will be sent down to the api
   * @param SubjectToUpdate - the behaviour subject that will be emitted (this is a pass by ref)
   * @param ObjectToUpdate - the object to update for other methods to retrieve (this is a pass by ref)
   * @param endpointVerb - the endpoint of the api
   * @param callingMethod - the calling method for logging purposes
   * @param userEmail - email for authentication
   * @param userPassword - password for authentication
   */

  public GeneralPost<T>(
    postObject: any,
    SubjectToUpdate: BehaviorSubject<string>,
    endpointVerb: string
  ) {
    let methodName = 'GeneralPost';

    try {
      let _url = 'http://localhost:4200/users';
      this.http
        .post<T>(_url + '/' + endpointVerb, JSON.stringify(postObject))
        .pipe(timeout(50000), retry(1))
        .subscribe(
          (data) => {
            if (data['result'] == '200') {
              this.responseMessage = data['message'];
              this.responseResult = data['result'];
              this.responseData = data['data'];

              SubjectToUpdate.next('200');
              console.log('Status message: ' + this.responseMessage);
              console.log('Status code: ' + this.responseResult);
            } else {
              SubjectToUpdate.next(data['result']);
              SubjectToUpdate.next('0');
            }
          },
          (error) => {
            this.loggingService.logEntry(this.className, methodName, error);
            SubjectToUpdate.next('601');
            SubjectToUpdate.next('0');
          }
        );
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
      SubjectToUpdate.next('603');
      SubjectToUpdate.next('0');
    }
  }

  // public GeneralPost<T>(postObject: any, SubjectToUpdate: BehaviorSubject<string>, ObjectToUpdate: T, endpointVerb: string, callingMethod: string, userEmail: string, userPassword: string, reset: boolean) {
  // 	const _methodName = "GeneralPost";
  // 	try {
  // 		let _url = this.getGeneratorAccessURL();
  // 		let reqHeader = this.headerService.initHttpHeader(userEmail, userPassword);

  // 		this.http.post<T>(_url + '/' + endpointVerb, JSON.stringify(postObject), { headers: reqHeader }).pipe(timeout(50000), retry(1))
  // 			.subscribe(data => {
  // 				if (data["result"] == "200") {
  // 					Object.assign(ObjectToUpdate, data);//this does a deep copy assignment so as to not remove the pass by reference
  // 					SubjectToUpdate.next("200");
  // 					if (reset == true) {
  // 						SubjectToUpdate.next("0");
  // 					}
  // 				}
  // 				else {
  // 					SubjectToUpdate.next(data["result"]);
  // 					SubjectToUpdate.next("0");
  // 				}
  // 			},
  // 				error => {
  // 					//@ts-ignore
  // 					this.loggingService.logEntry(this.fileName, this._Class, _methodName, LogLevel.ERROR, "Error trying to subscribe in general post:" + JSON.stringify(error), error.message, "request: " + JSON.stringify(postObject) + "email:" + userEmail + ", password:" + userPassword);
  // 					SubjectToUpdate.next("601");
  // 					SubjectToUpdate.next("0");
  // 				}
  // 			);
  // 	}
  // 	catch (Exception) {
  // 		this.loggingService.logEntry(this.fileName, this._Class, _methodName, LogLevel.ERROR, "General error executing general post:" + JSON.stringify(Exception), Exception.message, JSON.stringify(postObject));
  // 		SubjectToUpdate.next("603");
  // 		SubjectToUpdate.next("0");
  // 	}
  // }

  createAndStoreItem(item: Item) {// this method is called by the business layer to add a character in the database
    let methodName = 'createAndStoreItem';
    try {
      let itemToInsert: Item = item;
      this.GeneralPost(itemToInsert, this.creatingCharacter, 'insertUser');
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  fetchItems() {// this method is called by the business layer to fetch characters from the database
    let methodName = 'fetchItems';
    try {
      this.GeneralPost(
        { Theme: 'Smurfs' },
        this.fetchingCharacters,
        'retrieveUser'
      );
      this.isDataFetched = true;
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  updateItem(item: Item) {// this method is called by the business layer to update a character in the database
    let methodName = 'updateItem';
    try {
      let itemToUpdate: Item = item;
      this.GeneralPost(itemToUpdate, this.updateCharacter, 'updateGradUser');
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }

  deleteItem(item: Item) {// this method is called by the business layer to delete a character in the database
    let methodName = 'deleteItem';
    try {
      let itemToDelete: Item = item;
      this.GeneralPost(itemToDelete, this.deleteCharacter, 'deleteGradUser');
    } catch (error) {
      this.loggingService.logEntry(this.className, methodName, error);
    }
  }
}
