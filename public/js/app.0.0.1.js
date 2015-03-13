(function() {
  "use strict";
  var app;

  app = angular.module('AngularDev', ['home.module', 'news.module', 'common.module', 'pasvaz.bindonce', 'ui.router']);

  app.config([
    "$locationProvider", "$stateProvider", "$urlRouterProvider", function($locationProvider, $stateProvider, $urlRouterProvider) {
      $locationProvider.html5Mode(true);
      return $urlRouterProvider.otherwise("/");
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

  app.run([
    '$http', '$rootScope', '$q', 'RESOURCES', function($http, $rootScope, $q, RESOURCES) {
      var config, getMainConfig;
      getMainConfig = function() {
        var defer;
        defer = $q.defer();
        $http.get(RESOURCES.CONFIG_API).success(function(res) {
          return defer.resolve(res);
        }).error(function(err, status) {
          return difer.reject(err);
        });
        return defer.promise;
      };
      config = getMainConfig();
      return config.then(function(res) {
        return $rootScope.config = res;
      });
    }
  ]);

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


  /**
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
   */

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

  app = angular.module('home.module', ['pascalprecht.translate', 'ui.router']);

  app.config([
    '$translateProvider', '$translatePartialLoaderProvider', '$stateProvider', function($translateProvider, $translatePartialLoaderProvider, $stateProvider) {
      $stateProvider.state("home", {
        url: "/",
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

  app = angular.module('news.module', ['ui.router']);

  app.config([
    '$stateProvider', function($stateProvider) {
      return $stateProvider.state("news", {
        url: "/news",
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
