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

	$(document).ready(function() {
	  var openSer;
	  $('a[href^="#"]').click(function() {
	    var target;
	    target = $(this).attr('href');
	    $('html, body').animate({
	      scrollTop: $(target).offset().top
	    }, 800);
	    return false;
	  });
	  openSer = $('.openSer');
	  $('.webWhite').click(function() {
	    $('.maskWeb').animate({
	      'width': '100%'
	    }, 500).animate({
	      'left': '100%'
	    }, 500);
	    $('.webCol').delay(500).queue(function() {
	      $(this).show().dequeue();
	    });
	    $('.webWhite').delay(500).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.webFirst').delay(1000).animate({
	      'width': '100%'
	    }, 500);
	    $('.webFirst .capTextCont').delay(1400).queue(function() {
	      $(this).show().dequeue();
	    });
	    $('.webSecond').delay(1500).animate({
	      'width': '100%'
	    }, 500);
	    $('.webSecond .capTextCont').delay(1900).queue(function() {
	      $(this).show().dequeue();
	    });
	  });
	  openSer.click(function() {
	    $('.webSecond').animate({
	      'width': '0%'
	    }, 500);
	    $('.webSecond .capTextCont').delay(100).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.webFirst').delay(500).animate({
	      'width': '0%'
	    }, 500);
	    $('.webFirst .capTextCont').delay(600).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.webCol').delay(1500).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.webWhite').delay(1500).queue(function() {
	      $(this).show().dequeue();
	    });
	    $('.maskWeb').delay(1000).animate({
	      'left': '0%'
	    }, 500).delay(100).animate({
	      'width': '0%'
	    }, 500);
	  });
	  $('.magWhite').click(function() {
	    $('.maskMagento').animate({
	      'width': '100%'
	    }, 500).animate({
	      'left': '100%'
	    }, 500);
	    $('.magCol').delay(500).queue(function() {
	      $(this).show().dequeue();
	    });
	    $('.magWhite').delay(500).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.magentoRight').delay(1000).animate({
	      'width': '100%'
	    }, 500);
	    $('.magentoRight .capTextCont').delay(1400).queue(function() {
	      $(this).show().dequeue();
	    });
	    $('.magentoLeft').delay(1500).animate({
	      'width': '100%'
	    }, 500);
	    $('.magentoLeft .capTextCont').delay(1900).queue(function() {
	      $(this).show().dequeue();
	    });
	  });
	  openSer.click(function() {
	    $('.magentoLeft').animate({
	      'width': '0%'
	    }, 500);
	    $('.magentoLeft .capTextCont').delay(100).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.magentoRight').delay(500).animate({
	      'width': '0%'
	    }, 500);
	    $('.magentoRight .capTextCont').delay(600).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.magCol').delay(1500).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.magWhite').delay(1500).queue(function() {
	      $(this).show().dequeue();
	    });
	    $('.maskMagento').delay(1000).animate({
	      'left': '0%'
	    }, 500).delay(100).animate({
	      'width': '0%'
	    }, 500);
	  });
	  $('.cmsWhite').click(function() {
	    $('.maskCms').animate({
	      'width': '100%'
	    }, 500).animate({
	      'right': '100%'
	    }, 500);
	    $('.cmsCol').delay(500).queue(function() {
	      $(this).show().dequeue();
	    });
	    $('.cmsWhite').delay(500).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.cmsFirst').delay(1000).animate({
	      'width': '100%'
	    }, 500);
	    $('.cmsFirst .capTextCont').delay(1400).queue(function() {
	      $(this).show().dequeue();
	    });
	    $('.cmsSecond').delay(1500).animate({
	      'width': '100%'
	    }, 500);
	    $('.cmsSecond .capTextCont').delay(1900).queue(function() {
	      $(this).show().dequeue();
	    });
	  });
	  openSer.click(function() {
	    $('.cmsSecond').animate({
	      'width': '0%'
	    }, 500);
	    $('.cmsSecond .capTextCont').delay(100).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.cmsFirst').delay(500).animate({
	      'width': '0%'
	    }, 500);
	    $('.cmsFirst .capTextCont').delay(600).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.cmsCol').delay(1500).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.cmsWhite').delay(1500).queue(function() {
	      $(this).show().dequeue();
	    });
	    $('.maskCms').delay(1000).animate({
	      'right': '0%'
	    }, 500).delay(100).animate({
	      'width': '0%'
	    }, 500);
	  });
	  $('.frontWhite').click(function() {
	    $('.maskFront').animate({
	      'width': '100%'
	    }, 500).animate({
	      'left': '100%'
	    }, 500);
	    $('.frontCol').delay(500).queue(function() {
	      $(this).show().dequeue();
	    });
	    $('.frontWhite').delay(500).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.frontFirst').delay(1000).animate({
	      'width': '100%'
	    }, 500);
	    $('.frontFirst .capTextContExp').delay(1400).queue(function() {
	      $(this).show().dequeue();
	    });
	    $('.frontSecond').delay(1500).animate({
	      'width': '100%'
	    }, 500);
	    $('.frontSecond .capTextContExp').delay(1900).queue(function() {
	      $(this).show().dequeue();
	    });
	  });
	  openSer.click(function() {
	    $('.frontSecond').animate({
	      'width': '0%'
	    }, 500);
	    $('.frontSecond .capTextContExp').delay(100).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.frontFirst').delay(500).animate({
	      'width': '0%'
	    }, 500);
	    $('.frontFirst .capTextContExp').delay(600).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.frontCol').delay(1500).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.frontWhite').delay(1500).queue(function() {
	      $(this).show().dequeue();
	    });
	    $('.maskFront').delay(1000).animate({
	      'left': '0%'
	    }, 500).delay(100).animate({
	      'width': '0%'
	    }, 500);
	  });
	  $('.backWhite').click(function() {
	    $('.maskBack').animate({
	      'width': '100%'
	    }, 500).animate({
	      'left': '100%'
	    }, 500);
	    $('.backCol').delay(500).queue(function() {
	      $(this).show().dequeue();
	    });
	    $('.backWhite').delay(500).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.backRight').delay(1000).animate({
	      'width': '100%'
	    }, 500);
	    $('.backRight .capTextContExp').delay(1400).queue(function() {
	      $(this).show().dequeue();
	    });
	    $('.backLeft').delay(1500).animate({
	      'width': '100%'
	    }, 500);
	    $('.backLeft .capTextContExp').delay(1900).queue(function() {
	      $(this).show().dequeue();
	    });
	  });
	  openSer.click(function() {
	    $('.backLeft').animate({
	      'width': '0%'
	    }, 500);
	    $('.backLeft .capTextContExp').delay(100).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.backRight').delay(500).animate({
	      'width': '0%'
	    }, 500);
	    $('.backRight .capTextContExp').delay(600).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.backCol').delay(1500).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.backWhite').delay(1500).queue(function() {
	      $(this).show().dequeue();
	    });
	    $('.maskBack').delay(1000).animate({
	      'left': '0%'
	    }, 500).delay(100).animate({
	      'width': '0%'
	    }, 500);
	  });
	  $('.codeWhite').click(function() {
	    $('.maskCode').animate({
	      'width': '100%'
	    }, 500).animate({
	      'right': '100%'
	    }, 500);
	    $('.codeCol').delay(500).queue(function() {
	      $(this).show().dequeue();
	    });
	    $('.codeWhite').delay(500).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.codeFirst').delay(1000).animate({
	      'width': '100%'
	    }, 500);
	    $('.codeFirst .capTextContExp').delay(1400).queue(function() {
	      $(this).show().dequeue();
	    });
	    $('.codeSecond').delay(1500).animate({
	      'width': '100%'
	    }, 500);
	    $('.codeSecond .capTextContExp').delay(1900).queue(function() {
	      $(this).show().dequeue();
	    });
	  });
	  return openSer.click(function() {
	    $('.codeSecond').animate({
	      'width': '0%'
	    }, 500);
	    $('.codeSecond .capTextContExp').delay(100).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.codeFirst').delay(500).animate({
	      'width': '0%'
	    }, 500);
	    $('.codeFirst .capTextContExp').delay(600).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.codeCol').delay(1500).queue(function() {
	      $(this).hide().dequeue();
	    });
	    $('.codeWhite').delay(1500).queue(function() {
	      $(this).show().dequeue();
	    });
	    $('.maskCode').delay(1000).animate({
	      'right': '0%'
	    }, 500).delay(100).animate({
	      'width': '0%'
	    }, 500);
	  });
	});


/***/ }
/******/ ]);