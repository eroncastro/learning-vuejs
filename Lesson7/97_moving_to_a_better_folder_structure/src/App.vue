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
  // One possible setup that is greater for small to medium sized applications
  // is to store components in a components folder.
  // For biggers applications, it is preferable to structure folders by feature.
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
