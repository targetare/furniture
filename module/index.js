define('index', function(require, exports, module) {

  
  // @require style/index.less
  
  /* 
  * @Author: seven
  * @Date:   2016-01-09 04:33:14
  */
  
  'use strict'
  
  var VueRouter = require('vendor/vue-router'),
      VueAsyncData = require('vendor/vue-async-data'),
      AppConfig = require('AppConfig'),
      Header = require('header'),
      Footer = require('footer')
  
  Vue.use(VueRouter)
  Vue.use(VueAsyncData)
  
  var App = Vue.extend({}),
      router = new VueRouter({
          root: AppConfig.root,
          linkActiveClass: 'link__active'
      }),
      pages = {
          Home: require('page/p-home'),
          Products: require('page/p-products'),
          News: require('page/p-news'),
          NewsDetail: require('page/p-news-detail'),
          Contact: require('page/p-contact')
      }
  
  var routerMap = {
      '/home': {
          component: pages.Home
      },
      '/products': {
          component: pages.Products
      },
      '/products/category/:cid': {
          component: pages.Products
      },
      '/news': {
          component: pages.News
      },
      '/news/:id': {
          component: pages.NewsDetail
      },
      '/contact': {
          component: pages.Contact
      }
  }
  
  router.map(routerMap)
  
  // redirect
  router.redirect({
      '/': '/home'
  })
  
  /*
   * scrollbar
  ;(function initScrollbar(){
      var $container = $('body')
      ps.initialize($container[0], {
          suppressScrollX: true
      })
      router.afterEach(function(transition){
          ps.update($container[0])
      })
  })()
   */
  
  /*
   * 注册公共组件
   */
  Vue.component('v-header', Header)
  Vue.component('v-footer', Footer)
  
  
  router.start(App, 'body')
  

});
