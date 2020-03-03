import { SharedService } from './../shared.service';
import { TasksApiService } from './../services/tasks-api.service';
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
    const taskInputName = 'new_task';
    this.taskService.addTask(form.value[taskInputName]).subscribe(() => {
      this.sharedService.updateTodoComponent();
      form.reset();
    });
  }
}
