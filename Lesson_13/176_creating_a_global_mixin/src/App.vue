<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters &amp; Mixins</h1>
        <p>{{ text | toUpperCase | to-lowercase }}</p>
        <hr>
        <input v-model="filterText">
        <ul>
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
  import List from './List.vue';
  import { fruitMixin } from './fruitMixin';

  /*
    VueJS merges mixins into existing Vue instances
    without breaking methods and properties that already
    exist in the component. So, in a conflict, first the mixin
    code gets executed and then the component code.
  */

  export default {
    mixins: [fruitMixin],
    data: function () {
      return {
        text: 'Hello there!',
      }
    },
    filters: {
      toUpperCase(value) {
        return value.toUpperCase();
      }
    },
    components: {
      appList: List
    }
  }
</script>

<style>

</style>

