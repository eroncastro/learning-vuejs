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
        <!--
          The transition element emits some events we can listen to in order
          to perform some actions:
          - before-enter
          - enter
          - after-enter
          - after-enter-cancelled
          - before-leave
          - leave
          - after-leave
          - after-leave-cancelled
        -->
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
        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">This is some info</div>
          <div class="alert alert-warning" v-else key="warning">This is some warning</div>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
        <br><br>
        <!--
          We are not using CSS here for animations, but JavaScript.
          If we don't use CSS, we can exclude its use from our transition component
          by binding false value to the css attribute.
        -->
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false">
          <div
            style="width: 100px; height: 100px; background-color: lightgreen;"
            v-if="load">
          </div>
        </transition>
        <hr>
        <button
          class="btn btn-primary"
          @click="toggleComponents">
          Toggle Components
        </button>
        <br><br>
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="addItem">Add Item</button>
        <br><br>
        <!--
          <transition> and <transition-group> have CSS classes and JS hooks.

          Howeverz, <transition> is not rendered to the DOM
          while <transition-group> does render a new HTML tag.
          By default, that will be a <span>, which can be overwritten
          setting <transition-group tag="tag">

          IMPORTANT: for <transition-group>, we MUST always use
          a key tag for each element rendered.
        -->
        <ul class="list-group">
          <transition-group name="slide">
            <li
              class="list-group-item"
              v-for="(number, index) in numbers"
              :key="number"
              @click="removeItem(index)"
              style="cursor: pointer">
              {{ number }}
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import DangerAlert from './DangerAlert.vue';
  import SuccessAlert from './SuccessAlert.vue';

  export default {
    data() {
      return {
        show: true,
        load: false,
        alertAnimation: 'fade',
        elementWidth: 100,
        selectedComponent: 'danger-alert',
        numbers: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      /*
        The places to trigger animations are enter and leave functions,b
        because these are the methods that get executed after the initial
        states have been set up.
      */
      beforeEnter(el) {
        console.log('beforeEnter');
        this.elementWidth = 100;
        el.style.width = `${this.elementhWidth}px`;
      },
      enter(el, done) {
        console.log('enter');
        let round = 1;
        const interval = setInterval(() => {
          el.style.width = `${this.elementWidth + round * 10}px`;
          round++;
          if (round > 20) {
            clearInterval(interval);
            done();
          }
        }, 20);
        // done method is used to be executed when the animation finishes.
        done();
      },
      afterEnter(el) {
        console.log('afterEnter');
      },
      enterCancelled(el) {
        console.log('enterCancelled');
      },
      beforeLeave(el) {
        console.log('beforeLeave');
        el.style.width = '300px';
        this.elementWidth = 300;
      },
      leave(el, done) {
        console.log('leave');
        let round = 1;
        const interval = setInterval(() => {
          el.style.width = `${this.elementWidth - round * 10}px`;
          round++;
          if (round > 20) {
            clearInterval(interval);
            done();
          }
        }, 20);
      },
      afterLeave(el) {
        console.log('afterLeave');
      },
      leaveCancelled(el) {
        console.log('leaveCancelled');
      },
      toggleComponents() {
        this.selectedComponent = this.selectedComponent === 'danger-alert' ?
                                 'success-alert' :
                                 'danger-alert'
      },
      addItem() {
        const pos = Math.floor(Math.random() * this.numbers.length);
        this.numbers.splice(pos, 0, this.numbers.length + 1);
      },
      removeItem(index) {
        this.numbers.splice(index, 1);
      }
    },
    components: {
      DangerAlert,
      SuccessAlert
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
    position: absolute;
  }

  /*
    This class will be attached to any element
    that needs to change its place.
  */
  .slide-move {
    transition: transform 1s;
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
