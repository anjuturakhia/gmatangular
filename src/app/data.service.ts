import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public sharedData: Subject<any> = new Subject<any>();
  sharedData$: Observable<any> = this.sharedData.asObservable();

  public blue = new BehaviorSubject<boolean>(false);

  setData(updatedData) {
    console.log(updatedData);
    this.sharedData.next(updatedData);
  }

  setBlue(changeToggle: boolean) {
    this.blue.next(changeToggle);
  }

  getBlue() {
    return this.blue.asObservable();
  }

  
}
