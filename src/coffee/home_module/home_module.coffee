module.exports = ->

  app = angular.module('home.module', [
    'pascalprecht.translate'
    'ui.router'
  ])
  app.config [
    '$translateProvider'
    '$translatePartialLoaderProvider'
    '$stateProvider'
    ($translateProvider, $translatePartialLoaderProvider, $stateProvider) ->
      
      $stateProvider.state "home",
        url: "/"
        templateUrl: 'views/home/home.html'
        controller: 'home.controller'

      $translatePartialLoaderProvider.addPart 'home'
      $translateProvider.useLoader '$translatePartialLoader', urlTemplate: '/i18n/{part}/{lang}.json'
      $translateProvider.preferredLanguage 'en'
  ]