<script setup>
import { ref, watch } from "vue";
import { store } from "@/stores/store";

const defineStore = store();

const term = ref(""),
  isComplete = ref(false);

const addTodo = () => {
  defineStore.todos.push({
    id: Date.now(),
    title: term.value,
    isCompleted: isComplete.value,
  });

  term.value = "";
  isComplete.value = false;
};
</script>

<template>
  <header class="w-full bg-cover bg-no-repeat flex justify-center py-16">
    <div class="max-w-[540px] w-full grid gap-10 md:px-0 px-3">
      <div class="flex items-center justify-between">
        <h1
          class="uppercase tracking-widest font-bold text-white text-4xl text-left"
        >
          TODO
        </h1>
      </div>

      <div>
        <form
          @submit.prevent="addTodo"
          class="relative flex items-center rounded w-full p-7 bg-div"
        >
          <div
            class="check rounded-full absolute left-3 z-50 border border-border overflow-hidden"
          >
            <input
              type="checkbox"
              class="w-full h-full outline-none border-none"
              v-model="isComplete"
            />
          </div>
          <div class="absolute w-full left-0">
            <input
              type="text"
              placeholder="Create a new todo…"
              class="w-full bg-transparent pl-14 outline-none"
              v-model.trim="term"
            />
          </div>
        </form>
      </div>
    </div>
  </header>
</template>

<style>
header {
  background-image: url("../assets/bg_dark.jpg");
}
</style>
