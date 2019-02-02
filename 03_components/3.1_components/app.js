Vue.component('list-item', {
  template: '<li>{{ content }}</li>',
  data() {
    return {
      content: 'bar'
    }
  }
})

new Vue({
  el: '#example'
})
