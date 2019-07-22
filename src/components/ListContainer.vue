<template>
  <div>
    <ol class="todoList">
      <li v-for="item in showTodoList" v-bind:key="item.number">
        <todo-list-item v-bind:listItem="item"
	></todo-list-item>
      </li>
    </ol>
  </div>
</template>
<script>
import TodoListItem from "./TodoListItem.vue";
export default {
  name: "ListContainer",
  components: {
    TodoListItem
  },
  props: {
    todoList: Array,
    showType: String
  },
  data() {
    return {
      showTodoList: this.todoList
    };
  }
};
</script>