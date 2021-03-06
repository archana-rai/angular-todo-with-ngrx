import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {TodoModule} from './todo/todo.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [ BrowserModule, FormsModule,TodoModule,MaterialModule,
   StoreModule.forRoot([])],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
