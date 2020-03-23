import { Component,Input } from '@angular/core';
import { Todo, TodoState,updateItem,deleteItem,selectAllTodos } from '../../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'todo-row',
  templateUrl: './todo-row.html',
  styleUrls: [ './todo-row.css' ]
})
export class TodoRowComponent  {
 @Input() todoList: Todo[];

 constructor(private store: Store<TodoState>){}

 updateTodo(todo:Todo){
   this.store.dispatch(updateItem({todo}));
 }

 deleteTodo(id:number){
   this.store.dispatch(deleteItem({id}))
 }
}
