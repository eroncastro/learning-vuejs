<template>
  <div>
    <h1>Filters &amp; Mixins</h1>
    <input v-model="filterText">
    <ul>
      <li v-for="fruit in filteredFruits">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
        filterText: ''
      }
    },
    computed: {
      filteredFruits() {
        return this.fruits.filter(fruit => fruit.match(this.filterText));
      }
    }
  }
</script>

<style>

</style>

