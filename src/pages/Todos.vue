<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          autofocus=""
          autocomplete="off"
          placeholder="What needs to be done?"
          v-model="newTodoRef"
          @keypress.enter="addTodo"
        />
      </header>
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li class="todo" v-for="item in todoListRef" :key="item.id">
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>{{ item.title }}</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" type="text" />
          </li>
          <li class="todo">
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>投递50封简历</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" type="text" />
          </li>
          <li class="todo">
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label>上午10:30 参加面试</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" type="text" />
          </li>
        </ul>
      </section>
      <footer class="footer">
        <span class="todo-count">
          <strong>3</strong>
          <span>items left</span>
        </span>
        <ul class="filters">
          <li><a href="#/all" class="selected">All</a></li>
          <li><a href="#/active" class="">Active</a></li>
          <li><a href="#/completed" class="">Completed</a></li>
        </ul>
        <button class="clear-completed" style="display: none">
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import { ref, watchEffect } from '@vue/composition-api'
import * as todoStorage from '../utils/storeTodos'
import newTodo from "@/composition/useNewTodo";

export default {
  setup() {
    // 获取列表
    const todoListRef = ref(todoStorage.fetch())

    watchEffect(() => {
      todoStorage.save(todoListRef.value)
    }, {
      flush: 'post'
    })

    return {
      ...newTodo(todoListRef),
      todoListRef
    };
  },
};
</script>
<style lang="css" scoped>
@import "../assets/css/todos.css";
</style>
