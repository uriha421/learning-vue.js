var items = [
  {
    name: 'pencil',
    price: 300,
    quantity: 0
  },
  {
    name: 'notebook',
    price: 400,
    quantity: 0
  },
  {
    name: 'erasor',
    price: 500,
    quantity: 0
  }
]

var vm = new Vue({
  el: '#app',
  data: {
    items: items,
    taxRate: 1.08
  },
  filters: {
    numberWithDelimiter(number) {
      if (!number) {
        return '0'
      }
      return number.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    }
  },
  computed: {
    totalPrice() {
      return this.items.reduce(function(sum, item) {
        return sum + (item.price * item.quantity)
      }, 0)
    },
    totalPriceWithTax() {
      return Math.floor(this.totalPrice * this.taxRate)
    }
  }
})

