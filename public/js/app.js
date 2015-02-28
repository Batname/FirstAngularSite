(function() {

var app;

app = angular.module('AngularDev', ['ngRoute', 'home.module', 'news.module', 'common.module', 'pasvaz.bindonce']);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
      .otherwise({
        redirectTo: '/'
      });
})

app.constant('RESOURCES', (function() {
  // Define your variable
  var resource = 'http://localhost:2015';
  // Use the variable in your constants
  return {
    DOMAIN: resource,
    CONFIG_API: resource + '/main_config',
    FEEDBACK_API: resource + '/feedback'
  }
})());

app.constant('LOCALIZATION', (function() {
  return {
    DEFAULT: "en"
  }
})());


}).call(this);    
