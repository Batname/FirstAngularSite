module.exports = ->

  app = angular.module('home.module')
  app.controller 'home.controller', [
    '$scope'
    '$translate'
    'common.config'
    'common.feedback.form'
    '$ocLazyLoad'
    '$alert'
    '$timeout'
    "$rootScope"
    ($scope, $translate, commonConfig, commonFeedbackForm ,$ocLazyLoad, $alert, $timeout, $rootScope) ->
      
      $scope.message = {}
      $scope.language = "en"

      $ocLazyLoad.load('/css/home_styles/home.css')
      $ocLazyLoad.load('/css/common_styles/modal_message.css')
      $timeout (->
        $ocLazyLoad.load('/js/home.bundle.min.js', cache: true)
      ), 100


      $scope.$on 'language::chagged',  (event, obj)->
        $scope.language = obj.langKey


      commonConfig.getMainConfig().success((data) ->
        $scope.language = data.main_config.language.default
        $scope.config = data
      ).error ->
        alert 'error'

      $scope.sendMessage = ->
        feedback = commonFeedbackForm.postFeedback($scope.language).feedback($scope.message)
        feedback.$promise.then((res) -> 
          $scope.message = {}
          $alert
            title: res.title,
            content: res.message,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 4
          $('html, body').animate { scrollTop: $('#p8').offset().top }, 800  
        , (error)->
          $alert
            title: error.data.title,
            content: error.data.message,
            animation: 'fadeZoomFadeDown',
            type: 'material',
            duration: 4
        ) 


  ]