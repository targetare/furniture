define('products', function(require, exports, module) {

  /* 
  * @Author: seven
  * @Date:   2016-01-17 16:27:48
  */
  
  'use strict'
  
  module.exports = Vue.extend({
      template: "\r\n\r\n<div class=\"products\">\r\n    <div class=\"product\" v-for=\"product in products\">\r\n        <img class=\"product_img\" :src=\"product.img\">\r\n        <h3 class=\"product_name\">{{product.name}}</h3>\r\n        <div class=\"product_metas\">\r\n            <span class=\"product_meta\"><i class=\"product_meta-ico fa fa-bookmark\"></i> {{product.category}}</span>\r\n            <span class=\"product_meta\"><i class=\"product_meta-ico fa fa-eye\"></i> {{product.views}}</span>\r\n        </div>\r\n        <div class=\"product_info\">\r\n            <div class=\"product_info-item\">\r\n                <span class=\"product_info-label\">Model:</span>\r\n                <span class=\"product_info-value\">{{product.model}}</span>\r\n            </div>\r\n            <div class=\"product_info-item\">\r\n                <span class=\"product_info-label\">Size(mm):</span>\r\n                <span class=\"product_info-value\">{{product.size}}</span>\r\n            </div>\r\n            <div class=\"product_info-item\">\r\n                <span class=\"product_info-label\">Color:</span>\r\n                <span class=\"product_info-value\">{{product.color}}</span>\r\n            </div>\r\n        </div>\r\n        <a href=\"javascript:void(0)\" @click=\"showPhotos\" class=\"product_photos\">more photos</a>\r\n    </div>\r\n</div>\r\n",
  
      props: ['products'],
  
      methods: {
          showPhotos: function(){
              alert('show photos...')
          }
      }
  })
  

});
