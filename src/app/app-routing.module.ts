import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { ListOfTodoComponent } from './list-of-todo/list-of-todo.component';

const routes: Routes = [
  {
    path: 'login',
    component : LoginComponent
  },{
    path: '',
    component : LoginComponent
  },{
    path: 'welcome/:name',
    component : WelcomeComponent,
    canActivate : [RouteGuardService]
  },{
    path: 'todos',
    component : ListOfTodoComponent,
    canActivate : [RouteGuardService]
  },{
    path: 'todos/:id',
    component : TodosComponent,
    canActivate : [RouteGuardService]
  },{
    path: 'logout',
    component : LogoutComponent,
    canActivate : [RouteGuardService]
  },
  {
    path : '**',
    component : NotFoundComponent,
    canActivate : [RouteGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
