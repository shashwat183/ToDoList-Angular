import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoTasks: string[] = ['Learn Angular', 'Go to Gym'];
  constructor() { }

  ngOnInit() {
  }

}