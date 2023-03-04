import { defineStore } from "pinia";

export const store = defineStore("defineStore", {
  state: () => ({
    todos: [
      {
        id: 1,
        title: "First todo",
        isCompleted: true,
      },
    ],
  }),
  actions: {
    addTodo(id, title, isCompleted) {
      if (title === "") {
        return;
      } else {
        this.todos.push({
          id: id,
          title: title,
          isCompleted: isCompleted,
        });
      }
    },
  },
});
