(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListShowController1', ShoppingListShowController1)
.controller('ShoppingListShowController', ShoppingListShowController)
.service('ShoppingListService', ShoppingListService);

ShoppingListShowController1.$inject = ['ShoppingListService'];
function ShoppingListShowController1(ShoppingListService) {
  var showList1 = this;
  showList1.items1 = ShoppingListService.getItems1();

}


ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var showList = this;

  showList.items = ShoppingListService.getItems();

  showList.moveItem = function (itemIndex) {
    ShoppingListService.moveItem(itemIndex);
  };
}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  //  var items = [];
  var items = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Potato Chips",
      quantity: "6"
    },
    {
      name: "Snacks",
      quantity: "8"
    },
    {
      name: "Soda",
      quantity: "10"
    }



  ];

  var items1 = [];

  service.moveItem = function (itemIdex) {
    var item = items[itemIdex];
    items1.push(item);
    items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };

  service.getItems1 = function () {
    return items1;
  };

}

})();
