module.exports = ->
  app = angular.module('home.module')

  app.directive 'homeServices', [ ->
    {
      restrict: 'E'
      scope: true
      templateUrl: 'views/home/directives/home_services.html'
    }
  ]

  app.directive 'homeSocial', [ ->
    {
      restrict: 'E'
      scope: true
      templateUrl: 'views/home/directives/home_social.html'
    }
  ]

  app.directive 'homeCapabilities', [ ->
    {
      restrict: 'E'
      scope: true
      templateUrl: 'views/home/directives/home_capabilities.html'
    }
  ]

  app.directive 'homeExpertise', [ ->
    {
      restrict: 'E'
      scope: true
      templateUrl: 'views/home/directives/home_expertise.html'
    }
  ]

  app.directive 'homeForm', [ ->
    {
      restrict: 'E'
      scope: false
      templateUrl: 'views/home/directives/home_form.html'
    }
  ]
