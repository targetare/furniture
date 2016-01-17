define('header', function(require, exports, module) {

  /* 
  * @Author: seven
  * @Date:   2016-01-09 05:31:23
  */
  
  'use strict'
  
  
  module.exports = Vue.extend({
      template: "\r\n\r\n<header class=\"header page_header\">\r\n    <div class=\"header_inner container\">\r\n        <a v-link=\"{path: '/home'}\" class=\"header_logo text__hide\">\r\n            Dream Home\r\n        </a>\r\n\r\n        <nav class=\"header_nav\">\r\n            <div class=\"header_nav-item\"><a class=\"link\" v-link=\"{path: '/home'}\">Home</a></div>\r\n            <div class=\"header_nav-item\"><a class=\"link\" v-link=\"{path: '/products'}\">Products</a></div>\r\n            <div class=\"header_nav-item\"><a class=\"link\" v-link=\"{path: '/news'}\">News</a></div>\r\n            <div class=\"header_nav-item\"><a class=\"link\" v-link=\"{path: '/contact'}\">Contact</a></div>\r\n        </nav>\r\n    </div>\r\n</header>\r\n"
  })
  

});
