(function () {
  'use strict';
  //debugger;

  angular.module('SearchMenuApp', [])
      .controller('MyCtrl', MyCtrl)
      .service('MenuCategoriesService', MenuCategoriesService)
      .factory('ShoppingListFactory', ShoppingListFactory)
      .directive('foundItems', foundItemsDirective);

  foundItemsDirective.$inject = ['ShoppingListFactory'];
  function foundItemsDirective(ShoppingListFactory) {

    console.log("in directive");
//    console.log($scope);
    var ddo = {
      templateUrl: 'loader/itemsloaderindicator.template.html',
      scope: {
        list: '<',
        onRemove: '&'
      },
      controller: foundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true,
      link: foundItemsDirectiveLink
        ,transclude: true
    };
    console.log(ddo);

    console.log("finish directive");

    return ddo;
  }


  function foundItemsDirectiveLink(scope, element, attrs, controller,$filter) {
    console.log("en foundItemsDirectiveLink");

    console.log("Link scope is: ", scope);
    console.log("Controller instance is: ", controller);
    console.log("Element is: ", element);

    scope.$watch('search', function (val) {
      scope.items = scope.items2;
    });

    function displayCookieWarning() {
      // Using Angular jqLite
      // var warningElem = element.find("div");
      // warningElem.css('display', 'block');

      // If jQuery included before Angular
      var warningElem = element.find("div.error");
      warningElem.slideDown(900);
    }

    function removeCookieWarning() {
      // Using Angular jqLite
      // var warningElem = element.find('div');
      // warningElem.css('display', 'none');

      // If jQuery included before Angular
      var warningElem = element.find('div.error');
      warningElem.slideUp(900);
    }
  }


  foundItemsDirectiveController.$inject = ['MenuCategoriesService'];
  function foundItemsDirectiveController(MenuCategoriesService) {

    console.log("en directivecontroller");

    var promise = MenuCategoriesService.getMenu();

    promise.then(function (response) {
      var mymenu = response.data;
      var list = mymenu.menu_items;
      console.log("en directive all dishes");
      console.log(list);
//  menu.dishes = searchResults;
      list.removeItem = function (itemIndex) {
        console.log("'this' is: ", this);
        this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
//      shoppingList.removeItem(itemIndex);
        console.log("should shoppingList.removeItem(itemIndex)");
        this.title = origTitle + " (" + list.items.length + " items )";
      };


    })





  }









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


  function ShoppingListFactory() {
    var factory = function (maxItems) {
//      return new ShoppingListService(maxItems);
      return 10;
    };

    return factory;
  }


})();
