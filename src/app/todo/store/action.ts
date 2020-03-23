import { createAction, props } from '@ngrx/store';
import { Todo } from './state';


export const addItem =createAction(
  '[Todo] Add Item',
  props<{todo: Todo}>()
);

export const updateItem = createAction(
  '[Todo] Update Todo',
  props<{todo: Todo}>()
);

export const deleteItem = createAction(
  '[Todo] Delete Todo',
  props<{id: number}>()
);
