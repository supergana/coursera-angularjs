(function(){
  'use strict';

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems',FoundItems);

  function FoundItems(){
    var ddo = {
      templateUrl : 'itemsloaderindicator.template.html',
      scope:{
          list:"<displayList",
          onRemove:'&'
      }
    };

    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
     var vm = this;
     vm.searchTerm = "";
     vm.foundItems = [];
     vm.message = "";

     vm.getMatchedMenuItems = function(){
       vm.message = "";
       if(vm.searchTerm == ""){
         vm.foundItems = [];
         vm.message = "Nothing found";
       }else{
         var promise = MenuSearchService.getMatchedMenuItems(vm.searchTerm);
         promise.then(function (response){
           vm.foundItems = response.menu_items;
           // console.log(vm.foundItems);

           if(vm.foundItems.length == 0){
             vm.message = "Nothing found";
           }
           // console.log(response);
         })
         .catch(function(error){
           vm.message = error.message;
         })
       }
     };

     vm.removeItem = function(index){
       vm.foundItems.splice(index,1);
     };
  }

  //Service
  MenuSearchService.$inject = ['$q','$http','ApiBasePath'];
  function MenuSearchService($q,$http,ApiBasePath){
    var service = this;

    service.getAllMenuItems = function (){
      var items = $http({
        method:"GET",
        url:(ApiBasePath + "/menu_items.json")
      });
      return items;
    };

    service.getMatchedMenuItems = function(searchTerm){
      var found = [];
      var allItems = service.getAllMenuItems();
      var deferred = $q.defer();
      var result = {
        menu_items:found,
        message:""
      };

      allItems
      .then(function(response){
          var items = response.data;
          items.menu_items.forEach((item, i) => {
            if(item.description.indexOf(searchTerm) > 0){
                found.push({name: item.name,
                          short_name: item.short_name,
                          description: item.description});
              // console.log(item.description);
            }
          });
          deferred.resolve(result)
      })
      .catch(function(error){
          result.message = error
          deferred.reject(result);
      });

      return deferred.promise;
    };

  }

})();
