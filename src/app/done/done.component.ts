import { DoneTasksService } from './../done-tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  doneTasks: string[] = [];
  constructor(private doneTasksService: DoneTasksService) {
    this.doneTasks = this.doneTasksService.getDoneTasks();
  }

  ngOnInit() {
  }

}
