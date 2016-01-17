define('articles', function(require, exports, module) {

  /* 
  * @Author: seven
  * @Date:   2016-01-17 22:04:09
  */
  
  'use strict'
  
  module.exports = Vue.extend({
      template: "\r\n<div class=\"articles\">\r\n    <div class=\"articles_item\" v-for=\"article in articles\">\r\n        <h3 class=\"articles_title\">{{article.title}}</h3>\r\n        <div class=\"articles_metas\">\r\n            <span class=\"articles_meta\"><i class=\"articles_meta-ico fa fa-bookmark\"></i> {{article.created}}</span>\r\n            <span class=\"articles_meta\"><i class=\"articles_meta-ico fa fa-eye\"></i> {{article.views}}</span>\r\n        </div>\r\n        <p class=\"articles_excerpt\">{{article.excerpt}}</p>\r\n        <a v-link=\"{path: '/news/' + article.id}\" class=\"articles_more link\">read more</a>\r\n    </div>\r\n</div>\r\n\r\n",
  
      props: ['articles']
  })
  

});
