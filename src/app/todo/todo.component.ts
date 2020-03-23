import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoState,Todo,selectAllTodos } from './store';

@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: [ './todo.component.css' ]
})
export class TodoComponent  {
   constructor(private store: Store<TodoState>){}

   todos$: Observable<Todo[]> = this.store.select(selectAllTodos);
}
