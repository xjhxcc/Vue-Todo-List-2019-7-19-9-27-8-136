<template>
    <div>
        <input id="inputText" v-model="value" @keypress.enter="addByKeypress"/>
        <button id="addButton" @click="handleClickAdd">Add</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value:''
        }
    },
    methods:{
        handleClickAdd(){
            let item = {
                value: this.value,
                editable: false,
                finished: false
            }
            this.$store.commit('addAllitems', item);
            this.value=''
        },
        addByKeypress(){
            this.handleClickAdd()
        }
    }
}
</script>

<style>
#inputText{
  width: 400px;
  height: 30px;
}
#addButton{
    height: 40px;
    display: inline-flex;
    background-color: #fc999b;
    color: #ffffff;
    border-radius: 5px;
    text-align: center;
    margin-top: 2px;
    padding: 5px 15px;
}
</style>