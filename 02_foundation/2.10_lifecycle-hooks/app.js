var vm = new Vue({
  el: '#app',
  data: {
    count: 0,
    timerId: null
  },
  created() {
    console.log("created")
    var that = this
    console.log(this.count)
    console.log(this.$el)
    // start a timer
    this.timerId = setInterval(function() {
      that.count += 1
    }, 1000)
  },
  mounted() {
    console.log("mounted")
    console.log(this.$el)
  },
  beforeDestroy() {
    console.log('beforeDestroy')
    clearInterval(this.timerId)
  }
})

