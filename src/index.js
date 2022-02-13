import Vue from 'vue';
import { router } from './router';
import App from './App';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

const app = new Vue({
    el: "#app",
    router,
    store,
    render: (h) => h(App),
})
