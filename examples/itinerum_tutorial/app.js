var app = angular.module('app', ['react']);

app.controller('mainCtrl', function ($scope) {
  $scope.person = { fname: 'Clark', lname: 'Kent' };
});

app.directive('tutorial', function (reactDirective) {
  return reactDirective(TutorialComponent);
});
