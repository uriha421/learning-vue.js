//------------------------------------------------
// initial data
//------------------------------------------------
var userData = [
  {
    id: 1,
    name: 'Alice',
    description: 'I am a software engineer.'
  },
  {
    id: 2,
    name: 'Bob',
    description: "I am a hardware engineer."
  }
]

var Auth = {
  login(email, pass, cb) {
    setTimeout(function() {
      if (email === 'vue@example.com' && pass === 'vue') {
        localStorage.token = Math.random().toString(36).substring(7)
        if (cb) { cb(true) }
      } else {
        if (cb) { cb(false) }
      }
    }, 0)
  },
  logout() {
    delete localStorage.token
  },
  loggedIn() {
    return !!localStorage.token
  }
}

//------------------------------------------------
// APIs
//------------------------------------------------
// get users by APIs
var getUsers = function(callback) {
  setTimeout(function() {
    callback(null, userData)
  }, 1000)
}

// get user by APIs
var getUser = function(userId, callback) {
  setTimeout(function() {
    var filteredUsers = userData.filter(function(user) {
      return user.id === parseInt(userId, 10)
    })
    callback(null, filteredUsers && filteredUsers[0])
  }, 1000)
}

// post user by APIs
var postUser = function(params, callback) {
  setTimeout(function() {
    params.id = userData.length + 1
    userData.push(params)
    callback(null, params)
  }, 1000)
}

//------------------------------------------------
// Components
//------------------------------------------------
// user-list component
var UserList = {
  template: '#user-list',
  data() {
    return {
      loading: false,
      error: null,
      users() {
        return []
      }
    }
  },

  created() {
    this.fetchData()
  },

  // watching changes of $route
  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData() {
      this.loading = true
      
      getUsers((function(err, users) {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.users = users
        }
      }).bind(this))
    }
  }
}

// user-create component
var UserCreate = {
  template: '#user-create',
  data() {
    return {
      sending: false,
      user: this.defaultUser(),
      error: null
    }
  },

  created() {
    
  },

  methods: {
    defaultUser() {
      return {
        name: '',
        description: ''
      }
    },
    createUser() {
      // validate input data
      if (this.user.name.trim() === '') {
        this.error = "Name Required"
        return
      }
      if (this.user.description.trim() === '') {
        this.error = "Description Required"
        return
      }

      postUser(this.user, (function(err, user) {
        this.sending = false
        if (err) {
          this.error = err.toString()
        } else {
          this.error = null
          this.user = this.defaultUser()
          alert('A new User has been registered.')

          // go to users page
          this.$router.push('/users')
        }
      }).bind(this))
    }
  }
}

// user-detail component
var UserDetail = {
  template: "#user-detail",
  data() {
    return {
      loading: false,
      error: null,
      user: null
    }
  },

  created() {
    this.fetchData()
  },

  watch: {
    '$route' : 'fetchData'
  },

  methods: {
    fetchData() {
      this.loading = true
      
      getUser(this.$route.params.userId, (function(err, user) {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.user = user
        }
      }).bind(this))
    }
  }
}

// login component
var Login = {
  template: '#login',
  data() {
    return {
      email: 'vue@example.com',
      pass: '',
      error: false
    }
  },
  methods: {
    login() {
      Auth.login(this.email, this.pass, (function(loggedIn) {
        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.replace(this.$route.query.redirect || '/' )
        }
      }).bind(this))
    }
  }
}

//------------------------------------------------
// Vue Router & Vue instances
//------------------------------------------------
var router = new VueRouter({
  routes: [
    {
      path: '/top',
      component: {
        template: '<div>top page</div>'
      }
    },
    {
      path: '/users',
      component: UserList
    },
    {
      path: '/users/new',
      component: UserCreate,
      beforeEnter(to, from, next) {
        // if not logged in, then go to login page
        if (!Auth.loggedIn()) {
          next({
            path: '/login',
            query: { redirect: to.fullPath }
          })
        } else {
          next()
        }
      }
    },
    {
      path: '/users/:userId',
      component: UserDetail
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/logout',
      beforeEnter(to, from, next) {
        Auth.logout()
        next('/')
      }
    }
  ]
})

var app = new Vue({
  el: '#app',
  router: router
})
