var router = new VueRouter({
  routes: [
    {
      path: '/top',
      component: {
        template: '<div>This is a Top Page.</div>'
      }
    },
    {
      path: '/users',
      component: {
        template: '<div>This is a Users Page</div>'
      }
    }
  ]
})

var app = new Vue({
  router: router
}).$mount('#app')

