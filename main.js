var app = angular.module("frontend-awesome", []);

app.factory('Messages', function () {
    return {message: "Service"};
});

app.directive("counterHandler", function () {
    return {
        // Can remove link
        link: function (scope, element) {
            console.log("linked up");
            element.bind("click", function () {
                console.log("clicked");
            });
        },
    };
});

app.controller("MainCtrl", ["$scope", "Messages", function ($scope, Messages) {
    $scope.data = Messages;
    // Also update html `data.message` -> `message`
    // $scope.message = Messages.message;
}]);

app.controller("FooterCtrl", ["$scope", "$interval", "Messages", function ($scope, $interval, Messages) {
    $scope.time = Date.now();
    $scope.data = Messages;

    $interval(function () {
        $scope.time = Date.now();
    }, 1000);
}]);
