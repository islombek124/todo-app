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
});
