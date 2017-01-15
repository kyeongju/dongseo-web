angular.module("user.controller",[])
.controller("userCtrl",['$scope','$http','UserService',function ($scope, $http, users) {
    $scope.people=[];
    users.getUser()
    .then(function (data) {
        $scope.people=data.data.data;
    });
}]);