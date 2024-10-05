import { makeObservable, observable, action } from "mobx"
class TodoStore {
  tasks = [];

  constructor() {
    makeObservable(this, {
      tasks: observable,
      deleteLastTask: action,
      addTask: action
    })
  }

  deleteLastTask() {
    this.tasks.pop();
  }

  addTask(task) {
    this.tasks.push(task);
  }
}

const todoStore = new TodoStore();

export default todoStore;
                        