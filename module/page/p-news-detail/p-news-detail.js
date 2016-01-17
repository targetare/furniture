define('page/p-news-detail', function(require, exports, module) {

  /* 
  * @Author: seven
  * @Date:   2016-01-09 05:16:11
  */
  
  'use strict'
  
  
  
  module.exports = Vue.extend({
      template: "\r\n\r\n<div class=\"page page-post\">\r\n    <v-header></v-header>\r\n    <div class=\"page_main\">\r\n        <breadcrumb :items=\"breadcrumb\"></breadcrumb>\r\n        <div class=\"container\">\r\n            <v-article :article=\"article\"></v-article>\r\n        </div>\r\n    </div>\r\n    <v-footer></v-footer>\r\n</div>\r\n",
  
      data: function(){
          return {
              breadcrumb: [{
                  name: 'home',
                  link: '/home'
              },{
                  name: 'news',
                  link: '/news'
              }],
  
              article: {}
          }
      },
  
      route: {
          data: function(transition){
              setTimeout(function(){
                  var asyncData = {
                      id: transition.to.params.id,
                      title: 'title',
                      content: [
                          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel egestas lacus, ut fermentum ligula. Aliquam vulputate enim a dui tempus, id molestie augue accumsan. Aenean pulvinar, ligula vitae ultrices tristique, velit mi varius ipsum, eu ultricies turpis mauris id justo. Suspendisse consectetur elit vitae sapien vehicula, nec elementum neque laoreet. Donec vel erat a turpis imperdiet tincidunt. Suspendisse potenti. Sed tincidunt eros tortor, ac tincidunt orci dapibus ut. Phasellus eget ullamcorper purus, a porta ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin interdum, justo non feugiat bibendum, nisl tortor condimentum ante, eget egestas felis ipsum ut urna.</p>',
                          '<p>Suspendisse vulputate metus vitae porttitor placerat. Nulla ullamcorper mi a enim porttitor accumsan. Curabitur est urna, lacinia et vulputate eu, maximus vel nibh. Donec quis varius purus. Aenean ac sem et magna consectetur gravida venenatis interdum purus. Donec ipsum lacus, rhoncus tempus malesuada quis, blandit eget arcu. Nam eu augue a eros interdum congue. In ornare, tortor at lobortis tempus, libero ipsum blandit tortor, rutrum finibus augue velit in ex.</p>',
                          '<p>Donec non ligula suscipit, lacinia lacus et, hendrerit dui. Proin non dapibus risus. Phasellus blandit iaculis mi, quis tempus libero convallis vestibulum. Praesent id pharetra urna, sed dapibus nunc. Phasellus a dapibus velit. Ut augue ipsum, ultricies in rutrum at, placerat ut neque. Suspendisse quis felis semper, pharetra sapien at, aliquam eros. Aliquam vitae risus ac velit pharetra tincidunt. Sed fringilla viverra dolor, ut volutpat orci consectetur sit amet. Praesent id tincidunt turpis. Mauris gravida lectus eu pulvinar semper. Vivamus auctor sem rhoncus aliquet tincidunt. Aenean vitae rutrum sapien. Nunc commodo velit vel ante porttitor euismod.</p>',
                          '<p>Etiam sed ullamcorper eros, vel placerat enim. Fusce commodo dolor in nunc tincidunt, quis auctor nulla rhoncus. Donec egestas felis mauris, non rhoncus enim pretium eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum viverra nec enim nec tristique. Aliquam tempus fermentum sapien at sagittis. Morbi placerat vel lectus vel vehicula. Donec blandit erat ac ligula condimentum, sed feugiat velit dictum. In dapibus leo porttitor euismod blandit.</p>'
                      ].join(''),
                      created: '2012-12-21 00:00:00',
                      views: '199'
                  }
  
                  transition.next({
                      article: asyncData
                  })
              }, 500)
          }
      },
  
      watch: {
          'article': function(val, oldVal){
              this.breadcrumb.push({
                  name: val.title
              })
          }
      },
  
      components: {
          breadcrumb: require('breadcrumb'),
          'v-article': require('article')
      }
  })
  

});
