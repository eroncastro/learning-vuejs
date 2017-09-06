<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <!--
              Input modifiers can be used to modify the way we react
              with data the user types in as well as format the data
              received.

              The trim modifier trims white spaces.
            -->
            <label for="email">Mail</label>
            <!--
              <input
                type="text"
                id="email"
                class="form-control"
                v-model="userData.email">

              To understand v-model, we can read the input above as follows:
            -->

            <input
              type="text"
              id="email"
              class="form-control"
              :value="userData.email"
              @input="userData.email = $event.target.value">

            <!--
              In conclusion, to use v-model with our own component, it has
              to have a property value and emit an event called input.
             -->
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <!--
              The lazy modifier makes the input not react to the input
              event, but to the change event.
             -->
            <input
              type="password"
              id="password"
              class="form-control"
              v-model.lazy="userData.password">
            <p>{{ userData.password }}</p>
          </div>
          <!--
            The number modifier converts the input to numbers.
           -->
          <div class="form-group">
            <label for="age">Age</label>
            <input
              type="number"
              id="age"
              class="form-control"
              v-model.number="userData.age">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label><br>
          <!--
            Interpolation between <textarea>{{ test }}</textarea> doesn't work!
            We must use v-model instead.
          -->
          <textarea
            id="message"
            rows="5"
            class="form-control"
            v-model="message">
          </textarea>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!--
            Both checkboxes are bound to the array sendMail, defined inside data.
            VueJS will merge the selected values together whenever they are selected.
          -->
          <div class="form-group">
            <label for="sendmail">
              <input
                type="checkbox"
                id="sendmail"
                value="SendMail"
                v-model="sendMail"> Send Mail
            </label>
            <label for="sendInfomail">
              <input
                type="checkbox"
                id="sendInfomail"
                value="SendInfoMail"
                v-model="sendMail"> Send Infomail
            </label>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <!--
            1) VueJS knows both of the following radios belong to the same model. So, only one
            of them is going to be selectable.
            2) VueJS will store the selected value in the gender model.
          -->
          <label for="male">
            <input
              type="radio"
              id="male"
              value="Male"
              v-model="gender">Male
          </label>
          <label for="female">
            <input
              type="radio"
              id="female"
              value="Female"
              v-model="gender">Female
          </label>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="priority">Priority</label>
          <!--
            On the select element below, VueJS will use sectedPriority as the default value.
            Whenever the selected value changes, VueJS will automatically update selectedPriority.
           -->
          <select
            id="priority"
            class="form-control"
            v-model="selectedPriority">
            <option
              v-for="priority in priorities">
              {{ priority }}
            </option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <app-switch v-model="dataSwitch"></app-switch>
        </div>
      </div>

      <hr>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button
            class="btn btn-primary">
            Submit!
          </button>
        </div>
      </div>
    </form>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Age: {{ userData.age }}</p>
            <!--
              We use white-space: pre to show the line breaks instead
              of white spaces.
            -->
            <p style="white-space: pre">Message: {{ message }}</p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for="mail in sendMail">{{ mail }}</li>
            </ul>
            <p>Gender: {{ gender }}</p>
            <p>Priority: {{ selectedPriority }}</p>
            <p>Switched: {{ dataSwitch }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Switch from './Switch.vue';

  export default {
    data() {
      return {
        userData: {
          email: '',
          password: '',
          age: 27
        },
        message: 'A new Text',
        sendMail: [],
        gender: 'Male',
        selectedPriority: 'High',
        priorities: ['High', 'Medium', 'Low'],
        dataSwitch: true
      };
    },
    components: {
      appSwitch: Switch
    }
  }
</script>

<style>

</style>
