import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id : number,
    public desc : String,
    public completed : boolean,
    public targetDate:Date
    ){
  }
}

@Component({
  selector: 'app-list-of-todo',
  templateUrl: './list-of-todo.component.html',
  styleUrls: ['./list-of-todo.component.css']
})
export class ListOfTodoComponent implements OnInit {

  todos : Todo[];
  message : string;
  constructor(private todoService : TodoService,
    private router : Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.getListOfTodo().subscribe(
      res => {
       console.log(res);
       this.todos = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  updateTodo(id : number){
    console.log(id);
    this.router.navigate(['todos',id]);
  }

  deleteTodo(id : number){
    this.todoService.deleteTodo(id,'Javed').subscribe(
      res => {
        console.log(res);
        this.message = `Deletion of todo ${id} is successful !`;
        this.refreshTodos();
        //this.todos = res;
        //location.reload();
      },
      err => {
        console.log(err);
      }
    )
  }

  CreateTodo(){
    let id = -1;
    this.router.navigate(['todos',id]);
  }

}
