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