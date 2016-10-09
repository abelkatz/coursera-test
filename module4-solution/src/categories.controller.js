(function () {
'use strict';

angular.module('Data')
.controller('CategoriesListController', CategoriesListController);


 CategoriesListController.$inject = ['items'];
 function CategoriesListController(items) {
//  console.log(items);
  var list =this;
  list.items = items.data;

  console.log(list.items);


};

})();
