var data = {
  title: 'The VueJS Instance',
  showParagraph: false
};

// To create a reusable component we can use Vue.component
// This allow us to create a new component which we can then
// reuse in all the other Vue instances and their templates.
Vue.component('hello', {
  template: '<h1>Hello!</h1>'
});

var vm1 = new Vue({
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'Test';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app1');

vm1.$refs.heading.innerText = 'Something else';

setTimeout(function() {
  vm1.title = 'Changed by Timer!';
  vm1.show();
}, 3000)

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The Second Instance'
  },
  methods: {
    onChange: function() {
      vm1.title = 'Changed!';
    }
  }
});

// What if we wanted to build a component to insert this template in multiple places?
var vm3 = new Vue({
  template: '<h1>Hello!</h1>'
});

vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el);

