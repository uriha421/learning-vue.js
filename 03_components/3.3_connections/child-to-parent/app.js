var counterButton = Vue.extend({
  template: '<span>{{ counter }}: <button v-on:click="addToCart">ADD</button></span>',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    addToCart() {
      this.counter += 1
      this.$emit('increment')
    }
  }

})

new Vue({
  el: '#item-counter',
  components: {
    'counter-button': counterButton
  },
  data() {
    return {
      total: 0,
      items: [
        {name: 'pen'},
        {name: 'notebook'},
        {name: 'eraser'}
      ]
    }
  },
  methods: {
    incrementCartStatus() {
      this.total += 1
    }
  }
})
