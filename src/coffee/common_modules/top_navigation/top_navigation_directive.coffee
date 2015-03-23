module.exports = ->
  app = angular.module('common.module')

  app.directive 'topNavigationModile', [ "$window", ($window)->
    restrict: 'E'
    scope: true
    link: ($scope, $element, $attrs) ->

      angular.element($window).bind 'resize', ->
        $element.css( "height", -> 
          return 0;
        )

      $scope.$on 'height::change', (ev, newHeight) ->
        $element.css( "height", -> 
          return newHeight + 50;
        )
  ]    

  app.directive 'onResize',[ "$interval", "$rootScope", ($interval, $rootScope) ->
    restrict: 'A'
    link: (scope, element, attrs) ->

      $(".navbar-toggle").click ->
        oldHeight = undefined
        stop = $interval((->
          height = element.height()
          if height != oldHeight
            $rootScope.$broadcast( 'height::change', height )
            oldHeight = height
        ), 50)
  ]

  app.directive 'topNavigation', [
    'top.navigation.service'
    "$rootScope"
    (topNavigationService, $rootScope) ->
      {
        restrict: 'E'
        transclude: true
        scope: false
        templateUrl: 'views/common/top_navigation/top_navigation_directive.html'
        link: ($scope, $element, $attrs) ->

          defaultLanguage = $rootScope.config.main_config.language.default

          getMenuLinks = (lang)->
            return topNavigationService.getMenuCongigResource(lang).getMenuCongig()

          $scope.menuLinks = getMenuLinks(defaultLanguage)

          $scope.$on 'language::chagged',  (event, obj)->
            $scope.menuLinks = getMenuLinks(obj.langKey)
      }
  ]
