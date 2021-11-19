import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoStoreService {
  constructor() {}

  save(todoList: { content: string; checked: boolean; id: string }[]) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  load(): { content: string; checked: boolean; id: string }[] {
    return JSON.parse(localStorage.getItem('todoList') || '[]');
  }
}
