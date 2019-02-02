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
          template: '<div>This is a Users Page.</div>'
      },
      // redirect to /top if accessed by 'users?redirect=true'
      beforeEnter(to, from, next) {
        if (to.query.redirect === 'true') {
          next('/top')
        } else {
          next()
        }
      }
    },
    {
      path: '/users/:userId',
      name: 'user',
      component: {
        template: '<div>This is a Users Page. Your User ID: {{ $route.params.userId }}</div>'
      }
    }
  ]
})

// redirect to /top if accessed by '/users'
// router.beforeEach(function(to, from, next) {
//   if (to.path === '/users') {
//     next('/top')
//   } else {
//     next()
//   }
// })

var app = new Vue({
  router: router
}).$mount('#app')

