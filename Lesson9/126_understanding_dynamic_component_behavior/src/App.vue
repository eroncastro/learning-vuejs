<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr>
        <p>{{ selectedComponent }}</p>

        <!--
          Dynamic component: we select a component dynamically and pass it
          to the component tag by binding a variable to the "is" attribute.

          By default, whenever we switch between components, they will get
          destroyed.
        -->
        <component :is="selectedComponent">
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p>A wonderful quote</p>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
  import Author from './components/Author.vue';
  import New from './components/New.vue';
  import Quote from './components/Quote.vue';

  export default {
    data() {
      return {
        quoteTitle: 'The Quote',
        selectedComponent: 'appQuote'
      };
    },
    components: {
      appQuote: Quote,
      appAuthor: Author,
      appNew: New
    }
  }
</script>

<style>
</style>
