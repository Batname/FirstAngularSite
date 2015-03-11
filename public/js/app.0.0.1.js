(function() {
  "use strict";
  var app;

  app = angular.module('AngularDev', ['ngRoute', 'home.module', 'news.module', 'common.module', 'pasvaz.bindonce']);

  app.config([
    "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      return $routeProvider.otherwise({
        redirectTo: '/'
      });
    }
  ]);

  app.constant('RESOURCES', (function() {
    var api, resource;
    api = '/api';
    resource = 'http://localhost:2015' + api;
    return {
      DOMAIN: resource,
      CONFIG_API: resource + '/main_config',
      FEEDBACK_API: resource + '/feedback'
    };
  })());

  app.constant('LOCALIZATION', (function() {
    return {
      DEFAULT: 'en'
    };
  })());

}).call(this);

(function() {
  "use strict";
  var app;

  app = angular.module('common.module', []);

}).call(this);

(function() {
  "use strict";
  var app;

  app = angular.module('common.module');

  app.factory('common.config', [
    "$http", "$q", "RESOURCES", function($http, $q, RESOURCES) {
      return {
        getMainConfig: function() {
          return $http({
            url: RESOURCES.CONFIG_API,
            method: "GET"
          });
        }
      };
    }
  ]);

}).call(this);

(function() {
  "use strict";
  var app;

  app = angular.module('common.module');

  app.directive('topNavigation', [
    'top.navigation.service', function(topNavigationService) {
      return {
        restrict: 'E',
        transclude: true,
        scope: true,
        templateUrl: 'views/common/top_navigation/top_navigation_directive.html',
        link: function($scope, $element, $attrs) {
          return $scope.menuLinks = topNavigationService.menuLinks;
        }
      };
    }
  ]);

}).call(this);

(function() {
  "use strict";
  var app;

  app = angular.module('common.module');

  app.service('top.navigation.service', function() {
    var topMenu;
    topMenu = [
      {
        link: '/',
        name: 'Home'
      }, {
        link: '/news',
        name: 'News'
      }, {
        link: '/#news',
        name: 'Services'
      }
    ];
    this.menuLinks = topMenu;
    return this;
  });

}).call(this);

(function() {
  "use strict";
  var app;

  app = angular.module('home.module', ['ngRoute', 'pascalprecht.translate']);

  app.config([
    '$routeProvider', '$translateProvider', '$translatePartialLoaderProvider', function($routeProvider, $translateProvider, $translatePartialLoaderProvider) {
      $routeProvider.when('/', {
        title: 'AngularDev Home',
        templateUrl: 'views/home/home.html',
        controller: 'home.controller'
      });
      $translatePartialLoaderProvider.addPart('home');
      $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: '/i18n/{part}/{lang}.json'
      });
      return $translateProvider.preferredLanguage('en');
    }
  ]);

}).call(this);

(function() {
  "use strict";


}).call(this);

(function() {


}).call(this);

(function() {
  "use strict";
  var app;

  app = angular.module('home.module');

  app.controller('home.controller', [
    '$scope', '$translate', 'common.config', function($scope, $translate, commonConfig) {
      commonConfig.getMainConfig().success(function(data) {
        return $scope.config = data;
      }).error(function() {
        return alert('error');
      });
      return $scope.changeLanguage = function(langKey) {
        return $translate.use(langKey);
      };
    }
  ]);

}).call(this);

(function() {


}).call(this);

(function() {
  "use strict";
  var app;

  app = angular.module('news.module', ['ngRoute']);

  app.config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/news', {
        title: 'AngularDev news',
        templateUrl: 'views/news/home.html',
        controller: 'news.controller'
      });
    }
  ]);

}).call(this);

(function() {
  "use strict";
  var app;

  app = angular.module("news.module");

  app.controller("news.controller", ['$scope', function($scope) {}]);

}).call(this);
