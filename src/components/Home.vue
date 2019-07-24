<template>
  <div>
    <div class="top" >
            <button @click="returnWelcome">返回</button>
            <span>Name : {{this.value}}</span>
       </div>
        <div class="bottom">
            <div class="left" style="float:left">
                <router-link :to="{name:'todolist'}">showTodoList</router-link>
                <br>
                <router-link :to="{name:'my'}">showMyInfo</router-link>
            </div>

            <div class="right" style="float:right">
                <router-view></router-view> 
            </div>
        </div>
  </div>
</template>

<script>
import home from "./Home.vue"
import TodoList from "../TodoList.vue"
import My from "./My.vue"
export default {
   data(){
        return{
             msg:'确定要返回欢迎界面吗？'
        }
    },
    components:{
        TodoList,
        My
    },
  methods:{
   returnWelcome(){
      if(confirm(this.msg)==true){
          this.$router.push({ path:'home'});
        }else{
          return false;
        }
      }
  }
}
</script>
