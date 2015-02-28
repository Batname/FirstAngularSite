(function() {
var app;

app = angular.module('common.module')

app.directive('topNavigation', ['top.navigation.service', function(topNavigationService){
  return {
    compile: function compile(temaplateElement, templateAttrs) {
       return {
           pre: function ($scope, $element, $attrs) {
            $scope.menuLinks = topNavigationService.menuLinks;
           },
           post: function($scope, $element, $attrs) { 
           }
       }
    },
    restrict: 'E',
    transclude: true,
    scope: true,
    templateUrl: 'views/common/top_navigation/top_navigation_directive.html',
    link: function ($scope, $element, $attrs) {
    }
  }
 }]);

}).call(this);