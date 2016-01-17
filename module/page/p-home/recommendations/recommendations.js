define('page/p-home/recommendations', function(require, exports, module) {

  /* 
  * @Author: seven
  * @Date:   2016-01-16 21:38:41
  */
  
  'use strict'
  
  
  module.exports = Vue.extend({
  
      template: "\r\n<ul class=\"recommendations\">\r\n    <li class=\"recommendation\" v-for=\"product in products\">\r\n        <div class=\"recommendation_inner\">\r\n            <div class=\"recommendation_img\" :style=\"{backgroundImage:'url(' + product.img + ')'}\"></div>\r\n            <span class=\"recommendation_name\">{{product.name}}</span>\r\n        </div>\r\n    </li>\r\n</ul>\r\n",
  
      props: ['products'],
  
      data: function(){
          return {
          }
      }
  })
  

});
