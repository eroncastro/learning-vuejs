<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
          <!--
            Slots help us distribute content in other components.
            It is specially useful whenever we want to build reusable
            widgets, like a slide show, where we have the frame for each
            slide and we want to switch between them.
          -->
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p>A wonderful quote</p>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue';

  export default {
    data() {
      return {
        quoteTitle: 'The Quote'
      };
    },
    components: {
      appQuote: Quote
    }
  }
</script>

<style>
</style>
