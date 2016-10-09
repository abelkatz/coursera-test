(function() {
  'use strict';

  angular.module('Data')
  .controller('MenuItemsController', MenuItemsController);

 MenuItemsController.$inject = ['items'];
 function MenuItemsController(items) {
    var catDetail = this;
    catDetail.menuItems = items.data.menu_items;
    catDetail.name = items.data.category.name;


     console.log(catDetail);


    };

})();
