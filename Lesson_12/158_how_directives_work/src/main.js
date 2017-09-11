import Vue from 'vue'
import App from './App.vue'

// Global directive
Vue.directive('highlight', {

});

/*
  A directive has five hooks:

  - bind(el, binding, vnode) -> once directive is attached
  - inserted(el, binding, vnode) -> inserted in parent node
  - update(el, binding, vnode, oldVnode) -> once component is updated without children
  - componentUpdated(el, binding, vnode, oldVnode) -> once component is updated with children
  - unbind(el, binding, vnode) -> once directive is removed
*/

new Vue({
  el: '#app',
  render: h => h(App)
})
