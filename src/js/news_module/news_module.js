(function() {

var app;

app = angular.module('news.module', ['ngRoute'])
app.config(function ($routeProvider) {
  $routeProvider
      .when('/news', {
        title: 'AngularDev news',
        templateUrl: 'views/news/home.html',
        controller: 'NewsCtrl'
      });
});

}).call(this);
