import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';


const approutes: Routes = [
  {path:'',component:TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(approutes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
