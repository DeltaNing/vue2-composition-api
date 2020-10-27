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
        <input v-model="allDoneRef" id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li class="todo" v-for="item in filterTodoRef" :key="item.id" :class="{completed: item.completed}">
            <div class="view">
              <input v-model="item.completed" class="toggle" type="checkbox" />
              <label>{{ item.title }}</label>
              <button class="destroy" @click="removeTodo(item)"></button>
            </div>
            <input class="edit" type="text" />
          </li>
        </ul>
      </section>
      <footer class="footer">
        <span class="todo-count">
          <strong>{{ remainingRef }}</strong>
          <span>items left</span>
        </span>
        <ul class="filters">
          <li><a :class="{selected: filterWordRef === 'all'}" @click="filterWordRef = 'all'">All</a></li>
          <li><a :class="{selected: filterWordRef === 'active'}" @click="filterWordRef = 'active'">Active</a></li>
          <li><a :class="{selected: filterWordRef === 'completed'}" @click="filterWordRef = 'completed'">Completed</a></li>
        </ul>
        <button class="clear-completed" v-show="completedRef" @click="removeCompleted">
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
import useFilter from "@/composition/useFilter";
import useRemoveTodo from "@/composition/useRemoveTodo";
import useEditTodo from "@/composition/useEditTodo";

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
      ...useFilter(todoListRef),
      ...useRemoveTodo(todoListRef),
      ...useEditTodo(todoListRef),
    };
  },
};
</script>
<style lang="css" scoped>
@import "../assets/css/todos.css";
</style>
