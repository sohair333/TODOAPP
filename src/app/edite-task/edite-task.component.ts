import { Component, Inject, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from
'@angular/material/dialog';
import { Todo } from '../shared/todo.model';
@Component({
  selector: 'app-edite-task',
  templateUrl: './edite-task.component.html',
  styleUrls: ['./edite-task.component.css']
})
export class EditeTaskComponent implements OnInit {


  constructor(public dialogRef:MatDialogRef<EditeTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public todo:Todo) { }

  ngOnInit(): void {
  }
  onFormSubmit(form:NgForm){
    // this.todo.text =form.value.text;
    if(form.invalid){
      return;
    }
    const updatedTask = {
      ...this.todo,
      ...form.value
    }
    this.dialogRef.close(updatedTask);
  }
  close(){
    this.dialogRef.close();
  }
 

}
