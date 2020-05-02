(function(){
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider){
    // Redirect to tab 1 if no other URL matches
    $urlRouterProvider.otherwise('/items/A');

    // Set up UI states
    $stateProvider
      .state('home', {
        url: '/',
        template: '<div><a ui-sref="categories">Categories</a></div>'
      })

      .state('categories', {
        url: '/categories',
        templateUrl: 'templates/categories.template.html',
        controller:'CatlistController as cmenu',
        resolve:{
          catlist : ['MenuDataService',function(MenuDataService){
              return MenuDataService.getAllCategories();
            }]
        }
      })

      .state('items', {
        url: '/items/{sname}',
        templateUrl: 'templates/items.template.html',
        controller:'ItemlistController as imenu',
        resolve:{
          itemlist : ['$stateParams','MenuDataService',function($stateParams,MenuDataService){
              return MenuDataService.getItemsForCategory($stateParams.sname);
            }]
        }
      });
  }

})();
