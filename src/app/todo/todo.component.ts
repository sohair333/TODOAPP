import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditeTaskComponent } from '../edite-task/edite-task.component';
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
  constructor(private dataService: DataService,private dialog:MatDialog) {}

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
  ontodoClicked(todo:Todo){
    todo.completed = !todo.completed;  
  }
  onEdidteClicked(todo:Todo){
    const indx = this.todoArrayOfData.indexOf(todo);

    let dialogRef = this.dialog.open(EditeTaskComponent, {
     
      width: '600px',
      data:todo
    });
    dialogRef.afterClosed().subscribe(res =>{
      if(res){
        this.dataService.updatTodo(indx,res);
      }
    });
    // this.dataService.updatTodo();
  }
  onDeleteClicked(todo:Todo){
    const indx = this.todoArrayOfData.indexOf(todo);
    this.dataService.deletedTodo(indx);
  }
}
