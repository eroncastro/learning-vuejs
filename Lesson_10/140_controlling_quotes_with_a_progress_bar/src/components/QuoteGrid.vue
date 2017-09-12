<template>
  <div class="row">
    <!--
      The native modifier tells VueJS to react to a click on a component
      if it happens on the native elements of the component.
    -->
    <app-quote
      v-for="(quote, index) in quotes"
      @click.native="deleteQuote">
      {{ quote }}
    </app-quote>
  </div>
</template>

<script>
  import Quote from './Quote.vue';

  export default {
    props: {
      quotes: {
        type: Array,
        required: false,
        default: () => []
      }
    },
    methods: {
      deleteQuote(index) {
        this.$emit('quoteDeleted', index);
      }
    },
    components: {
      appQuote: Quote
    }
  }
</script>

<style>

</style>
