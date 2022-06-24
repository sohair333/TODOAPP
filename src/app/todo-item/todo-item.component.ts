import { AfterViewInit, Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model';
import tippy, { Tippy } from 'tippy.js';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit ,AfterViewInit{
 @Input() todo !:Todo ;
 @Output() todoCLicked :EventEmitter<void>=new EventEmitter();
 @Output() editeClicked :EventEmitter<void>=new EventEmitter();
 @Output() deleteCLicked :EventEmitter<void>=new EventEmitter();
 @ViewChild('editeBtn') editeBtnElementRef  !:ElementRef<HTMLElement>;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit():void{

    tippy(this.editeBtnElementRef.nativeElement,{
      content:'Edite task!'
    })
    }
  onTodoCLicked(){
    this.todoCLicked.emit();
  }
  onEditeClicked(){
    this.editeClicked.emit();
  }
  onDeleteCLicked(){
    this.deleteCLicked.emit();

  }
  
}
