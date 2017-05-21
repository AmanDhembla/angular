(function(){
'use strict';

  angular.module('trial',[])

  .controller('pCtrl',pCtrl);

  pCtrl.$inject=['$scope'];

  function pCtrl($scope){
    var parent={
      name:"aman",
      obj:{
        ObjValue:10
      },
      say:function(){
        console.log("hello");
      }
    }

    //var child=new Object(parent);
    var child=Object.create(parent);
    console.log(child.name);
    child.name="yo yo";
    child.obj={

    };
    console.log(child.name);
    console.log(child.obj.ObjValue);
    console.log(parent.name);
    console.log(parent.obj.ObjValue);
    console.log(parent);
    console.log(child);
  }
})();
