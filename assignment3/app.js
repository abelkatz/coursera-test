(function () {
  'use strict';
  //debugger;

  angular.module('SearchMenuApp', [])
      .controller('MyCtrl', MyCtrl)
      .service('MenuCategoriesService', MenuCategoriesService)


  MyCtrl.$inject = ['$scope', '$filter','MenuCategoriesService'];
  function MyCtrl($scope, $filter, MenuCategoriesService) {
    {
//      debugger;

      console.log($scope);

      var promise = MenuCategoriesService.getMenu();

      promise.then(function (response) {
        var mymenu = response.data;
        var alldishes = mymenu.menu_items;
        console.log(alldishes);
//  menu.dishes = searchResults;
        $scope.items = alldishes;
        $scope.items2 = $scope.items;

        $scope.$watch('search', function (val) {
          $scope.items = $filter('filter')($scope.items2, val);
        });

      })




    }
  }
//fin myctrl
  MenuCategoriesService.$inject = ['$http']
  function MenuCategoriesService($http) {
    console.log("service");
    var service = this;

    service.getMenu = function () {
      var response = $http({
        method: "GET",
        url: ("http://davids-restaurant.herokuapp.com/menu_items.json"),
      });
      console.log("response");
      console.log(response);
      return response;
    };

  }
//fin




})();
