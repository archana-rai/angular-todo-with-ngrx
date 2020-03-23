import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { TodoComponent } from './todo.component';
import {TodoInputComponent} from './components/todo-input/todo-input.component';
import {TodoRowComponent} from './components/todo-row/todo-row.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './store';
import { MaterialModule } from '../material';

@NgModule({
  imports:[
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    StoreModule.forFeature('todo',todoReducer)
  ],
  exports: [TodoComponent],
  declarations: [ TodoComponent,TodoInputComponent,TodoRowComponent],
})
export class TodoModule { }
