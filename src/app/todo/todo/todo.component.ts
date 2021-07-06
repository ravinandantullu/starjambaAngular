import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass'],
})
export class TodoComponent implements OnInit {
  toDoList: ToDoList[] = [
    {
      id: '1',
      value: 'todo 1',
      editButtonHide: true,
    },
    {
      id: '2',
      value: 'todo 2',
      editButtonHide: true,
    },
    {
      id: '3',
      value: 'todo 3',
      editButtonHide: true,
    },
    {
      id: '4',
      value: 'todo 4',
      editButtonHide: true,
    },
    {
      id: '5',
      value: 'todo 5',
      editButtonHide: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addToDo(value: string) {
    this.toDoList.push({
      id: this.uid(),
      value: value,
      editButtonHide: true,
    });
  }

  deleteToDo(value: ToDoList) {
    this.toDoList = this.toDoList.filter((i) => i.id !== value.id);
  }

  editToDo(value: ToDoList) {
    const index = this.toDoList.findIndex((i) => i.id == value.id);
    this.toDoList[index].editButtonHide = false;
  }

  doneEdit(value: ToDoList, editText: string) {
    const index = this.toDoList.findIndex((i) => i.id == value.id);
    this.toDoList[index].editButtonHide = true;
    this.toDoList[index].value = editText;
  }

  uid(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}

export interface ToDoList {
  id: string;
  value: string;
  editButtonHide: boolean;
}
