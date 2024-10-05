import { reaction } from "mobx";
import { addDisposer, types } from "mobx-state-tree"

const TodoStore = types.model({
  tasks: types.optional(types.array(types.string), []),
})
.actions((self) => ({
  deleteLastTask() {
    self.tasks.pop();
  },

  addTask(task) {
    self.tasks.push(task);
  },

  afterCreate() {
    const autoSaveDisposer = reaction(
      () => self.tasks.length,
      () => {if (self.tasks.length  === 0) alert('Add task please')}
    )

    addDisposer(self, autoSaveDisposer)
  }
}))

const todoStore = TodoStore.create({});

export default todoStore;

                        