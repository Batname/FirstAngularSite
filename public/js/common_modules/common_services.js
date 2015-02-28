(function() {

var app;

app = angular.module('common.module')

app.factory('common.config',["$http", "$q","RESOURCES", function($http,$q, RESOURCES) {
  return {
    getMainConfig: function() {
      return $http({url: RESOURCES.CONFIG_API, method: "GET"})
    }
  }
}]);

}).call(this);