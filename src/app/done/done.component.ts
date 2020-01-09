import { DoneTasksService } from './../done-tasks.service';
import { TodoTasksService } from './../todo-tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  doneTasks: string[] = [];
  constructor(private todoTasksService: TodoTasksService, private doneTasksService: DoneTasksService) {
    this.doneTasks = this.doneTasksService.getDoneTasks();
  }

  ngOnInit() {
  }

  onClick($event) {
    // const index = this.todoTasks.indexOf($event.target.innerText);
    // this.todoTasks.splice(index, 1);
    this.doneTasksService.removeDoneTask($event.target.innerText);
    this.todoTasksService.addTodoTask($event.target.innerText);
  }

}
