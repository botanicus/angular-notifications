require(['angular-notifications', 'bower_components/angular-animate/angular-animate.js'], function () {
  var app = angular.module('app', ['notifications', 'ngAnimate']);

  app.controller('MainController', function ($scope, Notifications) {
    $scope.title = 'Notifications Test';

    $scope.startTime = new Date().getTime();

    $scope.bustify = function (path) {
      return path + '?bust=' + this.startTime;
    };
  });

  app.controller('NotificationsController', function ($scope, Notifications) {

    // Link scope.notifications and register update hooks.
    Notifications.logging = true;
    Notifications.register($scope);

    Notifications.list.create("Testing, testing!", {sticky: true, type: 'success'});
    Notifications.list.create("You are logged in now.", {type: 'success'});
    Notifications.list.create("We think your email could be outdated.", {type: 'warning'});
    Notifications.list.create("Your order was cancelled!", {type: 'error'});


    $scope.template = {
      message: "You are being notified.",
      options: {type: 'success'},
      types: ['success', 'warning', 'error']
    };

    $scope.notifyMe = function () {
      var message = this.template.message;
      var options = this.template.options;
      var notification = Notifications.list.create(message, options);

      console.log(notification);

      // So we won't change an already created notification.
      this.template = angular.copy(this.template);
    };
  });

  // Bootstrap the AngularJS app.
  //
  // This is done here because we have to
  // wait for all the dependencies to load.
  console.log("Bootstrapping ...");
  angular.bootstrap(document, ['app']);
});
