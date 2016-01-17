define('category', function(require, exports, module) {

  /* 
  * @Author: seven
  * @Date:   2016-01-17 15:58:28
  */
  
  'use strict'
  
  
  module.exports = Vue.extend({
  
      template: "\r\n\r\n\r\n<div class=\"category\">\r\n    <div class=\"category_head\">\r\n        <span>Product Category</span>\r\n    </div>\r\n    <div class=\"category_items\">\r\n        <a v-link=\"{path: '/products', exact: true}\" class=\"link category_item\">All Products</a>\r\n        <a v-link=\"{path: '/products/category/' + item.id}\" v-for=\"item in categories\" class=\"link category_item\">{{item.name}}</a>\r\n    </div>\r\n</div>\r\n",
  
      data: function(){
          return {
              categories: null
          }
      },
  
      asyncData: function(resolve, reject){
          setTimeout(function(){
              resolve({
                  categories: [{
                      id: 1,
                      name: 'Special Offer'
                  },{
                      id: 2,
                      name: 'Coffee Table'
                  },{
                      id: 3,
                      name: 'Dining Table'
                  },{
                      id: 4,
                      name: 'TV Stands'
                  }]
              })
          }, 400)
      }
  })
  

});
