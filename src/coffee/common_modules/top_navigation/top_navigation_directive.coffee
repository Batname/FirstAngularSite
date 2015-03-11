"use strict"

app = angular.module('common.module')

app.directive 'topNavigation', [
  'top.navigation.service'
  (topNavigationService) ->
    {
      restrict: 'E'
      transclude: true
      scope: true
      templateUrl: 'views/common/top_navigation/top_navigation_directive.html'
      link: ($scope, $element, $attrs) ->
        $scope.menuLinks = topNavigationService.menuLinks
    }
]