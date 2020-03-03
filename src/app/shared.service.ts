import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private doneSubject = new Subject<any>();
  private todoSubject = new Subject<any>();
  constructor() { }

  updateDoneComponent() {
    this.doneSubject.next();
  }

  getDoneUpdate(): Observable<any> {
    return this.doneSubject.asObservable();
  }
  updateTodoComponent() {
    this.todoSubject.next();
  }
  getTodoUpdate(): Observable<any> {
    return this.todoSubject.asObservable();
  }


}
