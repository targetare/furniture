define('page/p-home', function(require, exports, module) {

  /* 
  * @Author: seven
  * @Date:   2016-01-09 05:16:02
  */
  
  'use strict'
  
  
  var slide = require('page/p-home/slide')
  
  module.exports = Vue.extend({
      template: "\r\n\r\n<div class=\"page page-home\">\r\n    <v-header></v-header>\r\n    \r\n    <div class=\"page_main\">\r\n        <slide></slide>\r\n        <section class=\"section section__white\">\r\n            <div class=\"container\">\r\n                <div class=\"section_head\">\r\n                    <h1 class=\"section_title\">Our Services</h1>\r\n                </div>\r\n                <div class=\"section_body\">\r\n                    <!-- home-services -->\r\n                    <div class=\"home-services\">\r\n                        <div class=\"home-services_item\">\r\n                            <div class=\"home-services_icon\">\r\n                                <span class=\"fa-stack fa-4x\">\r\n                                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                                    <i class=\"fa fa-question fa-stack-1x fa-inverse\"></i>\r\n                                </span>\r\n                            </div>\r\n                            <p class=\"home-services_text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet erat at neque euismod aliquet. Integer eget risus id arcu sollicitudin facilisis. </p>\r\n                        </div>\r\n                        <div class=\"home-services_item\">\r\n                            <div class=\"home-services_icon\">\r\n                                <span class=\"fa-stack fa-4x\">\r\n                                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                                    <i class=\"fa fa-question fa-stack-1x fa-inverse\"></i>\r\n                                </span>\r\n                            </div>\r\n                            <p class=\"home-services_text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet erat at neque euismod aliquet. Integer eget risus id arcu sollicitudin facilisis. </p>\r\n                        </div>\r\n                        <div class=\"home-services_item\">\r\n                            <div class=\"home-services_icon\">\r\n                                <span class=\"fa-stack fa-4x\">\r\n                                    <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                                    <i class=\"fa fa-question fa-stack-1x fa-inverse\"></i>\r\n                                </span>\r\n                            </div>\r\n                            <p class=\"home-services_text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet erat at neque euismod aliquet. Integer eget risus id arcu sollicitudin facilisis. </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n\r\n        <section class=\"section\">\r\n            <div class=\"container\">\r\n                <div class=\"section_head\">\r\n                    <h1 class=\"section_title\">Recent Products</h1>\r\n                </div>\r\n                <div class=\"section_body\">\r\n                    <recommendations :products=\"recommendations\"></recommendations>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n    <v-footer></v-footer>\r\n</div>\r\n",
  
      data: function(){
          return {
              recommendations: [{
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
  
      route: {
          data: function(){
          }
      },
  
      ready: function(){
      },
  
      components: {
          'slide': slide,
          'recommendations': require('page/p-home/recommendations')
      }
  })
  

});
