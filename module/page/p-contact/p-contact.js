define('page/p-contact', function(require, exports, module) {

  /* 
  * @Author: seven
  * @Date:   2016-01-09 05:15:53
  */
  
  'use strict'
  
  
  
  module.exports = Vue.extend({
      template: "\r\n\r\n<div class=\"page p-contact\">\r\n    <v-header></v-header>\r\n    <div class=\"page_main\">\r\n        <div class=\"p-contact_map\">\r\n            <img src=\"/furniture/module/page/p-contact/img/map.png\" class=\"p-contact_map-img\">\r\n        </div>\r\n        \r\n        <div class=\"container p-contact_main\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4 col-lg-offset-1\">\r\n                    <div class=\"p-contact-info\">\r\n                        <h3 class=\"p-contact-info_title\">Contact Info</h3>\r\n                        <div class=\"p-contact-info_items\">\r\n                            <div class=\"p-contact-info_item row\">\r\n                                <span class=\"p-contact-info_label col-lg-3\">Address:</span>\r\n                                <span class=\"p-contact-info_value col-lg-9\">497 Jacob Mare Street <br> Pretoria <br> 0001 <br> South Africa</span>\r\n                            </div>\r\n                            <div class=\"p-contact-info_item row\">\r\n                                <span class=\"p-contact-info_label col-lg-3\">Phone:</span>\r\n                                <span class=\"p-contact-info_value col-lg-9\">084 953 7882</span>\r\n                            </div>\r\n                            <div class=\"p-contact-info_item row\">\r\n                                <span class=\"p-contact-info_label col-lg-3\">Email:</span>\r\n                                <span class=\"p-contact-info_value col-lg-9\"><a href=\"mailto:xxx@163.com\" class=\"p-contact-info_email link\">TerryRDickens@doyrep.com</a></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                    <h3 class=\"p-contact-info_title\">Get in Touch with Us</h3>\r\n                    <form action=\"#\" class=\"form p-contact-info_form\">\r\n                        <div class=\"form_group\">\r\n                            <label for=\"name\" class=\"form_label form_label__required\">Your Name</label>\r\n                            <input type=\"text\" id=\"name\" name=\"name\" class=\"form_field\">\r\n                        </div>\r\n                        <div class=\"form_group\">\r\n                            <label for=\"email\" class=\"form_label form_label__required\">Your Email</label>\r\n                            <input type=\"text\" id=\"email\" name=\"email\" class=\"form_field\">\r\n                        </div>\r\n                        <div class=\"form_group\">\r\n                            <label for=\"phone\" class=\"form_label form_label__required\">Your Phone num</label>\r\n                            <input type=\"text\" id=\"phone\" class=\"form_field\">\r\n                        </div>\r\n                        <div class=\"form_group\">\r\n                            <label for=\"phone\" class=\"form_label form_label__required\">Your Message</label>\r\n                            <textarea name=\"phone\" id=\"phone\" rows=\"10\" class=\"form_field\"></textarea>\r\n                        </div>\r\n\r\n                        <button class=\"p-contact-info_send\" @click.prevent=\"sendMessage\">Send Message</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <v-footer></v-footer>\r\n</div>\r\n",
      methods: {
          sendMessage: function(){
              
          }
      }
  })
  

});
