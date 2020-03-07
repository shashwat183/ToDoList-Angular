import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TasksApiService } from './services/tasks-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { DoneComponent } from './done/done.component';
import { TaskInputComponent } from './task-input/task-input.component';
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './tasks/tasks.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DoneComponent,
    TaskInputComponent,
    TasksComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TasksApiService
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
