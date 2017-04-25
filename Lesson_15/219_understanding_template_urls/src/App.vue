<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div>
          <label>Username</label>
          <input class="form-control" type="text" v-model="user.username">
        </div>
        <div>
          <label>Mail</label>
          <input class="form-control" type="text" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr>
        <input class="form-control" type="text" v-model="node">
        <br><br>
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="u in users">{{ u.username }} - {{ u.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: '',
          email: ''
        },
        users: [],
        resource: {},
        node: 'data'
      }
    },
    methods: {
      submit() {
        // this.$http.post('data.json', this.user)
        //   .then(response => {
        //     console.log(response);
        //   })
        //   .catch(error => {
        //     console.log(error);
        //   })
        this.resource.saveAlt(this.user);
      },
      fetchData() {
        this.resource.getData({node: this.node});
          .then(response => {
            return response.json();
          })
          .then(json => {
            this.users = [];

            for (const [_, value] of Object.entries(json)) {
              this.users = [...this.users, value];
            }
          })
          .catch(error => console.log(error));
      }
    },
    created() {
      const customActions() {
        saveAlt: { method: 'POST', url: 'alternative.json' },
        getData: { method: 'GET' }
      };
      this.resource = this.$resource('{node}.json', {}, customActions);
    }
  }
</script>

<style>
</style>
