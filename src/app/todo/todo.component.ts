import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoTasks: string[] = [];
  constructor() {
    this.todoTasks.push('Learn Angular');
    this.todoTasks.push('Go to Gym');
   }

  ngOnInit() {
  }

}
