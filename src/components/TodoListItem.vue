<template>
  <div>
    <input type="checkbox">
    <span>{{changeField}}</span>
  </div>
</template>
<script>
export default {
  name: "TodoListItem",
  props: {
    listItem: Object
  },
  data: function() {
    return {
      checked: this.listItem.checked,
      changeField: this.listItem.taskName
    };
  }
};
</script>