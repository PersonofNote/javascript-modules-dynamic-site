/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__onLoad__ = __webpack_require__(1);


//Look into being able to load content from a csv or a word file. It'd be great to basically have a modular
//website builder with standard pages that you could load copy into easily.
var blurb = "Welcome to Milliways, the Restaurant at the End of the Universe. Unwind, and take in the Gnib Gnab with a cocktail!";

function createTabs() {
	var tabs = document.getElementsByClassName('tab');
	for (var i = 0; i < tabs.length; i++) {
	var tab = tabs[i];
	tab.addEventListener("click", function(){changeTabs(this.id)}, false);
	tab.className = "tab btn btn-primary";
	}
	/*
	var contactButton = document.createElement("button");
	var menuButton = document.createElement("button");
	var homeButton = document.createElement("button");
	*/
}

window.onLoad = Object(__WEBPACK_IMPORTED_MODULE_0__onLoad__["a" /* default */])("Milliways", "banner.jpg", blurb);
createTabs();




function changeTabs(tab) {
	//Erase everything and then call the appropriate function.
	var content = document.getElementById("content");
	while (content.firstChild) {
    content.removeChild(content.firstChild);
}

//content.innerHTML = " ";
console.log("Tab changed to " + tab);

switch (tab) {
	case 'home':
	Object(__WEBPACK_IMPORTED_MODULE_0__onLoad__["a" /* default */])("Milliways", "banner.jpg", blurb);
default: console.log("Function not set up yet.");
	}
}




/*
function header() {
  var element = document.createElement('h1');
  element.innerHTML = title('Milliways');
  return element;
}

function banner() {
	var element = document.createElement('img');
	element.setAttribute("src","src/banner.jpg");
	return element;
}

function copy() {
	var
}


function testLog() {
	console.log("Getting started.");
}

testLog();

document.body.appendChild(header());
*/

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*onload module. This doesn't seem quite right, should everything be
be wrapped up into one function like this? Especially with side effects?
*/
const title = (title) =>  title;
const bannerImg = (imgsrc) => imgsrc;
const copyBlurb = (copy) => copy;

const createLandingpage = (title, imgsrc, copy) => {
	var parentDiv = document.getElementById("content")
	var pageTitle = document.createElement('h1'); 
	var bannerImg = document.createElement('img');
	var blurb = document.createElement('div');
	pageTitle.innerHTML = title;
	//banner styling
  	bannerImg.setAttribute("src", imgsrc);
  	bannerImg.className = "img-responsive";
  	bannerImg.style.width=((504*screen.width)/1280)+'px';
	bannerImg.style.height=((124*screen.height)/800)+'px';
	//Content styling
  	blurb.innerHTML = copy;
  	blurb.className = "text-success";
	parentDiv.appendChild(pageTitle);
	parentDiv.appendChild(bannerImg);
	parentDiv.appendChild(blurb);
	return pageTitle;
  	return bannerImg;
  	return blurb;
}

/* harmony default export */ __webpack_exports__["a"] = (createLandingpage);

/***/ })
/******/ ]);