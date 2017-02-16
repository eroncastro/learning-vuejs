var vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
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

vm1.newProp = 'New!';

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

// $el: refers to our template, to the HTML code of our instance.
console.log(vm1.$el);

// $data: object that holds our data properties. It is another way
// of accessing the data from the outside.
// The following are the same: vm1.title and vm1.$data.title
console.log(vm1.title === vm1.$data.title);
