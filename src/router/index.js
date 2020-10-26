import Vue from 'vue'
import VueRouter from "vue-router";
import Home from '../pages/Home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'index',
        component: Home
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/todos',
        name: 'todos',
        component: () => import('../pages/Todos')
    }
]

export default new VueRouter({
    routes
})
