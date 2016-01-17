define('breadcrumb', function(require, exports, module) {

  /* 
  * @Author: seven
  * @Date:   2016-01-10 14:27:03
  */
  
  'use strict'
  
  var AppConfig = require('AppConfig')
  
  var breadcrumb = Vue.extend({
  
      template: "\r\n\r\n<div class=\"breadcrumb\">\r\n    <div class=\"container\">\r\n        <template v-for=\"item in items\">\r\n            <a v-link=\"{path: item.link, activeClass:'breadcrumb_link'}\" class=\"breadcrumb_item\" :class=\"{breadcrumb_current: isLast($index)}\">\r\n                {{item.name}}\r\n            </a>\r\n            <i v-if=\"!isLast($index)\" class=\"fa fa-chevron-right breadcrumb_delimiter\"></i>\r\n        </template>\r\n    </div>\r\n</div>\r\n",
  
      props: ['items'],
  
      methods: {
          isLast: function(index){
              return index == this.items.length - 1
          }
      }
  })
  
  module.exports = breadcrumb
  

});
