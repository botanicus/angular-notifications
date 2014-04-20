define(function () {
  var module = angular.module('notifications', []);

  // Read discussion under http://kirkbushell.me/when-to-use-directives-controllers-or-services-in-angular/
  // it's unclear whether we should use service or factory.
  module.service('Notifications', function ($rootScope, $timeout) {
    var service = {};

    require(['notifications.js'], function (library) {

      /* Hooks */
      library.register = function (scope) {
        scope.$on('notifications.update', function (event) {
          library.log("Notifications updated:", scope.notifications);
          if (scope.$$phase != '$apply') scope.$apply();
        });

        scope.notifications = library.list.collection;
      };

      library.NotificationList.prototype.broadcast = function () {
        $rootScope.$broadcast('notifications.update');
      };

      service.__proto__ = library;

      $rootScope.$broadcast('notifications.loaded');
    });

    return service;
  });


  module.directive('notifications', function () {
    return {
      templateUrl: 'notifications.html'
    };
  });
});
