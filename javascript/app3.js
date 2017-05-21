(function(){
  'use strict';
  angular.module('Sapp',[])
  .controller('createList',createList)
  .controller('showList',showList)
  .service('CustomService',CustomService);

  createList.$inject=['CustomService'];

  function createList(CustomService){
    var cList = this;
    cList.name="";
    cList.quantity="";
    cList.add=function(){
      if(cList.name!==""&&cList.quantity!==""){
      CustomService.addItem(cList.name,cList.quantity);
      cList.name="";
      cList.quantity="";
      }
    }
  }
  showList.$inject=['CustomService'];
  function showList(CustomService){
    var sList=this;
    sList.items=CustomService.showItem();

    sList.action=function(index){
      CustomService.removeItem(index);
    }
  }

  function CustomService(){

    var service= this;
    var items=[];
    service.addItem=function(name,quantity){
      //console.log(this);
      var item={
        name:name,
        quantity:quantity
      };
      items.push(item);
    }

    service.removeItem=function(index){
      items.splice(index,1);
    }

    service.showItem=function(){
      return items;
    }

  }
})();
