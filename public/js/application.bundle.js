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

	__webpack_require__(13)();

	__webpack_require__(14)();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  var app;
	  app = angular.module('AngularDev', ['home.module', 'news.module', 'common.module', 'pasvaz.bindonce', 'ui.router', 'oc.lazyLoad']);
	  app.config([
	    "$locationProvider", "$stateProvider", "$urlRouterProvider", function($locationProvider, $stateProvider, $urlRouterProvider) {
	      $locationProvider.html5Mode(true);
	      return $urlRouterProvider.otherwise("/");
	    }
	  ]);
	  app.constant('RESOURCES', (function() {
	    var api, resource;
	    api = '/api';
	    resource = '' + api;
	    return {
	      DOMAIN: resource,
	      CONFIG_API: resource + '/main_config',
	      TOP_MENU_CONFIG_API: resource + '/top_menu',
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
	  app = angular.module('common.module', ['pascalprecht.translate', 'ngResource', 'ngAnimate', 'mgcrea.ngStrap']);
	  return app.config([
	    '$translateProvider', '$translatePartialLoaderProvider', function($translateProvider, $translatePartialLoaderProvider) {
	      $translatePartialLoaderProvider.addPart('common');
	      $translateProvider.useLoader('$translatePartialLoader', {
	        urlTemplate: '/i18n/{part}/{lang}.json'
	      });
	      return $translateProvider.preferredLanguage('en');
	    }
	  ]);
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
	  return app.factory('common.feedback.form', [
	    "$resource", "RESOURCES", function($resource, RESOURCES) {
	      this.postFeedback = function(locale) {
	        return $resource(RESOURCES.FEEDBACK_API, {
	          locale: locale
	        }, {
	          feedback: {
	            method: 'POST'
	          }
	        });
	      };
	      return this;
	    }
	  ]);
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  var app;
	  app = angular.module('common.module');
	  return app.directive('mainFooter', [
	    '$translate', '$alert', "$timeout", "$rootScope", function($translate, $alert, $timeout, $rootScope) {
	      return {
	        restrict: 'E',
	        scope: {
	          config: "="
	        },
	        templateUrl: 'views/common/footer/footer_directive.html',
	        link: function($scope, $element, $attrs) {
	          var modalTranslation, showModal;
	          modalTranslation = {};
	          showModal = function() {
	            return $translate(['footer.modal.title', 'footer.modal.content']).then(function(translation) {
	              modalTranslation = translation;
	              return $alert({
	                title: modalTranslation['footer.modal.title'],
	                content: modalTranslation['footer.modal.content'],
	                animation: 'fadeZoomFadeDown',
	                type: 'material',
	                duration: 4
	              });
	            });
	          };
	          return $scope.changeLanguage = function(langKey) {
	            $translate.use(langKey);
	            $translate.refresh(langKey);
	            $rootScope.$broadcast('language::chagged', {
	              langKey: langKey
	            });
	            return $timeout((function() {
	              return showModal();
	            }), 100);
	          };
	        }
	      };
	    }
	  ]);
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  var app;
	  app = angular.module('common.module');
	  return app.controller('common.controller', ['$scope', function($scope) {}]);
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  var app;
	  app = angular.module('common.module');
	  return app.service('top.navigation.service', [
	    "$resource", "RESOURCES", function($resource, RESOURCES) {
	      this.getMenuCongigResource = function(locale) {
	        return $resource(RESOURCES.TOP_MENU_CONFIG_API, {
	          locale: locale
	        }, {
	          getMenuCongig: {
	            method: 'GET',
	            isArray: true
	          }
	        });
	      };
	      return this;
	    }
	  ]);
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  var app;
	  app = angular.module('common.module');
	  app.directive('topNavigationModile', [
	    "$window", function($window) {
	      return {
	        restrict: 'E',
	        scope: true,
	        link: function($scope, $element, $attrs) {
	          angular.element($window).bind('resize', function() {
	            return $element.css("height", function() {
	              return 0;
	            });
	          });
	          return $scope.$on('height::change', function(ev, newHeight) {
	            return $element.css("height", function() {
	              return newHeight + 50;
	            });
	          });
	        }
	      };
	    }
	  ]);
	  app.directive('onResize', [
	    "$interval", "$rootScope", function($interval, $rootScope) {
	      return {
	        restrict: 'A',
	        link: function(scope, element, attrs) {
	          return $(".navbar-toggle").click(function() {
	            var oldHeight, stop;
	            oldHeight = void 0;
	            return stop = $interval((function() {
	              var height;
	              height = element.height();
	              if (height !== oldHeight) {
	                $rootScope.$broadcast('height::change', height);
	                return oldHeight = height;
	              }
	            }), 50);
	          });
	        }
	      };
	    }
	  ]);
	  return app.directive('topNavigation', [
	    'top.navigation.service', "$rootScope", function(topNavigationService, $rootScope) {
	      return {
	        restrict: 'E',
	        transclude: true,
	        scope: false,
	        templateUrl: 'views/common/top_navigation/top_navigation_directive.html',
	        link: function($scope, $element, $attrs) {
	          var defaultLanguage, getMenuLinks;
	          defaultLanguage = $rootScope.config.main_config.language["default"];
	          getMenuLinks = function(lang) {
	            return topNavigationService.getMenuCongigResource(lang).getMenuCongig();
	          };
	          $scope.menuLinks = getMenuLinks(defaultLanguage);
	          return $scope.$on('language::chagged', function(event, obj) {
	            return $scope.menuLinks = getMenuLinks(obj.langKey);
	          });
	        }
	      };
	    }
	  ]);
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  var app;
	  app = angular.module('home.module', ['pascalprecht.translate', 'ui.router', 'ngAnimate', 'mgcrea.ngStrap']);
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  var app;
	  app = angular.module('home.module');
	  app.directive('homeServices', [
	    function() {
	      return {
	        restrict: 'E',
	        scope: true,
	        templateUrl: 'views/home/directives/home_services.html'
	      };
	    }
	  ]);
	  app.directive('homeSocial', [
	    function() {
	      return {
	        restrict: 'E',
	        scope: true,
	        templateUrl: 'views/home/directives/home_social.html'
	      };
	    }
	  ]);
	  app.directive('homeCapabilities', [
	    function() {
	      return {
	        restrict: 'E',
	        scope: true,
	        templateUrl: 'views/home/directives/home_capabilities.html'
	      };
	    }
	  ]);
	  app.directive('homeExpertise', [
	    function() {
	      return {
	        restrict: 'E',
	        scope: true,
	        templateUrl: 'views/home/directives/home_expertise.html'
	      };
	    }
	  ]);
	  return app.directive('homeForm', [
	    function() {
	      return {
	        restrict: 'E',
	        scope: false,
	        templateUrl: 'views/home/directives/home_form.html'
	      };
	    }
	  ]);
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  var app;
	  app = angular.module('home.module');
	  return app.controller('home.controller', [
	    '$scope', '$translate', 'common.config', 'common.feedback.form', '$ocLazyLoad', '$alert', '$timeout', "$rootScope", function($scope, $translate, commonConfig, commonFeedbackForm, $ocLazyLoad, $alert, $timeout, $rootScope) {
	      $scope.message = {};
	      $scope.language = "en";
	      $ocLazyLoad.load('/css/home_styles/home.css');
	      $ocLazyLoad.load('/css/common_styles/modal_message.css');
	      $timeout((function() {
	        return $ocLazyLoad.load('/js/home.bundle.min.js', {
	          cache: true
	        });
	      }), 100);
	      $scope.$on('language::chagged', function(event, obj) {
	        return $scope.language = obj.langKey;
	      });
	      commonConfig.getMainConfig().success(function(data) {
	        $scope.language = data.main_config.language["default"];
	        return $scope.config = data;
	      }).error(function() {
	        return alert('error');
	      });
	      return $scope.sendMessage = function() {
	        var feedback;
	        feedback = commonFeedbackForm.postFeedback($scope.language).feedback($scope.message);
	        return feedback.$promise.then(function(res) {
	          $scope.message = {};
	          $alert({
	            title: res.title,
	            content: res.message,
	            animation: 'fadeZoomFadeDown',
	            type: 'material',
	            duration: 4
	          });
	          return $('html, body').animate({
	            scrollTop: $('#p8').offset().top
	          }, 800);
	        }, function(error) {
	          return $alert({
	            title: error.data.title,
	            content: error.data.message,
	            animation: 'fadeZoomFadeDown',
	            type: 'material',
	            duration: 4
	          });
	        });
	      };
	    }
	  ]);
	};


/***/ },
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
	  var app;
	  app = angular.module("news.module");
	  return app.controller("news.controller", ['$scope', function($scope) {}]);
	};


/***/ }
/******/ ]);