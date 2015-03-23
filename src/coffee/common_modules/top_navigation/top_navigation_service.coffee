module.exports = ->

  app = angular.module('common.module')
  app.service('top.navigation.service',["$resource", "RESOURCES", ($resource, RESOURCES) ->  

    @getMenuCongigResource = (locale)->
      return $resource(RESOURCES.TOP_MENU_CONFIG_API, {locale: locale}, getMenuCongig: {method:'GET', isArray:true})

    return @
  ])  
