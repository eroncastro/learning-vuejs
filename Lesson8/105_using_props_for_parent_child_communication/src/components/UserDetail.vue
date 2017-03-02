<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ name }}</p>
  </div>
</template>

<script>
  /*
    For transferring data from the parent to the child we use 'props',
    which are properties set from outside, from the parent.

    props is an array of strings. Each string is a property that should
    be set from outside. In order to pass it, we set it as a key value pair
    where the component is being used.
  */
  export default {
    props: ['name']
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
