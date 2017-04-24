<template>
  <div>
    <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <button class="btn btn-primary" @click="decrement(50)">Decrement</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    methods: {
      /*
        increment(by) {
          this.$store.dispatch('increment', by);
        },
        decrement() {
          this.$store.dispatch('decrement');
        }
      */
      ...mapActions([
        'increment',
        'decrement'
      ])
    }
  }
</script>
