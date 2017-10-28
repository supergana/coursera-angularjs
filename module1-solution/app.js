(function(){
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.lunchlist = "";

    $scope.checkitems = function(){
      if($scope.lunchlist.trim().length==0){
        $scope.state = "Please enter data first"
      }else{
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
  }
})();
