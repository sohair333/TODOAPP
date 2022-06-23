import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todoData :Todo[]=[
    new Todo('test!',true),
    new Todo('this is the test')
  ];
  
  constructor() { }

  getALlTodo(){
    return this.todoData;
  }
  addTodo(todo:Todo){
    this.todoData.push(todo);
  }
  updatTodo(index : number,updatedtodo:Todo){
    this.todoData[index]= updatedtodo;

  }
  deletedTodo(index:number){
    this.todoData.splice(index,1);
  }
}
