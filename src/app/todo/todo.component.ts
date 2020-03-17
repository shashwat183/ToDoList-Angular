import { SharedService } from '../services/shared/shared.service';
import { DoneComponent } from './../done/done.component';
import { TasksApiService } from '../services/tasks-api/tasks-api.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({ 
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoTasks: string[] = [];
  updateSubsciption: Subscription;
  constructor(private tasksService: TasksApiService, private sharedService: SharedService) {
    this.updateSubsciption = this.sharedService.getTodoUpdate().subscribe(() => {
      this.getTasks();
      this.sharedService.updateDoneComponent();
    });
   }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.todoTasks = [];
    this.tasksService.getToDoTasks()
    .subscribe(data => this.extractTaskNameFromList(data));
  }

  private extractTaskNameFromList(data) {
    // tslint:disable-next-line: prefer-const
    for (let task of data['data']) {
      // tslint:disable-next-line: no-string-literal
      this.todoTasks.push(task['task_name']);
    }
  }

  onClick($event) {
    const index = this.todoTasks.indexOf($event.target.innerText);
    this.todoTasks.splice(index, 1);
    this.tasksService.updateTask($event.target.innerText, 'Done').subscribe(() => {
      this.getTasks();
      this.sharedService.updateDoneComponent();
    });
    // this.tasksService.getToDoTasks()
    // .subscribe(data => this.extractTaskNameFromList(data));
    // this.doneTasksService.addDoneTask($event.target.innerText);
  }

}
