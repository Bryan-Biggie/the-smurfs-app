import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logEntry(className: string, methodName: string, error){
    console.log("🚀 ~ " + className + " ~ " + methodName + " ~  error: ", error);

  }
}
