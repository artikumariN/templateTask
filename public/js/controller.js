
var myApp = angular.module('myApp',['ui.router']);

myApp.controller('myCtrl',function($scope,$http){

});

myApp.controller('userController',function($scope,$http){

  $http({
        method : "GET",
        url : "/people"
    }).then(function mySucces(response) {
        $scope.myWelcome = response.data;
        $scope.userData=response.data;
        console.log(response.data);
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
        console.log(response.data);
    });
});

myApp.controller('templateController', function ($scope,$http) {


  // Editor options.
  $scope.options = {
    language: 'en',
    allowedContent: true,
    entities: false
  };

  // Called when the editor is completely ready.
  $scope.onReady = function () {
    // ...
  };

  $scope.addTemplate=function(){
    var name=$scope.name;
    var data = CKEDITOR.instances.editor1.getData();

    $http({
          method : "post",
          url   : "/addNewTemplate",
          data  : {name: name}
      }).then(function mySucces(response) {
          console.log(response);
      }, function myError(response) {
          console.log(response);
      });


  }
});
