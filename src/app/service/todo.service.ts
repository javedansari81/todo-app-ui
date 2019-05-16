import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../list-of-todo/list-of-todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http : HttpClient) { }


  createBasicAuthString(){
    let username = 'Javed';
    let password = 'ansari';
    return 'Basic ' + window.btoa(username + ':' +password);
  }

  getListOfTodo(){
    let username = 'Javed';
    // let basicAuthString = this.createBasicAuthString();
    // let headers = new HttpHeaders({
    //     Authorization : basicAuthString
    // })
    
    // return this.http.get<Todo[]>(`http://localhost:8081/users/${username}/todos`,{
    //   headers : headers
    // });
    return this.http.get<Todo[]>(`http://localhost:8081/users/${username}/todos`);
  }

  updateTodo(id : number,username : string,todo : Todo){
    console.log(id+' '+username);
    return this.http.put<Boolean>(`http://localhost:8081/users/${username}/todos/${id}`,todo);
  }

  createTodo(id : number,username : string,todo : Todo){
    console.log(id+' '+username);
    return this.http.post<void>(`http://localhost:8081/users/${username}/todos`,todo);
  }

  deleteTodo(id : number,username : string){
    console.log(id+' '+username);
    return this.http.delete<Todo[]>(`http://localhost:8081/users/${username}/todos/${id}`);
  }


  getTodo(id : number,username : string){
    console.log(id+' '+username);
    
    return this.http.get<Todo>(`http://localhost:8081/users/${username}/todos/${id}`);

    

  }



}
