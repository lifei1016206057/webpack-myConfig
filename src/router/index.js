import Vue from 'vue';
import VueRouter from 'vue-router';
import home from '../view/home';
// import about from '../view/about';
// import tsCode from '../view/tsCode';


Vue.use(VueRouter);

export const routes = [
    {
        path: '/home',
        name: "home",
        component: home,
        text: '主页',
    },
    // {
    //     path: '/about',
    //     name: "about",
    //     component: about,
    //     text: '关于',
    // },
    // {
    //     path: '/tsCode',
    //     name: "tsCode",
    //     component: tsCode,
    //     text: '测试ts',
    // },
]


export const router = new VueRouter({
    mode: 'history',
    routes,
})
