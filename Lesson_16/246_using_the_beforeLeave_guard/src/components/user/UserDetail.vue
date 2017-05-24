<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p>
    <p>User loaded has ID token: {{ id_token }}</p>
    <router-link
      tag="button"
      :to="link"
      class="btn btn-primary">
      Edit the User
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        link: {
          name: 'userEdit',
          params: {
            id: this.$route.params.id
          },
          query: {
            locale: 'en',
            q: 100
          },
          hash: '#data'
        }
      }
    },
    computed: {
      id_token() {
        debugger;
        return $route.hash.id_token;
      }
    },
    beforeRouterEnter(to, from, next) {
      if (true) {
        next();
      } else {
        next(false);
      }
    }
  }
</script>