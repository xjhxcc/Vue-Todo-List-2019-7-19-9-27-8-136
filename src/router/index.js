import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from "../components/Welcome.vue"
import Home from "../components/Home.vue"
import TodoList from "../TodoList.vue"
import My from "../components/My.vue"
Vue.use(VueRouter)
const router=new VueRouter({
    routes:[
        {
            path:'/',
            component:Welcome
        },
        {
            path:'/home/:username',
            name:'home',
            component:Home,
            children:[
                {
                    path:'todolist',
                    name:'todolist',
                    component:TodoList
                },
                {
                    path:'my',
                    name:'my',
                    component:My
                }
            ]
        }
    ]
})
export default router
