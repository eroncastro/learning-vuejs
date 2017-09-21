<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <select v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br>
        <br>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br><br>
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <!--
          We use type to setup which one (animation or transition) will
          determine the length of the transition.
        -->
        <transition name="slide" :type="alertAnimation">
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <!--
          To tell VueJS to animate the initial attach to the DOM, we can add
          appear attribute to the transition element.
        -->
        <transition
          appear
          enter-active-class="animated bounce"
          leave-active-class="animated shake">
          <div class="alert alert-info" v-if="show">This is some info</div>
        </transition>
        <!--
          We add the key element to the below elements to make VueJS differentiate
          between them.

          Modes:
          - out-in - let the old element animate out first and then the new one in
          - in-out - the opposite
        -->
        <transition :name="alertAnimation" :type="alertAnimation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">This is some info</div>
          <div class="alert alert-warning" v-else key="warning">This is some warning</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
        alertAnimation: 'fade'
      }
    }
  }
</script>

<style>
  /*
    Vue will analyze this CSS to determine how long the animation will run.
  */

  /* fade-enter is the class attached for one frame at the beginning. */
  .fade-enter {
    opacity: 0; /* transparent */
  }

  /* This is the class to set the transition. */
  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {
    opacity: 1;
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }

  .slide-leave {

  }

  /*
    When Vue JS will take the longest duration
    whenever we have both transition and animation.
  */
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translate Y(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>
