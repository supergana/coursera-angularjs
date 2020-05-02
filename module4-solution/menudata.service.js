(function(){
  'use strict';

  angular.module('Data')
  .service('MenuDataService',MenuDataService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")

  //Service
  MenuDataService.$inject = ['$http','ApiBasePath'];
  function MenuDataService($http,ApiBasePath){
    var service = this;

    service.getAllCategories = function (){
      var categories = $http({
        method:"GET",
        url:(ApiBasePath + "/categories.json")
      });
      // console.log(categories);
      return categories;
    };

    service.getItemsForCategory = function(category){
      // console.log("category" + category);
      var items = $http({
        method:"GET",
        url:(ApiBasePath + "/menu_items.json?category=" + category)
      });
      // console.log(items);
      return items;
//      return [];
    };
  }

})();
