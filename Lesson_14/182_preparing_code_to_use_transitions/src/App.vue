<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br><br>
        <!--
          One of the typical cases to use the transition component is to attach CSS classes.
          Vue does this for us: it determines when it should attach an element
          and then it will attach two CSS classes for animating it in and animating it out.
          By styling these classes out, we can, therefore, setup an animation.

          We animate in an element and when Vue detects that v-if or v-show is true,
          it animates such element.

          Enter class: <name>-enter
          Enter-active class: <name>-enter-active

          Leave class: <name>-leave
          Leave active-class: <name>-leave-active

          Default: v-enter if no name is supplied
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
