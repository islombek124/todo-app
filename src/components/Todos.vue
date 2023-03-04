<script setup>
import { ref } from "vue";
import { store } from "@/stores/store";
import { looseIndexOf } from "@vue/shared";

const defineStore = store();

const filter = ref("all");

const fc = ref(defineStore.todos);

const filterByAll = () => {
  filter.value = "all";
  fc.value = defineStore.todos;
};

const filterByActive = () => {
  filter.value = "active";
  fc.value = defineStore.todos.filter((c) => !c.isCompleted);
};

const filterByComplete = () => {
  filter.value = "completed";
  fc.value = defineStore.todos.filter((c) => c.isCompleted);
};

const removeItem = (id) => {
  defineStore.todos.splice(
    defineStore.todos.findIndex((t) => t.id === id),
    1
  );
};
</script>

<template>
  <div
    class="max-w-[540px] w-full mx-auto -translate-y-10 rounded-xl overflow-hidden"
  >
    <ul>
      <li
        v-for="(todo, id) in fc"
        :key="todo.id"
        class="flex items-center justify-between p-4 bg-div gap-5 text-todo tracking-wide text-base"
        :class="todo.isCompleted ? 'line-through text-[#4D5067]' : ''"
      >
        <div class="flex items-center gap-5">
          <div
            class="check rounded-full z-50 border border-border overflow-hidden"
          >
            <input
              type="checkbox"
              class="w-full h-full outline-none border-none"
              @click="todo.isCompleted = !todo.isCompleted"
              :checked="todo.isCompleted"
            />
          </div>
          {{ todo.title }}
        </div>
        <span class="cursor-pointer" @click="removeItem(id)"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-x"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path></svg
        ></span>
      </li>
    </ul>
    <div
      v-if="defineStore.todos.length !== 0"
      class="flex items-center flex-wrap w-full gap-4 justify-between bg-div p-4"
    >
      <span
        >{{ defineStore.todos.filter((c) => !c.isCompleted).length }} items
        left</span
      >
      <ul
        class="flex items-center gap-8 sm:order-none order-1 mx-auto border border-slate-700 p-3 rounded-lg"
      >
        <li
          class="font-bold"
          :class="{ active: filter === 'all' }"
          @click="filterByAll"
        >
          All
        </li>
        <li
          class="font-bold"
          :class="{ active: filter === 'active' }"
          @click="filterByActive"
        >
          Active
        </li>
        <li
          class="font-bold"
          :class="{ active: filter === 'completed' }"
          @click="filterByComplete"
        >
          Completed
        </li>
      </ul>
      <button
        class="hover:text-[#E3E4F1]"
        @click="fc = defineStore.todos.filter((c) => !c.isCompleted)"
      >
        Clear Completed
      </button>
    </div>
  </div>
</template>

<style scoped>
ul:first-child li {
  border-bottom: 1px solid #393a4b;
}

ul:nth-child(2) li {
  cursor: pointer;
}

ul:nth-child(2) li.active {
  color: #3a7cfd;
}

ul:nth-child(2) li.active:hover {
  color: #3a7cfd;
}

ul:nth-child(2) li:hover {
  color: #e3e4f1;
}
</style>
