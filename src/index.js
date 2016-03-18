require('./main.css');
var Vue = require('vue');
var Router = require('vue-router');
var Header = require('./components/header.vue');
Vue.use(Router);

// routingdfds
var router = new Router();

router.map({
  '/news/:page': {
    component: Header
  }
})
router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/news/1'
})
router.start(Header, '#app')
