<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            placeholder="quantity"
            v-model.number="quantity">
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            @click="sellStock(order)"
            :disabled="this.quantity <= 0 || !Number.isInteger(this.quantity)">
            Sell
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: {
      stock: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        quantity: 0
      };
    },
    computed: {
      order() {
        return {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.stock.quantity
        };
      }
    },
    methods: {
      ...mapActions(['sellStock'])
    }
  }
</script>
