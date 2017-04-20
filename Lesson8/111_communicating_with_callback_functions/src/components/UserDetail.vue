<!--
  Here, we see too possibilities that allow communication between parent
  and child components.

  1) We can do it with props and custom event;
  2) We can do it with callback and props.
 -->

<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <button @click="resetName">Reset name</button>
    <button @click="resetFn()">Reset name</button>
  </div>
</template>

<script>
  export default {
    props: {
      myName: {
        type: String,
        default: 'Max'
      },
      resetFn: Function
    },
    methods: {
      switchName() {
        return this.myName.split("").reverse().join("");
      },
      resetName() {
        this.myName = 'Max';
        // $emit is a way to emit an event that will be passed to the parent component.
        this.$emit('nameWasReset', this.myName);
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
