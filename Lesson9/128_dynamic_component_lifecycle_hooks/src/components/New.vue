<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">Increase!</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0
      };
    },
    destroyed() {
      // No longer works for our dynamic component.
      console.log('Destroyed');
    },
    deactivated() {
      console.log('Deactivated!');
    },
    activated() {
      console.log('Activated!');
    }
  }
</script>

<style scoped>
</style>
