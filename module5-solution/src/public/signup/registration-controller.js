(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService','RegistrationService'];
function RegistrationController(MenuService,RegistrationService) {
  var $ctrl = this;
  $ctrl.MenuService = MenuService;
  $ctrl.RegistrationService = RegistrationService;

  $ctrl.submit = function () {

    $ctrl.favItemName="";
    var menu_items;
    var found = false;//by default set it to false

    var promise = MenuService.getMenuItems();
    promise.then(function (response){
      menu_items = response.menu_items;
      if(menu_items.length > 0){
        menu_items.forEach((item, i) => {
          if(item.short_name === $ctrl.user.favItem){
            found = true;
            $ctrl.favItemName = item.name;

            //set the registration values in service for retrival in MyInfo screen
            $ctrl.RegistrationService.fname = $ctrl.user.fname;
            $ctrl.RegistrationService.lname = $ctrl.user.lname;
            $ctrl.RegistrationService.email = $ctrl.user.email;
            $ctrl.RegistrationService.phone = $ctrl.user.phone;
            $ctrl.RegistrationService.favItemName = $ctrl.favItemName;
            $ctrl.RegistrationService.favItemSName = item.short_name;
            $ctrl.RegistrationService.favItemDesc = item.description;

            // console.log($ctrl.RegistrationService);
          }
        });

        $ctrl.error = !found;
      }
    })
    .catch(function(error){
      //do nothing
    })
  };
}

})();
