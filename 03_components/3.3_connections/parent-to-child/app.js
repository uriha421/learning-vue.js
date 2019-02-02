Vue.component('item-desc', {
  props: {
    itemsName: {
      type: Object,
      required: true
    }
  },
  template: '<li>{{ itemsName.name }}</li>'
})

new Vue({
  el: '#app',
  data() {
    return {
      items: [
        {name: 'pen'},
        {name: 'notebook'},
        {name: 'eraser'}
      ]
    }
  }
})
