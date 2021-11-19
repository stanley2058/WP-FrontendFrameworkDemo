import { Component, OnInit } from '@angular/core';
import { TodoStoreService } from '../service/todo-store.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  newTodo: string = '';
  todoList: { content: string; checked: boolean; id: string }[] = [];

  constructor(private todoStore: TodoStoreService) {}

  ngOnInit(): void {
    this.todoList = this.todoStore.load();
  }

  addTodo(event: Event) {
    event.preventDefault();
    this.todoList = [
      {
        content: this.newTodo,
        checked: false,
        id: Date.now().toString(),
      },
      ...this.todoList,
    ];
    this.todoStore.save(this.todoList);
    this.newTodo = '';
  }

  deleteTodo(id: string) {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
    this.todoStore.save(this.todoList);
  }

  checkChanged(event: Event, id: string) {
    const { checked } = event.target as HTMLInputElement;
    const todo = this.todoList.find((todo) => todo.id === id);
    if (!todo) return;
    todo.checked = checked;
    this.todoStore.save(this.todoList);
  }
}
