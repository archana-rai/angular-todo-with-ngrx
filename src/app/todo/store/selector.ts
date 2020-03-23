import { createSelector, createFeatureSelector } from '@ngrx/store';
import { todoAdapter, TodoState } from './state';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = todoAdapter.getSelectors();

const selectTodoState = createFeatureSelector<TodoState>('todo');

export const selectAllTodos = createSelector(
  selectTodoState,
  selectAll
);
