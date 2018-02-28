import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input class="todo-input" [value]="title"
            (keyup.enter)="changeTitle(inputElement.value)"
            #inputElement>
    <button class="btn btn-red" (click)="changeTitle(inputElement.value)">Save</button>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  title: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  // changeTitle(event: KeyboardEvent): void {
  //   let target = <HTMLInputElement> event.target;
  //   this.title = target.value;
  // }

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }


}
