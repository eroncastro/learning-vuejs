new Vue({
  el: '#exercise',
  data: {
    highlight: true,
    userColor: 'red',
    newUserClass: '',
    fourHundredWidth: false,
    myColor: 'black',
    myWidth: 100,
    myHeight: 100,
    progressBarWidth: 0
  },
  computed: {
    myStyle: function() {
      return {
        backgroundColor: this.myColor,
        width: this.myWidth + 'px',
        height: this.myHeight + 'px'
      };
    },
    progressBar: function() {
      return {
        height: '20px',
        backgroundColor: 'green',
        width: this.progressBarWidth >= 1000 ? '1000px' : (this.progressBarWidth + 'px')
      }
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.highlight = !vm.highlight;
      }, 2000);
    },
    startProgress: function() {
      var vm = this;
      setInterval(function() {
        vm.progressBarWidth += 50;
      }, 2000)
    }
  }
});
