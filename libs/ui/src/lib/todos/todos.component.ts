import { Component, Input, OnInit } from '@angular/core';
import {Todo} from '@nx-dev-tutorial/data';

@Component({
  selector: 'nx-dev-tutorial-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  @Input()
  todos: Todo[] = [];
}
