export const fruitMixin = {
  data: function () {
    return {
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(fruit => fruit.match(this.filterText));
    }
  }
};
