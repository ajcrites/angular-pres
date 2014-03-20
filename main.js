var app = angular.module("frontend-awesome", []);

app.directive("foo", function () {
    return {
        link: function (scope, elem, attrs) {
            scope.foo = attrs.foo;
        },
        // scope: {},
        template: "{{foo}}",
    };
});
