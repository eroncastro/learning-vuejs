<template>
  <div>
    <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
  export default {
    methods: {
      increment(by) {
        this.$store.dispatch('increment');
      },
      decrement() {
        this.$store.dispatch('decrement');
      }
    }
  }
</script>
