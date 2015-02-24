(function() {

var app;

app = angular.module('home.module', ['ngRoute'])
app.config(function ($routeProvider) {
  $routeProvider
      .when('/', {
        title: 'AngularDev Home',
        templateUrl: 'views/home/home.html',
        controller: 'HomeCtrl'
      });
});

}).call(this);
