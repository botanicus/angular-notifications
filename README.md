# About

Notifications for AngularJS.

# Usage

1. Register the module `var app = angular.module('app', ['notifications'])`.
2. Register the `Notifications` service: `app.controller('MainController', function ($scope, Notifications) { /* ... */ })`.
3. Initialise the module: `Notifications.register($scope)`. This will make sure `$scope` is always updated.
4. Create a notification: `Notifications.list.create("Testing, testing!", {sticky: true, type: 'success'})`.
5. Use the `notifications` directive to show all notifications like so: `<div notifications />`.

## Options

`logging`
`timeout`

## CSS Styles

The following classes are available:

```
.notification-success
.notification-warning
.notification-error
```

# Development

1. Install [bower](http://bower.io) and http-server: `npm install -g bower http-server`.
2. Start a local server `http-server -p 9000`.

## Example

[Example](http://localhost:9000/example/)

## Running Specs

### Unit Tests

Run `http-server -p 9000` and then open [specs.html](http://localhost:9000/specs.html) in your browser.

We're using [Protractor](https://github.com/angular/protractor) and [Jasmine](http://jasmine.github.io/2.0/introduction.html). To learn more about Protractor, read its [Getting Started Guide](https://github.com/angular/protractor/blob/master/docs/getting-started.md) and check out the [API](https://github.com/angular/protractor/blob/master/docs/api.md). More about [testing AngularJS apps](https://docs.angularjs.org/guide/unit-testing).

### Installation

```
webdriver-manager update
```

```
webdriver-manager start
./spec.js
```

# TODO

- Generate Documentation
- Style notifications like they are in leadsorama (`<button class="close" ng-click="removeNotification(notification)"> <i class="fa fa-times-circle"></i></button>`).
