import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'fold laundry',
      completed: false,
    },
    {
      task: 'eat dinner',
      completed: true,
    },
    {
      task: 'get groceries',
      completed: true,
    },
  ];
  constructor() {}

  addTask(form: NgForm) {
    let newTask: Todo = {
      task: form.value.addTodo,
      completed: false,
    };
    this.todos.push(newTask);
  }

  removeTask(index: number) {
    this.todos.splice(index, 1);
  }

  completeTask(index: number) {
    this.todos[index].completed = true;
  }

  setSearchTerm(form: NgForm) {
    this.searchTerm = form.value.searchTerm.toLowerCase().trim();
  }

  filter() {
    if (!this.searchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((item) => {
        let currentTask = item.task.toLowerCase().trim();
        return currentTask.includes(this.searchTerm);
      });
    }
  }

  ngOnInit(): void {}
}
