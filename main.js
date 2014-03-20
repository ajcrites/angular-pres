var app = angular.module("frontend-awesome", []);

app.factory('Messages', function () {
    return {message: "Service"};
});

app.directive("counterHandler", function () {
    return function (scope, element, attrs) {
        element.bind("click", function () {
            scope.$apply(attrs.counterHandler);
        });
    };
});

app.controller("MainCtrl", ["$scope", "Messages", function ($scope, Messages) {
    $scope.data = Messages;
    // Also update html `data.message` -> `message`
    // $scope.message = Messages.message;

    $scope.changeMessage = function (data) {
        data.message = "clicked";
    };
}]);

app.controller("FooterCtrl", ["$scope", "$interval", "Messages", function ($scope, $interval, Messages) {
    $scope.time = Date.now();
    $scope.data = Messages;

    $interval(function () {
        $scope.time = Date.now();
    }, 1000);
}]);
