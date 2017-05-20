(function(){
  'use strict';

  angular.module('myApp',[])

  .controller('myController',myController)
  .filter('loves',FilterFactory);
  myController.$inject=['$scope','$filter','lovesFilter'];
  function myController($scope,$filter,lovesFilter){
      $scope.name="";
      $scope.value=0;

      $scope.calculateValue=function(){
        var fvalue=0;
        for(var i=0;i<$scope.name.length;i++){
          fvalue=fvalue+$scope.name.charCodeAt(i);
        }
        $scope.value=fvalue;
      };

      $scope.say=function(){
        var msg="i likes to eat cookies";
        msg=lovesFilter(msg);
        return msg;
      }

      $scope.upCase=function(){
        var upper=$filter('uppercase');
        $scope.name=upper($scope.name);
      };
  };


  function FilterFactory(){
    return function(input){
      input=input || "";
      input=input.replace("likes","loves");
      return input;
    };
  }
})();
