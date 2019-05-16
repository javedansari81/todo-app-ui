import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-of-todo/list-of-todo.component';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  todoId : number;
  todo : Todo;
  constructor(private todoService : TodoService,
    private activatedRoute : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.todoId = this.activatedRoute.snapshot.params['id'];
    //console.log(this.todoId)
    this.todo = new Todo(this.todoId,'',false,new Date());
    if(this.todoId != -1){
        
        this.todoService.getTodo(this.todoId,'Javed').subscribe(
          res => {
            console.log(res);
            this.todo = res;
          },
          err => {
            console.log(err);
          }
        )
    }
    
    
  }

  saveTodo(){
    console.log('todo id '+this.todoId);
    if(this.todoId == -1){
      this.todoService.createTodo(this.todoId,'Javed',this.todo).subscribe(
        res => {
          console.log('res '+res);
          this.router.navigate(['todos']);
        }
      )
    }else{
      this.todoService.updateTodo(this.todoId,'Javed',this.todo).subscribe(
        res => {
          console.log('res '+res);
          this.router.navigate(['todos']);
        }
      )
    }
    
  }

}


