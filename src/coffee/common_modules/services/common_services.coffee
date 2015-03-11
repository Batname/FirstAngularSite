"use strict"

app = angular.module('common.module')

app.factory('common.config',["$http", "$q","RESOURCES", ($http,$q, RESOURCES) ->
  return {
    getMainConfig: ()->
      return $http({url: RESOURCES.CONFIG_API, method: "GET"})
  }
]);

