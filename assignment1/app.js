(function () {
'use strict';

angular.module('LunchAdvisor', [])

.controller('LunchCaculatorController', function ($scope) {
  $scope.lunch = "apple, banana, pear";
  $scope.totalValue = "";
  $scope.lunch_state = "Please enter data first"

  $scope.CheckMenu = function () {
    var lunchtocheck = $scope.lunch;
    var items = [];
    var items_number = 0;
    var items_number_with_data = 0;
    var j = 0;
    if (lunchtocheck == ""){
      $scope.lunch_state = "Please enter data first";
    }else{
      items = lunchtocheck.split(',');
      items_number = items.length;
      items_number_with_data = items_number;
      for(j=0;j<items_number;j++){
        if (items[j].trim() =="") {items_number_with_data--;}
      }
      console.log(items_number_with_data);
      if (items_number_with_data == 0){
        $scope.lunch_state = "Please enter data first";
      }
      else if (items_number_with_data < 4){
        console.log(items_number_with_data);
        $scope.lunch_state = "Enjoy!";
      }else{
        $scope.lunch_state = "To Much!";
      }

    }
  };



});

})();
