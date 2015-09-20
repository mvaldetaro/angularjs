var app = angular.module("tableApp", []);

app.service("tableService", function ($http, $q){
  var deferred = $q.defer();
  $http.get('horas.json').then(function (data){
    deferred.resolve(data);
  });
  this.getTables = function (){
    return deferred.promise;
  }
})

.controller('tableCtrl', function($scope, tableService){
  var promise = tableService.getTables();
  promise.then(function(data){
    $scope.itens = data.data;
    //$scope.tablename = "teste";
    //console.log($scope.tablename);
    console.log($scope.itens);

    $scope.notSorted = function(obj){
      if (!obj) {
        return [];
      }
      return Object.keys(obj);
    }

    /*Object.size = function(obj) {
      var size = 0, key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) size++;
        }
      return size;
    }*/

    /*var myObject = $scope.itens[0];
    console.log(myObject);
    var size = Object.size(myObject);
    console.log(size);*/

  });
});
