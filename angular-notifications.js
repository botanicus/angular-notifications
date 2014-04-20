define(['notifications'], function (service) {
  var module = angular.module('notifications', []);

  // Read discussion under http://kirkbushell.me/when-to-use-directives-controllers-or-services-in-angular/
  // it's unclear whether we should use service or factory.
  module.service('Notifications', function ($rootScope, $timeout) {

    /* Hooks */
    service.register = function (scope) {
      scope.$on('notifications.update', function (event) {
        service.log("Notifications updated:", scope.notifications);
        if (scope.$$phase != '$apply') scope.$apply();
      });

      scope.notifications = service.list.collection;
    };

    service.NotificationList.prototype.broadcast = function () {
      $rootScope.$broadcast('notifications.update');
    };

    return service;
  });

  // Notifications directive.
  module.directive('notifications', function () {
    return {
      templateUrl: 'notifications.html'
    };
  });
});
