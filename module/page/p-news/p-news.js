define('page/p-news', function(require, exports, module) {

  /* 
  * @Author: seven
  * @Date:   2016-01-09 05:16:18
  */
  
  'use strict'
  
  
  
  module.exports = Vue.extend({
      template: "\r\n\r\n<div class=\"page page-posts\">\r\n    <v-header></v-header>\r\n    <div class=\"page_main\">\r\n        <breadcrumb :items=\"breadcrumb\"></breadcrumb>\r\n\r\n        <div class=\"container p-news_articles\">\r\n            <articles :articles=\"articles\"></articles>\r\n        </div>\r\n\r\n    </div>\r\n    <v-footer></v-footer>\r\n</div>\r\n",
      data: function(){
          return {
              breadcrumb: [{
                  name: 'home',
                  link: '/home'
              },{
                  name: 'news',
                  link: null
              }],
  
              articles: [{
                  id: 1,
                  title: 'title1',
                  created: '2012-12-21 00:00:00',
                  views: '199',
                  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend nunc lacus, a commodo turpis convallis faucibus. Aenean dictum ullamcorper metus vel maximus. Cras lobortis nec erat sed vehicula. Cras id quam risus. Pellentesque vitae diam a nibh hendrerit feugiat at et ex. Fusce semper aliquet diam, eget accumsan urna ornare eu. Vestibulum at mauris interdum ante hendrerit interdum nec ut lectus. Praesent eleifend felis non augue convallis consectetur.'
              },{
                  id: 2,
                  title: 'title2',
                  created: '2012-12-21 00:00:00',
                  views: '199',
                  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend nunc lacus, a commodo turpis convallis faucibus. Aenean dictum ullamcorper metus vel maximus. Cras lobortis nec erat sed vehicula. Cras id quam risus. Pellentesque vitae diam a nibh hendrerit feugiat at et ex. Fusce semper aliquet diam, eget accumsan urna ornare eu. Vestibulum at mauris interdum ante hendrerit interdum nec ut lectus. Praesent eleifend felis non augue convallis consectetur.'
              },{
                  id: 3,
                  title: 'title3',
                  created: '2012-12-21 00:00:00',
                  views: '199',
                  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend nunc lacus, a commodo turpis convallis faucibus. Aenean dictum ullamcorper metus vel maximus. Cras lobortis nec erat sed vehicula. Cras id quam risus. Pellentesque vitae diam a nibh hendrerit feugiat at et ex. Fusce semper aliquet diam, eget accumsan urna ornare eu. Vestibulum at mauris interdum ante hendrerit interdum nec ut lectus. Praesent eleifend felis non augue convallis consectetur.'
              },{
                  id: 4,
                  title: 'title4',
                  created: '2012-12-21 00:00:00',
                  views: '199',
                  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend nunc lacus, a commodo turpis convallis faucibus. Aenean dictum ullamcorper metus vel maximus. Cras lobortis nec erat sed vehicula. Cras id quam risus. Pellentesque vitae diam a nibh hendrerit feugiat at et ex. Fusce semper aliquet diam, eget accumsan urna ornare eu. Vestibulum at mauris interdum ante hendrerit interdum nec ut lectus. Praesent eleifend felis non augue convallis consectetur.'
              },{
                  id: 5,
                  title: 'title5',
                  created: '2012-12-21 00:00:00',
                  views: '199',
                  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend nunc lacus, a commodo turpis convallis faucibus. Aenean dictum ullamcorper metus vel maximus. Cras lobortis nec erat sed vehicula. Cras id quam risus. Pellentesque vitae diam a nibh hendrerit feugiat at et ex. Fusce semper aliquet diam, eget accumsan urna ornare eu. Vestibulum at mauris interdum ante hendrerit interdum nec ut lectus. Praesent eleifend felis non augue convallis consectetur.'
              },{
                  id: 6,
                  title: 'title6',
                  created: '2012-12-21 00:00:00',
                  views: '199',
                  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend nunc lacus, a commodo turpis convallis faucibus. Aenean dictum ullamcorper metus vel maximus. Cras lobortis nec erat sed vehicula. Cras id quam risus. Pellentesque vitae diam a nibh hendrerit feugiat at et ex. Fusce semper aliquet diam, eget accumsan urna ornare eu. Vestibulum at mauris interdum ante hendrerit interdum nec ut lectus. Praesent eleifend felis non augue convallis consectetur.'
              },]
          }
      },
  
      components: {
          breadcrumb: require('breadcrumb'),
          articles: require('articles')
      }
  
  })
  

});
