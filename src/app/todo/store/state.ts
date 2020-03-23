import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState extends EntityState<Todo> {}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: TodoState = todoAdapter.getInitialState();
