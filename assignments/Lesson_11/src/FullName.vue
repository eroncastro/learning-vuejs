<template>
  <div class="form-group">
    <label for="fullname">Full Name</label>
    <input
      type="text"
      id="fullname"
      class="form-control"
      :value="value"
      @input="inputChanged($event.target.value)">
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: '',
        required: false
      }
    },
    methods: {
      inputChanged(newValue) {
        this.$emit('input', newValue)
      }
    }
  }
</script>

<style>

</style>
