<template>
    <div>
        <ol>
            <li v-for="(item,index) in list" :key="index"
                class="active"
                v-bind:class="{unactive: item.finished}">
                <span>{{index+1+'.'}}</span>
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

<style scoped>
ol {
    width: 362px;
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-left: 20px;
    padding-inline-start: 40px;
    list-style-type: decimal;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
ol li {
    padding: 5px;
    color: #000;
    
}
ol li:nth-child(even) {
    background: #f4ecec;
    
}
ol li span {
    word-break: break-all;
    width: 70%;
}
.active{
    
    font-size: 15px
}
.unactive{
    font-size: 15px;
    color: #999;
    text-decoration: line-through;
}
</style>