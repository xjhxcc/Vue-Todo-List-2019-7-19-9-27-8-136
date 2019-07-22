<template>
  <div>
    <div>
      <span>
        <input type="text" class="inputText" v-model="inputTaskName" v-on:keyup.enter="addItem" />
      </span>
      <div class="addButton" v-on:click="addItem">Add</div>
    </div>
    <br />
  </div>
</template>
<script>
export default {
  name: "InpurBar",
  data() {
    return {
      inputTaskName: ""
    };
  },
  methods: {
    addItem: function() {
        this.$emit('get-input-task-name', this.inputTaskName);
        this.inputTaskName = "";
    }
  }
};
</script>