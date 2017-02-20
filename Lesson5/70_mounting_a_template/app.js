// We specify the element to be controlled by Vue with the 'el' attribute
var data = {
  title: 'The VueJS Instance',
  showParagraph: false
};

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

// $mount allow us to specify the element we want to control
// outside of the Vue instantiation.
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

// Until now we previously defined our HTML code
// to only then attach our Vue instance to control it.
// But it is also possible to create an instance with its own HTML template.
var vm3 = new Vue({
  template: '<h1>Hello!</h1>'
});

// The following behave the same way
// vm3.$mount('#app3');

// vm3.$mount();
// document.getElementById('app3').appendChild(vm3.$el);

vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el);