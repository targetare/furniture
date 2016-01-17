define('page/p-home/slide', function(require, exports, module) {

  /* 
  * @Author: seven
  * @Date:   2016-01-09 11:59:48
  */
  
  'use strict'
  
  var Swiper = require('vendor/swiper/swiper')
  
  module.exports = Vue.extend({
  
      swiper: null,
  
      template: "\r\n<div class=\"slide swiper-container\">\r\n    <div class=\"swiper-wrapper\">\r\n        <div class=\"swiper-slide\">\r\n            <img src=\"/furniture/test/img/slide/1.jpg\">\r\n        </div>\r\n        <div class=\"swiper-slide\">\r\n            <img src=\"/furniture/test/img/slide/2.jpg\">\r\n        </div>\r\n        <div class=\"swiper-slide\">\r\n            <img src=\"/furniture/test/img/slide/3.jpg\">\r\n        </div>\r\n    </div>\r\n    <!-- Add Pagination -->\r\n    <div class=\"swiper-pagination\"></div>\r\n</div>\r\n",
  
      ready: function(){
          this.swiper =  new Swiper (this.$el, {
              pagination: $('.swiper-pagination', this.$el),
              paginationClickable: true,
              loop: true
          })
      },
  
      destroyed: function(){
          this.swiper.destroy()
      }
  })
  

});
