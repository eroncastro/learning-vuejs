<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <app-servers></app-servers>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
  /*
    It is possible to name components using both hyphenated or camel-case.
    When using camel-case, VueJS will automatically generate the hyphenated version.
    ES6 also brings the possilibity of declaring both Key and Value by only specifying
    a object once, like: components: { Servers }
  */
  import Header from './components/Shared/Header.vue';
  import Servers from './components/Server/Servers.vue';
  import Footer from './components/Shared/Footer.vue';

  export default {
    components: {
      'app-header': Header,
      'app-servers': Servers,
      'app-footer': Footer
    }
  }
</script>

<style>

</style>
