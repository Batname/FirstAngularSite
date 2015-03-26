module.exports = ->
  app = angular.module('common.module')

  app.directive 'mainFooter', [ 
    '$translate'
    '$alert'
    "$timeout"
    "$rootScope"
    ($translate, $alert, $timeout, $rootScope) ->
      {
        restrict: 'E'
        scope:
          config: "="
        templateUrl: 'views/common/footer/footer_directive.html'
        link: ($scope, $element, $attrs) ->

          modalTranslation = {}

          showModal = ->
            $translate(['footer.modal.title', 'footer.modal.content']).then (translation) ->
              modalTranslation = translation
              $alert
                title: modalTranslation['footer.modal.title'],
                content: modalTranslation['footer.modal.content'],
                animation: 'fadeZoomFadeDown',
                type: 'material',
                duration: 4

          $scope.changeLanguage = (langKey) ->
            $translate.use langKey
            $translate.refresh langKey
            $rootScope.$broadcast('language::chagged', { langKey: langKey })
            $timeout (->
              showModal()
            ), 100

            

      }
  ]