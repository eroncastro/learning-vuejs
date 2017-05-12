import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

// Adds VueRouter plugin to the Vue instance.
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history', // the default is hash
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { selector: to.hash };

    return { x: 0, y: 700 };
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
