(function () {
  'use strict';

  angular.module('SearchMenuApp', [])
      .controller('MyCtrl', MyCtrl)
      .service('MenuCategoriesService', MenuCategoriesService);

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
//promise

      console.log("mymenu");
//      console.log($scope.items);

      /*
       $scope.items = [
       {id:1, name:'John'},
       {id:2, name:'Steve'},
       {id:3, name:'Joey'},
       {id:4, name:'Mary'},
       {id:5, name:'Marylin'}];
       */




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
