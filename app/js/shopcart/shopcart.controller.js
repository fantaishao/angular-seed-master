'use strict';

angular.module('myApp',[])
.controller('shopCartCtrl',['$scope', function($scope) {
  //购物车信息
  $scope.datas = [
    {id:'1',name:'蜂蜜',price: 50,count: 1,add: '+', reduce: '-'},
    {id:'2',name:'黄豆酱',price: 77.5,count: 1,add: '+', reduce: '-'},
    {id:'3',name:'牛奶',price: 60,count: 1,add: '+', reduce: '-'}
  ];
  var len = $scope.datas.length;
  $scope.TotalNum = 0;
  $scope.TotalPrice = 0;

  //点击'+'增加数量
  $scope.addNum = function($index) {
    for(i=0;i<len;i++) {
      if(i===$index) {
        $scope.datas[i].count++;
        break;
      }
    }
    getNum();
    getTotal();
  };
  //点击"-"减少数量
  $scope.reduceNum = function($index) {
    for(i=0;i<len;i++) {
      if(i==$index && $scope.datas[i].count!=0) {
        $scope.datas[i].count--;
        break;
      }
    }
    getNum();
    getTotal();
  };
  //删除商品
  $scope.delProduct = function(index) {
  if($scope.datas[index]) {
    $scope.datas.splice(index,1);
  }
    getNum();
    getTotal();
  }
  //商品总数量

 var getNum = function() {
   $scope.TotalNum = 0;
   for(i=0;i<len;i++) {
     $scope.TotalNum = $scope.TotalNum + $scope.datas[i].count;
   }
   return $scope.TotalNum;
 }
   getNum();
  //商品的总价
  var  getTotal = function() {
    $scope.TotalPrice = 0;
    for(i=0;i<len;i++) {
      $scope.TotalPrice = $scope.TotalPrice + $scope.datas[i].price * $scope.datas[i].count;
    }
    return $scope.TotalPrice;
  }

  getTotal();

}]);
