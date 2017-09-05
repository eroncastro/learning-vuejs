<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <!--
          <app-quote :quote="A wonderful quote!"></app-quote>
        -->
        <!--
          We want to be able to do the following:
          <app-quote>
            <h2>The quote</h2>
            <p>A wonderful Quote</p>
          </app-quote>

          This is done using slots.
        -->
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue';

  export default {
    components: {
      appQuote: Quote
    }
  }
</script>

<style>
</style>
