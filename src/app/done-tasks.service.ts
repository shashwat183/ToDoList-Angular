import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoneTasksService {

  doneTasks: string[] = [];

  constructor() {
    this.doneTasks = ['Wash Clothes', 'Buy Groceries'];
   }

  getDoneTasks() {
    return this.doneTasks;
  }

  addDoneTask(task: string) {
    this.doneTasks.push(task);
  }

  removeDoneTask(task: string) {
    const index = this.doneTasks.indexOf(task);
    this.doneTasks.splice(index, 1);
  }
}
