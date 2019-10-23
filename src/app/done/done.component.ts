import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  doneTasks: string[] = ['Wash Clothes', 'Buy Groceries'];
  constructor() { }

  ngOnInit() {
  }

}
