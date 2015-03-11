"use strict"


app = angular.module('news.module', ['ngRoute'])
app.config(['$routeProvider', ($routeProvider)->
  $routeProvider
      .when('/news', {
        title: 'AngularDev news'
        templateUrl: 'views/news/home.html'
        controller: 'news.controller'
      })
])


