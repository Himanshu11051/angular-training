var app = angular.module('login').controller('loginCtrl',function($scope,$state){
    $scope.login = function(){
        $state.go('home.dashboard');
    };
  });