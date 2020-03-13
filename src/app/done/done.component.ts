import { SharedService } from './../shared.service';
import { TasksApiService } from './../services/tasks-api.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  doneTasks: string[] = [];
  updateSubsciption: Subscription;
  constructor(private tasksService: TasksApiService, private sharedService: SharedService) {
    this.updateSubsciption = this.sharedService.getDoneUpdate().subscribe(() => this.getDoneTasks());
  }

  ngOnInit() {
    this.getDoneTasks();
  }

  getDoneTasks() {
    this.doneTasks = [];
    this.tasksService.getDoneTasks()
    .subscribe(data => this.extractTaskNameFromList(data));
  }

  private extractTaskNameFromList(data: []) {
    // tslint:disable-next-line: prefer-const
    for (let task of data) {
      // tslint:disable-next-line: no-string-literal
      this.doneTasks.push(task['_id']);
    }
  }

  onClick($event) {
    // const index = this.todoTasks.indexOf($event.target.innerText);
    // this.todoTasks.splice(index, 1);
    this.tasksService.deleteTask($event.target.innerText).subscribe(() => this.getDoneTasks());
  }

}
