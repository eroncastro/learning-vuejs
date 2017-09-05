<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <hr>
    <div>
      <!-- VueJS will treat the unnamed slot as the default slot. -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 3px;
    margin: 30px auto;
    text-align: center;
  }

  /* This will style the child passed inside the slot tag. */

  h2 {
    color: red;
  }

  .title {
    font-style: italic;
  }
</style>
