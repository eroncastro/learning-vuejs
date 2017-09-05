<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <servers></servers>
      <server-details></server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/Shared/Header.vue';
  import Footer from './components/Shared/Footer.vue';
  import Servers from './components/Server/Servers.vue';
  import ServerDetails from './components/Server/ServerDetails.vue';

  export default {
    data() {
      return {
        selectedServer: null
      };
    },
    components: {
      appHeader: Header,
      Servers,
      ServerDetails,
      'app-footer': Footer
    }
  }
</script>

<style>

</style>
