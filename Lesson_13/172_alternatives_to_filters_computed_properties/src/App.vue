<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters &amp; Mixins</h1>
        <!-- Chaining filters -->
        <p>{{ text | toUpperCase | to-lowercase }}</p>
        <hr>
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  /*
    A filter is a a feature you use in your template to transform an output on it.
    It does not transform the data itself; rather, it transforms what the user sees.
  */

  export default {
    data: function () {
      return {
        text: 'Hello there!',
        fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
        filterText: ''
      }
    },
    filters: {
      // local filter
      toUpperCase(value) {
        return value.toUpperCase();
      }
    },
    computed: {
      filteredFruits() {
        return this.fruits.filter((fruit) => fruit.match(this.filterText));
      }
    }
  }
</script>

<style>

</style>

