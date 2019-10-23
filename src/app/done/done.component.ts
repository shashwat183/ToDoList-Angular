import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  doneTasks: string[] = [];
  constructor() {
    this.doneTasks.push('Wash Clothes');
    this.doneTasks.push('Buy Groceries');
  }

  ngOnInit() {
  }

}
