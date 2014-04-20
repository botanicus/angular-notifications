var app = angular.module('app', ['notifications']);

require(['angular-notifications.js'], function () {
  app.controller('MainController', function ($scope, Notifications) {
    $scope.title = 'Notifications Test';

    $scope.$on('notifications.loaded', function (event) {
      // Link scope.notifications and register update hooks.
      //Notifications.logging = true;
      Notifications.register($scope);

      Notifications.list.create("Testing, testing!", {sticky: true, type: 'success'});
      Notifications.list.create("You are logged in now.", {type: 'success'});
      Notifications.list.create("We think your email could be outdated.", {type: 'warning'});
      Notifications.list.create("Your order was cancelled!", {type: 'error'});
    });
  });

  // Bootstrap the AngularJS app.
  console.log("Bootstrapping ...");
  angular.bootstrap(document, ['app']);
});
