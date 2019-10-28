import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoTasksService {

  todoTasks: string[] = [];

  constructor() {
    this.todoTasks = ['Learn Angular', 'Go to Gym', 'Clean Kitchen'];
   }

  getTodoTasks() {
    return this.todoTasks;
  }

  addTodoTask(task: string) {
    this.todoTasks.push(task);
  }

  removeTodoTask(task: string) {
    const index = this.todoTasks.indexOf(task);
    this.todoTasks.splice(index, 1);
  }

}
