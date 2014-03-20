var app = angular.module("frontend-awesome", []);

app.directive("foo", function () {
    return {
        scope: {
            "foo": "@"
        },
        template: "{{foo}}",
    };
});
