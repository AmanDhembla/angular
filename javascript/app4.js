(function(){
  'use strict';
  angular.module('Sapp',[])
  .controller('createList',createList1)
  .controller('showList',createList2)
  .factory('Fname',CustomFactory)
  .directive('listDirective',listDirective);

  function listDirective(){
    var ddo={

      templateUrl:'data.html',
      scope:{
        ctrl: '=itemList'
      }
    }
    return ddo;
  }

  createList1.$inject=['Fname'];

  function createList1(Fname){
    var ctrl1=this;
    var CustomService1=Fname();
    ctrl1.name="";
    ctrl1.quantity="";
    try{
    ctrl1.ADD=function(){
      if(ctrl1.name!==""&&ctrl1.quantity!==""){
      CustomService1.addItem(ctrl1.name,ctrl1.quantity);
      // ctrl1.name="";
      // ctrl1.quantity="";
    }
  }}catch(error){
    ctrl1.ERROR=error.message;
  }

      ctrl1.items=CustomService1.showItem();

    ctrl1.REMOVE=function(index){
      CustomService1.removeItem(index);
    }

  }
  createList2.$inject=['Fname'];

  function createList2(Fname){
    var ctrl2=this;
    // console.log(ctrl2);
    // console.log(this);
    var CustomService2=Fname(3);

    ctrl2.name="";
    ctrl2.quantity="";

    ctrl2.ADD=function(){
      try{
      if(ctrl2.name!==""&&ctrl2.quantity!==""){
      CustomService2.addItem(ctrl2.name,ctrl2.quantity);
      ctrl2.name="";
      ctrl2.quantity="";
    }
  }catch (error) {
      ctrl2.errorMessage = error.message;
    }
}
      ctrl2.items=CustomService2.showItem();

    ctrl2.REMOVE=function(index){
      CustomService2.removeItem(index);
    }

  }

  function CustomService(maxItems){

    var service= this;
    var items=[];
    service.addItem=function(name,quantity){
      if(maxItems===undefined || items.length < maxItems){
        var item={
          name:name,
          quantity:quantity
        };
        items.push(item);
    }
    else{
      console.log("hello");
      throw new Error('max number of items that can be added exceeded');
    }
    }

    service.removeItem=function(index){
      if(index<items.length){
        items.splice(index,1);
    }
    else
      return "invalid index";
  }

    service.showItem=function(){
      return items;
    }

  }

  function CustomFactory(){
    var factory=function(maxItems){
      return new CustomService(maxItems);
    }
    return factory;
  }
})();
