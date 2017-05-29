<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br><br>
        <!--
          transition is a special element used to animate what is
          between the opening and the closing tag.

          It is only possible to animate one element with a transition.
        -->
        <transition>
          <div>
            <div class="alert alert-info" v-if="show">This is some info</div>
            <div class="alert alert-info" v-if="show">This is some info</div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    }
  }
</script>

<style>

</style>
