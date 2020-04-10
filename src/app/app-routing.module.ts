import { HomeAuthGuardService } from './services/auth-guard/home-auth-guard.service';
import { TasksAuthGuardService } from './services/auth-guard/tasks-auth-guard.service';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [HomeAuthGuardService]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [HomeAuthGuardService]
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [TasksAuthGuardService]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
