import { TodoTasksService } from './todo-tasks.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { DoneComponent } from './done/done.component';
import { TaskInputComponent } from './task-input/task-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DoneComponent,
    TaskInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TodoTasksService
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
