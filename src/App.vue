<script setup>
import Header from "./components/Header.vue";
import Todos from "@/components/Todos.vue";
</script>

<template>
  <div>
    <div>
      <Header />
    </div>
    <div class="md:px-0 px-3 mx-auto">
      <Todos />
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");

body {
  font-family: "Josefin Sans", sans-serif;
}

.check {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
