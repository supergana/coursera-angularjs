(function(){
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.lunchlist = "a,b,c";

    $scope.checkitems = function(){
      var lunchitems = $scope.lunchlist.split(',');
      var itemcount=0,i=0;
      for(i=0;i<lunchitems.length;i++){
        if(lunchitems[i].trim().length > 0){
          itemcount++
        }

        if(itemcount > 3){
          $scope.state = "Too much!"
          break;
        }else{
          $scope.state = "Enjoy!"
        }
      }
    }
  }
})();
