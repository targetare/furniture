define('footer', function(require, exports, module) {

  /* 
  * @Author: seven
  * @Date:   2016-01-09 16:43:36
  */
  
  'use strict'
  
  module.exports = Vue.extend({
      template: "\r\n<footer class=\"footer page_footer\">\r\n    <div class=\"container justify\">\r\n        <div class=\"footer_copyright justify_item\">\r\n            © 2016 Dream Home\r\n        </div>\r\n\r\n        <div class=\"footer_sitemap justify_item\">\r\n            <a v-link=\"{path: '/home', activeClass:'footer_sitemap-link__active'}\" class=\"footer_sitemap-link link link__a\">Home</a>\r\n            <a v-link=\"{path: '/products', activeClass:'footer_sitemap-link__active'}\" class=\"footer_sitemap-link link link__a\">Products</a>\r\n            <a v-link=\"{path: '/news', activeClass:'footer_sitemap-link__active'}\" class=\"footer_sitemap-link link link__a\">News</a>\r\n            <a v-link=\"{path: '/contact', activeClass:'footer_sitemap-link__active'}\" class=\"footer_sitemap-link link link__a\">Contact</a>\r\n        </div>\r\n    </div>\r\n</footer>\r\n"
  })
  

});
