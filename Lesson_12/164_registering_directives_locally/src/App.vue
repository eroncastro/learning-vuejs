<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <!--
          Directives in VueJS have the form v-<directiveName>
          Important: When using v-html, it is importang to sanitize your string
          not to get XSS attack.
        -->
        <h1>Build-in Directives</h1>
        <p v-text="'Some Text'"></p>
        <p v-html="'<strong>Some strong text</strong>'"></p>
      </div>
      <hr>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <!--
          binding is the information about the directive that goes between the
          quotation marks after the directive.

          To pass an argument to a directive, we use colon, like v-bind:attr.
          To apply a modifier, we use the dot notation after the argument.
          Important: modifiers can be chained together.
        -->
        <p v-highlight:background.delayed="'red'">Color this</p>
        <p v-local-highlight:background.delayed="'red'">Color this, too</p>
      </div>
    </div>
  </div>
</template>

<script>
  // Local directives are registered like local components.
  export default {
    directives: {
      'local-highlight': {
        bind(el, binding, vnode) {
          // el.style.backgroundColor = 'green';
          // el.style.backgroundColor = binding.value;
          let delay = 0;

          if (binding.modifiers['delayed']) {
            delay = 3000;
          }

          setTimeout(() => {
            if (binding.arg === 'background') {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      }
    }
  }
</script>

<style>

</style>
