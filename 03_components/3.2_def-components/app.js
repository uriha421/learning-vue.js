// Vue.component('todo-list-title', {
//   template: '<li>{{ title }}</li>',
//   data() {
//     return {
//       title: 'TODO LIST'
//     }
//   }
// })
// 
// Vue.component('todo-list', {
//   template: '<div><todo-list-title></div>',
//   data() {
//     return {
//       completed: 'yes',
//       whatToDo: 'Go to school'
//     }
//   }
// })

new Vue({
  el: '#main',
  components: {
    'todo-list': {
      template: '<li>TODO LIST</li>'
    }
  }
})
