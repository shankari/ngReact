var app = angular.module('app', ['react']);

app.controller('mainCtrl', function ($scope) {
$scope.person = { fname: 'Clark', lname: 'Kent' };
});

app.directive('hello', function (reactDirective) {
return reactDirective(Hello);
});
