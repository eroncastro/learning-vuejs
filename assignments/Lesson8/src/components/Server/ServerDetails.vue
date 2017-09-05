<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Please, select a server.</p>
    <p v-else>Server #{{ server.id }} selected, Status: {{ server.status }}</p>
    <hr>
    <button @click="resetStatus(server)">Change to Normal</button>
  </div>
</template>

<script>
  import { serverBus } from '../../main.js';

  export default {
    data() {
      return {
        server: null
      }
    },
    created() {
      serverBus.$on('selectServer', (server) => {
        this.server = server;
      });
    },
    methods: {
      resetStatus() {
        this.server.status = 'Normal';
      }
    }
  }
</script>

<style>

</style>
