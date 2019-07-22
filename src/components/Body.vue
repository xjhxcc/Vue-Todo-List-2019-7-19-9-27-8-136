<template>
  <div>
    <InputBar @get-input-task-name="getInputTaskName"></InputBar>
    <ListContainer :todoList="todolist" :showType="showType"></ListContainer>
  </div>
</template>
<script>
let id = 0;
const getId = () => {
  return id++;
}
import InputBar from "./InputBar.vue";
import ListContainer from "./ListContainer.vue";
export default {
  name: "Body",
  components: {
    InputBar,
    ListContainer
  },
  props: {
    showType: String
  },
  data() {
    return {
      todolist: [],
    };
  },
  methods: {
    getInputTaskName: function(inputTaskName) {
      let taskItem = {
        taskName: inputTaskName,
        number: getId(),
        checked: false
      };
      this.todolist.push(taskItem);
    }
  }
};
</script>