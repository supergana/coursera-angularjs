(function(){
  'use strict';
  angular.module('MenuApp')
  .controller('CatlistController',CatlistController)
  .controller('ItemlistController',ItemlistController);

  CatlistController.$inject = ['catlist'];
  function CatlistController (catlist){
    var vm = this;
    vm.categories = catlist.data;
    // vm.$onInit = function(){
    //   var promise = MenuDataService.getAllCategories();
    //   promise.then(function(response){
    //       console.log(response);
    //       vm.categories = response.data;
    //   })
    //   .catch(function(error){
    //     console.log(error.message);
    //   })
    // };
  }

  ItemlistController.$inject = ['itemlist'];
  function ItemlistController (itemlist){
    var vm = this;
    // console.log(itemlist);
    vm.itemlist = itemlist.data.menu_items;
  }


})();
