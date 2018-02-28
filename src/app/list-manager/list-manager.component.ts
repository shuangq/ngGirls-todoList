import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  template: `
  <div class="todo-app">
  <h1>Todo List</h1>
  <div class="todo-add">
  <todo-input (submit)="addItem($event)"></todo-input>
  </div>
  <ul>
    <li *ngFor="let item of todoList">
      <todo-item [todoItem]="item" (remove)="removeItem($event)"></todo-item>
    </li>
  </ul>
  </div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  title = 'todo';
  todoList = null;

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {
    this.todoList = this.todoListService.addItem({ title: title });
  }

  removeItem(item) {
    this.todoList = this.todoListService.removeItem(item);
  }
}
