"use strict"

app = angular.module('home.module')
app.controller 'home.controller', [
  '$scope'
  '$translate'
  'common.config'
  ($scope, $translate, commonConfig) ->
    commonConfig.getMainConfig().success((data) ->
      $scope.config = data
    ).error ->
      alert 'error'

    $scope.changeLanguage = (langKey) ->
      $translate.use langKey
]