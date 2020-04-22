(function(){
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShopListChkoff',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShopListChkoff'];
  function ToBuyController(ShopListChkoff){
     var tobuy = this;
     tobuy.items = ShopListChkoff.getToBuyItems();
     tobuy.buyItem = function(index){
       ShopListChkoff.buyItem(index);
     };
  }

  AlreadyBoughtController.$inject = ['ShopListChkoff'];
  function AlreadyBoughtController(ShopListChkoff){
    var bought = this;
    bought.items = ShopListChkoff.getBoughtItems();
  }

  //Service
  function ShoppingListCheckOffService(){
    var service = this;

    var toBuy = [{name:"Cookies",quantity: "5 boxes"},{name:"Cakes",quantity: "3 boxes"},{name:"Chips",quantity: "2 packets"},{name:"Softdrinks",quantity: "6 bottles"},{name:"Candies",quantity: "2 boxes"}];
    var bought = [];

    service.buyItem = function (index){
      var item = {
        name: toBuy[index].name,
        quantity: toBuy[index].quantity
      };

      //add code to move from ToBuy to bought
      bought.push(item);

      //splice from ToBuy
      toBuy.splice(index,1);
    };

    service.getToBuyItems = function(){
      return toBuy;
    };

    service.getBoughtItems = function(){
      return bought;
    };
  }

})();
