"use strict"

app = angular.module('home.module', [
  'ngRoute'
  'pascalprecht.translate'
])
app.config [
  '$routeProvider'
  '$translateProvider'
  '$translatePartialLoaderProvider'
  ($routeProvider, $translateProvider, $translatePartialLoaderProvider) ->
    $routeProvider.when '/',
      title: 'AngularDev Home'
      templateUrl: 'views/home/home.html'
      controller: 'home.controller'
    $translatePartialLoaderProvider.addPart 'home'
    $translateProvider.useLoader '$translatePartialLoader', urlTemplate: '/i18n/{part}/{lang}.json'
    $translateProvider.preferredLanguage 'en'
]