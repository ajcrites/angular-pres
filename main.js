function MainCtrl($scope, $timeout) {
    $scope.message = "universe";

    $timeout(function () {
        alert("hello!");
    }, 1000);
}
