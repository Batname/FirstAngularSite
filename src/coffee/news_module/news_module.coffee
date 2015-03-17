module.exports = ->

  app = angular.module('news.module', [
    'ui.router'
  ])

  app.config(['$stateProvider', ($stateProvider)->
    
    $stateProvider.state "news",
      url: "/news"
      templateUrl: 'views/news/home.html'
      controller: 'news.controller'
  ])