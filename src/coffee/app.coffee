module.exports = ->
  app = angular.module('AngularDev', [
    'home.module'
    'news.module'
    'common.module'
    'pasvaz.bindonce'
    'ui.router'
    'oc.lazyLoad'
  ])
  app.config(["$locationProvider", "$stateProvider", "$urlRouterProvider", ($locationProvider, $stateProvider, $urlRouterProvider) ->
    $locationProvider.html5Mode true
    $urlRouterProvider.otherwise("/")
  ])

  app.constant('RESOURCES', do ->
    api = '/api'
    resource = 'http://localhost:2015' + api
    # Use the variable in your constants
    {
      DOMAIN: resource
      CONFIG_API: resource + '/main_config'
      TOP_MENU_CONFIG_API: resource + '/top_menu'
      FEEDBACK_API: resource + '/feedback'
    }
  )

  app.constant('LOCALIZATION', do ->
    { DEFAULT: 'en' }
  )  

  app.run([
    '$http' 
    '$rootScope'
    '$q'
    'RESOURCES'
    ($http, $rootScope, $q, RESOURCES)-> 

      getMainConfig = ->
        defer = $q.defer()

        $http.get(RESOURCES.CONFIG_API).success((res) ->
            defer.resolve res
        ).error (err, status) ->
          difer.reject err

        return defer.promise 
         
      config = getMainConfig()
      config.then (res)->
        $rootScope.config = res;

  ])
