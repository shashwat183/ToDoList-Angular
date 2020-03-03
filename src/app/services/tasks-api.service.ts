import { HttpClient } from '@angular/common/http';
import { API_URL } from './../env';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksApiService {

  constructor(private http: HttpClient) { }

  // private static _handleError(err: HttpErrorResponse | any) {
  //   retur throw(err.message || 'Error: Unable to complete request.');
  // }

  getToDoTasks(): Observable<any> {
    return this.http.get<any>(`${API_URL}/tasks/todo`);
  }

  getDoneTasks(): Observable<any> {
    return this.http.get<any>(`${API_URL}/tasks/done`);
  }

  updateTask(taskName, newState): Observable<any> {
    const body = {Name: taskName, Status: newState};
    return this.http.patch(`${API_URL}/tasks/${taskName}`, body);
  }

  addTask(taskName): Observable<any> {
    const body = {_id: taskName, Status: 'ToDo'};
    return this.http.post(`${API_URL}/tasks/${taskName}`, body);
  }

  deleteTask(taskName): Observable<any> {
    return this.http.delete(`${API_URL}/tasks/${taskName}`);
  }

}
