import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
 @Input() todo !:Todo ;
 @Output() todoCLicked :EventEmitter<void>=new EventEmitter();
 @Output() editeClicked :EventEmitter<void>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onTodoCLicked(){
    this.todoCLicked.emit();
  }
  onEditeClicked(){
    this.editeClicked.emit();
  }

}
