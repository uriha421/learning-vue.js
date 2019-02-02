Vue.component('user-login', {
  template: '#login-template',
  data() {
    return {
      userid: '',
      password: ''
    }
  },
  methods: {
    login() {
      auth.login(this.userid, this.password)
      this.userid = ''
      this.password = ''
    }
  }
})

var auth = {
  login(userid, password) {
    window.alert("You have successfully logged in, USER ID: " + userid + ", PASSWORD: " + password)
  }
}

new Vue({
  el: '#login-example'
})
