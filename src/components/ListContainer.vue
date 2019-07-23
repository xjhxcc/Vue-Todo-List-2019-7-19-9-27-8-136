<template>
    <div id="list_container">
         <ol>
            <li v-for="(item,index) in list" :key="index"
                class="active"
                v-bind:class="{unactive: item.finished}">
                <input v-model="item.finished" type="checkbox" @click="active(item.finished)"/>
                <span v-if="!item.editable" @dblclick="edit(item)">{{item.value}}</span>
                <input autofocus  type="text" v-else v-model="item.value" @keypress.enter="updateItem(item)" @blur="updateItem(item)"/>
            </li>
        </ol> 
    </div>
</template>

<script>
export default {
    data(){
        return{
            list: []
        }
    },
    methods:{
        active:function(val){
            if(val == true){
                val = false
            }else{
                val = true
            }
        },
        edit(item) {
            item.editable = !item.editable;
        },
        updateItem(item) {
        item.editable = false;
      }
    },
    mounted() {
        this.list = this.$store.state.allItems;
    },
    computed: {
        activeButton () {
            return this.$store.state.activeButton;
        }
    },
    watch: {
        activeButton: function (newValue) {
            if (newValue === 'ALL'){
                this.list = this.$store.state.allItems;
            }else if (newValue === 'ACTIVE'){
                this.list = this.$store.getters.activeItems;
            }else{
                this.list = this.$store.getters.completeItems;
            }
        }
    }
}
</script>