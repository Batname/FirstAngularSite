"use strict"

app = angular.module('common.module')

###*
 * @ngdoc service
 * @name $templateRequest
 *
 * @description
 * The `$templateRequest` service downloads the provided template using `$http` and, upon success,
 * stores the contents inside of `$templateCache`. If the HTTP request fails or the response data
 * of the HTTP request is empty, a `$compile` error will be thrown (the exception can be thwarted
 * by setting the 2nd parameter of the function to true).
 *
 * @param {string} tpl The HTTP request template URL
 * @param {boolean=} ignoreRequestError Whether or not to ignore the exception when the request fails or the template is empty
 *
 * @return {Promise} a promise for the HTTP response data of the given URL.
 *
 * @property {number} totalPendingRequests total amount of pending template requests being downloaded.
###

app.factory('common.config',["$http", "$q","RESOURCES", ($http,$q, RESOURCES) ->
  return {
    getMainConfig: ()->
      return $http({url: RESOURCES.CONFIG_API, method: "GET"})
  }
]);

