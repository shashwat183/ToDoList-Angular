import { SharedService } from '../services/shared/shared.service';
import { TasksApiService } from '../services/tasks-api/tasks-api.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent implements OnInit {

  constructor(private taskService: TasksApiService, private sharedService: SharedService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let taskName = form.value['new_task'];
    taskName = taskName.trim();
    this.taskService.addTask(taskName).subscribe(() => {
      this.sharedService.updateTodoComponent();
      form.reset();
    });
  }
}
