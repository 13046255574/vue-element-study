import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import lcj from '../views/lcj.vue';
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/lcj',
        name: 'lcj',
        component: lcj
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
    },
    {
        path: '/config',
        name: 'config',
        component: () => import('../views/config.vue')
    }
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
export default router;
//# sourceMappingURL=index.js.map