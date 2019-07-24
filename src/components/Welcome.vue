<template>
     <div id="app">
        <h2>Welcome页面</h2>
        <input type="text" v-model="value">
        <button @click="jump">开始使用</button>   
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
        jump(){
            this.$router.push({path: `/home/${this.value}`});
            // this.$router.push({ name:'home', params: { username:this.value}});
        }
    }
}
</script>