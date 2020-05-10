(function () {
"use strict";

angular.module('common')
.component('myinfo', {
  templateUrl: 'src/public/signup/myinfo_component.html',
  controller: MyInfoController
});


MyInfoController.$inject = ['RegistrationService','ApiPath'];
function MyInfoController(RegistrationService,ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  // console.log("In component controller:" + RegistrationService.fname);
  // console.log(RegistrationService);
  $ctrl.fname = RegistrationService.fname;
  $ctrl.lname = RegistrationService.lname;
  $ctrl.email = RegistrationService.email;
  $ctrl.phone = RegistrationService.phone;
  $ctrl.favItemName = RegistrationService.favItemName;
  $ctrl.favItemSName = RegistrationService.favItemSName;
  $ctrl.favItemDesc = RegistrationService.favItemDesc;

}

})();
