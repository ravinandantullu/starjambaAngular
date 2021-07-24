import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  declarations: [TodoComponent, HeaderComponent],
  imports: [CommonModule, FormsModule, TodoRoutingModule],
  exports: [TodoComponent],
})
export class TodoModule {}
