import { DoneTasksService } from './../done-tasks.service';
import { TodoTasksService } from './../todo-tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoTasks: string[] = [];
  constructor(private todoTasksService: TodoTasksService, private doneTasksService: DoneTasksService) {
    this.todoTasks = todoTasksService.getTodoTasks();
   }

  ngOnInit() {
  }

  onClick($event) {
    // const index = this.todoTasks.indexOf($event.target.innerText);
    // this.todoTasks.splice(index, 1);
    this.todoTasksService.removeTodoTask($event.target.innerText);
    this.doneTasksService.addDoneTask($event.target.innerText);
  }

}
