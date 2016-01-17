define('article', function(require, exports, module) {

  /* 
  * @Author: seven
  * @Date:   2016-01-17 22:39:43
  */
  
  'use strict'
  
  module.exports = Vue.extend({
      template: "\r\n<section class=\"article\">\r\n    <header class=\"article_header\">\r\n        <h1 class=\"article_title\">{{article.title}}</h1>\r\n        <div class=\"article_metas\">\r\n            <span class=\"article_meta\"><i class=\"article_meta-ico fa fa-bookmark\"></i> {{article.created}}</span>\r\n            <span class=\"article_meta\"><i class=\"article_meta-ico fa fa-eye\"></i> {{article.views}}</span>\r\n        </div>\r\n    </header>\r\n    <div class=\"article_content\">\r\n        {{{article.content}}}\r\n    </div>\r\n    <footer class=\"article_footer\">\r\n        \r\n    </footer>\r\n</section>\r\n",
  
      props: ['article']
  })
  

});
