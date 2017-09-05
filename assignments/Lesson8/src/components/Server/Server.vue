<template>
  <li
    class="list-group-item"
    style="cursor: pointer"
    @click="selectServer">
    Server #{{ server.id }}
  </li>
</template>

<script>
  import { serverBus } from '../../main.js';

  export default {
    props: {
      server: {
        type: Object,
        required: true
      }
    },
    methods: {
      selectServer() {
        serverBus.$emit('selectServer', this.server);
      }
    },
    created() {
      serverBus.$on('resetStatus', (server) => {
        if (this.server.id === server.id) {
          this.server.status = 'Normal';
        }
      });
    }
  }
</script>

<style>

</style>
