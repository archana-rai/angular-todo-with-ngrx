import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoState,addItem, Todo } from '../../store';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.html',
  styleUrls: [ './todo-input.css' ]
})
export class TodoInputComponent  {
  todoItem:string = '';
  itemCount = 0;

constructor(private store: Store<TodoState>){}

  addItem(){
    console.log(this.todoItem);
    this.itemCount++;
    let todo: Todo = {id: this.itemCount, title:this.todoItem, completed:false};
    this.store.dispatch(addItem({todo}));
    this.todoItem ='';
  }
}
