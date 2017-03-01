<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="index in 5">
          Server #{{ index }}
        </li>
      </ul>
    </div>
    <div class="col-xs-12 col-sm-6">
      <p>Server Details are currently not updated</p>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<!--
  By default, every style we set on a specific component will be set globally.
  To make styles scope, we simply add scoped to the styles tag.
  Behind the scenes, this emulates a behavior known as the Shadow DOM.
 -->
<style scoped>
  div {
    border: 1px solid red;
  }
</style>
