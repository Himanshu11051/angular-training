var app = angular.module('genesisApp').controller('homeCtrl',function($scope,$state){
    $scope.gotoHome = function(){
        $state.go('home');
    };
    $scope.gotoDashboard = function(){
        $state.go('home.dashboard');
    };
    $scope.gotoProfile = function(){
        $state.go('home.profile');
    };
    $scope.logout = function(){
        $state.go('login');
    };
});