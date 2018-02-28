import { Injectable } from '@angular/core';

const storageName = 'aah_todo_list';
const defaultList = [
  { title: 'install NodeJS' },
  { title: 'install Angular CLI' },
  { title: 'create new app' },
  { title: 'serve app' },
  { title: 'develop app' },
  { title: 'deploy app' },
];

@Injectable()
export class TodoListStorageService {
  private todoList;

  constructor() {
    this.todoList = JSON.parse(localStorage.getItem(storageName)) || defaultList;
  }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));
    return this.get();
  }

  private findItemIndex(item){
    return this.todoList.indexOf(item);
  }

  // get an item
  get() {
    return [...this.todoList];  // @QUESTION: what's the difference between this and return this.todoList?
  }

  // add a new item
  post(item) {
    this.todoList.push(item);
    return this.update();
  }

  // update an item
  put(item, changes) {
    let idx = this.findItemIndex(item);
    Object.assign(this.todoList[idx], changes);

    return this.update();
  }

  // delete an item
  destroy(item) {
    let idx = this.findItemIndex(item);
    this.todoList.splice(idx, 1);
    return this.update();
  }
}
