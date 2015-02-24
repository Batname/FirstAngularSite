(function() {

var app;

app = angular.module('AngularDev', ['ngRoute', 'home.module', 'news.module'])

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
      .otherwise({
        redirectTo: '/'
      });
})
}).call(this);    