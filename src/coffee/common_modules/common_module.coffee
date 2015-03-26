module.exports = ->

  app = angular.module('common.module', [
    'pascalprecht.translate'
    'ngResource'
    'ngAnimate'
    'mgcrea.ngStrap'
  ])
  app.config [
    '$translateProvider'
    '$translatePartialLoaderProvider'
    ($translateProvider, $translatePartialLoaderProvider) ->
      
      $translatePartialLoaderProvider.addPart 'common'
      $translateProvider.useLoader '$translatePartialLoader', urlTemplate: '/i18n/{part}/{lang}.json'
      $translateProvider.preferredLanguage 'en'
  ]