(function(){
  'use strict';

  angular.module('myApp',[])

  .controller('myController',function($scope){
      $scope.name="";
      $scope.value=0;

      $scope.calculateValue=function(){
        var fvalue=0;
        for(var i=0;i<$scope.name.length;i++){
          fvalue=fvalue+$scope.name.charCodeAt(i);
        }
        $scope.value=fvalue;
      };
  });
})();
