"use strict"

app = angular.module('AngularDev', [
  'ngRoute'
  'home.module'
  'news.module'
  'common.module'
  'pasvaz.bindonce'
])
app.config(["$routeProvider", "$locationProvider", ($routeProvider, $locationProvider) ->
  $locationProvider.html5Mode true
  $routeProvider.otherwise redirectTo: '/'
])

app.constant('RESOURCES', do ->
  api = '/api'
  # Define your variable
  resource = 'http://localhost:2015' + api
  # Use the variable in your constants
  {
    DOMAIN: resource
    CONFIG_API: resource + '/main_config'
    FEEDBACK_API: resource + '/feedback'
  }
)

app.constant('LOCALIZATION', do ->
  { DEFAULT: 'en' }
)  