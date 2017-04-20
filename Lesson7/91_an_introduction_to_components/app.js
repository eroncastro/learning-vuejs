/*
  By using a Vue instance, we are only able to select only one element at a time.
  If we want to use the same code in multiple places, we need a reusable piece of code.
  That is easy done by using Vue.component, which extends the Vue instance.
  We can think of a component as our own HTML that we are creating.
  For example, if we use

  Vue.component('my-cmp');

  It will allow us to use it like this

  <div id="app">
    <my-cmp></my-cmp>
  </div>

  IMPORTANT: We must make our component unique, in order not to cause conflict with
  already existent ones. A good way to do it is to add a prefix to it.

  The first argument of Vue.component is the element tag.
  The second is a data object, similar to what we have been using for the Vue instance.
  But, we must beware that our data now has to be a function that returns an Object.
  Otherwise, VueJS will raise an exception, due to the fact that data will conflict
  among other components.

  The follow example works as expected!
  First, we define our component and then we have the #app element controlled by VueJS.
*/

Vue.component('my-cmp', {
  data: function() {
    return {
      status: 'Critical'
    }
  },
  template: '<p>Server Status: {{ status }}</p>'
})


new Vue({
  el: '#app'
})