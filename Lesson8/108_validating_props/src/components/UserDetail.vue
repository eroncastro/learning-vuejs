<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
  </div>
</template>

<script>
  /*
    While using props, we must validate their values in order
    to prevent the application from breaking.

    To validate props, instead of being an array it must be an object,
    in which the keys are the props and the values can be: a valid type,
    an array of valid type or an object.

    A validation error will prevent the component from being mounted.

    Examples of props:

    props: ['myName']
    props: {
      'myName': String
    }
    props: {
      'myName': {
        type: [String, Number],
        require: true
      }
    }
    props: {
      'myName': {
        type: String,
        default: 'some string'
      }
    }
  */
  export default {
    props: {
      myName: {
        type: String,
        default: 'Max'
      }
    },
    methods: {
      switchName() {
        return this.myName.split("").reverse().join("");
      }
    }
  }
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
