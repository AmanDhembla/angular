(function(){
  'use strict';

  var shoppingList1=["colgate","brush","sugar","salt","chilli powder","honey"];

  var shoppingList2=[
    {
      name:"ladoo",
      quantity:50
    },
    {
      name:"barfi",
      quantity:100
    }
];
  angular.module('to_do_list',[])

  .controller('listController',listController);

  listController.$inject=['$scope'];
  function listController($scope){
    $scope.shoppingList1=shoppingList1;
    $scope.shoppingList2=shoppingList2;
    $scope.search="";
    $scope.save_to_list=function(){
      var item={
        name:$scope.item_name,
        quantity:$scope.item_quantity
      };
      shoppingList2.push(item);
    }
  }
})();
