define('page/p-products', function(require, exports, module) {

  /* 
  * @Author: seven
  * @Date:   2016-01-09 05:16:26
  */
  
  'use strict'
  
  var geb = require('geb')
  
  module.exports = Vue.extend({
      template: "\r\n\r\n<div class=\"page page-products\">\r\n    <v-header></v-header>\r\n    <div class=\"page_main\">\r\n        <breadcrumb :items=\"breadcrumb\"></breadcrumb>\r\n\r\n        <div class=\"container p-products_container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-3\">\r\n                    <category></category>\r\n                </div>\r\n                <div class=\"col-lg-9\">\r\n                    <products :products=\"products\"></products>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <v-footer></v-footer>\r\n</div>\r\n", 
      data: function(){
          return {
              breadcrumb: [{
                  name: 'home',
                  link: '/home'
              },{
                  name: 'products',
                  link: null
              }],
  
              products: [{
                  name: 'COFFEE TABLE CT-B137',
                  img: '/furniture/test/img/product1.jpeg',
                  model: 'CT-E72',
                  size: 'L600*W800*H930',
                  color: 'Black',
                  views: 199,
                  category: 'TV Stands'
              },{
                  name: 'COFFEE TABLE CT-B137',
                  img: '/furniture/test/img/product1.jpeg',
                  model: 'CT-E72',
                  size: 'L600*W800*H930',
                  color: 'Black',
                  views: 199,
                  category: 'TV Stands'
              },{
                  name: 'COFFEE TABLE CT-B137',
                  img: '/furniture/test/img/product1.jpeg',
                  model: 'CT-E72',
                  size: 'L600*W800*H930',
                  color: 'Black',
                  views: 199,
                  category: 'TV Stands'
              },{
                  name: 'COFFEE TABLE CT-B137',
                  img: '/furniture/test/img/product1.jpeg',
                  model: 'CT-E72',
                  size: 'L600*W800*H930',
                  color: 'Black',
                  views: 199,
                  category: 'TV Stands'
              }]
          }
      },
      components: {
          breadcrumb: require('breadcrumb'),
          category: require('category'),
          products: require('products')
      }
  })
  

});
