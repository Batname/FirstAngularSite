/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1)();

	__webpack_require__(2)();

	__webpack_require__(3)();

	__webpack_require__(4)();

	__webpack_require__(5)();

	__webpack_require__(6)();

	__webpack_require__(7)();

	__webpack_require__(8)();

	__webpack_require__(9)();

	__webpack_require__(10)();

	__webpack_require__(11)();

	__webpack_require__(12)();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
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
	  return app.run([
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
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  var app;
	  return app = angular.module('common.module', []);
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  var app;
	  app = angular.module('common.module');

	  /**
	   * @ngdoc service
	   * @name $templateRequest
	   *
	   * @description
	   * Привет `$templateRequest` service downloads the provided template using `$http` and, upon success,
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
	  return app.factory('common.config', [
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
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  var app;
	  app = angular.module('common.module');
	  return app.service('top.navigation.service', function() {
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
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  var app;
	  app = angular.module('common.module');
	  return app.directive('topNavigation', [
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
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  var app;
	  app = angular.module('home.module', ['pascalprecht.translate', 'ui.router']);
	  return app.config([
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
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  var app;
	  app = angular.module('home.module');
	  return app.controller('home.controller', [
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
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  var app;
	  app = angular.module('news.module', ['ui.router']);
	  return app.config([
	    '$stateProvider', function($stateProvider) {
	      return $stateProvider.state("news", {
	        url: "/news",
	        templateUrl: 'views/news/home.html',
	        controller: 'news.controller'
	      });
	    }
	  ]);
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  var app;
	  app = angular.module("news.module");
	  return app.controller("news.controller", ['$scope', function($scope) {}]);
	};


/***/ }
/******/ ]);