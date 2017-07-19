/*
  This object is not shared between components.
  Every component that uses it as a mixin will
  get a fresh copy of it.
*/

export const fruitMixin = {
  data() {
    return {
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(fruit => fruit.match(this.filterText));
    }
  },
  created() {
    console.log('Created');
  }
};
