var app = angular.module("frontend-awesome", []);

app.controller("MainCtrl", ["$scope", function ($scope) {

}]);

app.controller("FooterCtrl", ["$scope", "$interval", function ($scope, $interval) {
    $scope.time = Date.now();

    $interval(function () {
        $scope.time = Date.now();
    }, 1000);
}]);
