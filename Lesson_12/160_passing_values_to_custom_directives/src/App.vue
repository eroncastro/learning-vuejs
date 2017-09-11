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
        -->
        <p v-highlight="'red'">Color this</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
    }
</script>

<style>

</style>
