import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoArrayOfData!: Todo[];
  showValidationErrors!: boolean;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.todoArrayOfData = this.dataService.getALlTodo();
  }
  onformSubmit(form: NgForm) {

    if (form.invalid) 
      return this.showValidationErrors = true;
    
    this.dataService.addTodo(new Todo(form.value.text));
    this.showValidationErrors = false;
    form.reset();
    return 1;
  }
}
