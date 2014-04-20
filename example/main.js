// RequireJS configuration.
require.config({
  urlArgs: 'bust=' + (new Date()).getTime(),

  map: {
    '*': {css: 'bower_components/require-css/css.js'}
  }
});

// Dependencies.
var dependencies = [
  // Bootstrap.
  'css!bower_components/bootstrap/dist/css/bootstrap.css',
  'css!bower_components/bootstrap/dist/css/bootstrap-theme.css',

  // AngularJS modules.
  'bower_components/angular-sanitize/angular-sanitize.js',
  'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',

  // The app.
  'css!styles.css',
  'main-controller.js'
];

// Load everything.
require(['bower_components/angular/angular.js'], function (angular) {
  require(dependencies);
})
