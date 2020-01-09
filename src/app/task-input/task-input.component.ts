import { TodoTasksService } from './../todo-tasks.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent implements OnInit {

  constructor(private todoTaskService: TodoTasksService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const taskInputName = 'new_task';
    this.todoTaskService.addTodoTask(form.value[taskInputName]);
  }
}
