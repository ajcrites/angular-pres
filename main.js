function MainCtrl($scope) {
    $scope.message = "universe";
}

function FooterCtrl($scope, $interval) {
    $scope.time = Date.now();

    $interval(function () {
        $scope.time = Date.now();
    }, 1000);
}
