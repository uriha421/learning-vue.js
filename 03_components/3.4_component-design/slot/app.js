var headerTemplate = `
  <div>
    <slot name="header">No Header</slot>
  </div>
`

var contentTemplate = `
  <div>
    <slot name="content">No Contents</slot>
  </div>
`

Vue.component('page-header', {
  template: headerTemplate
})


Vue.component('page-content', {
  template: contentTemplate
})

new Vue({
  el: 'item-list',
})

