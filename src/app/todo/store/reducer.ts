import { createReducer, on, Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import {addItem,updateItem,deleteItem} from './action';
import { initialState, todoAdapter, TodoState, Todo } from './state';

const reducer = createReducer(
  initialState,
  on(addItem, (state, { todo }) => {
    return todoAdapter.addOne(todo, state);
  }),
  on(updateItem, (state, { todo }) => {
    const todoUpdate: Update<Todo> = {
      id: todo.id,
      changes: { completed: !todo.completed }
    };
    return todoAdapter.updateOne(todoUpdate, state);
  }),
  on(deleteItem, (state, { id }) => {
    return todoAdapter.removeOne(id, state);
  }),
);

export function todoReducer(state: TodoState, action: Action) {
  return reducer(state, action);
}
