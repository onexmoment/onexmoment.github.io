/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/benefits/benefits.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/benefits/benefits.js ***!
  \*************************************************/
/***/ (() => {

$(document).ready(function () {
  $("ul.benefits__tabs").on("click", "li:not(.benefits__tab_active)", function () {
    $(this).addClass("benefits__tab_active").siblings().removeClass("benefits__tab_active").closest("div.container").find("div.benefits__content").removeClass("benefits__content_active").eq($(this).index()).addClass("benefits__content_active");
  });
});

/***/ }),

/***/ "./src/blocks/modules/carousel/carousel.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/carousel/carousel.js ***!
  \*************************************************/
/***/ (() => {

var slider = tns({
  container: '.carousel-team',
  items: 4,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false,
  navPosition: 'top',
  speed: 1500
});
document.querySelector('.prev_top').addEventListener('click', function () {
  slider.goTo('prev');
});
document.querySelector('.next_top').addEventListener('click', function () {
  slider.goTo('next');
});
var slider1 = tns({
  container: '.carousel-students',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: true,
  navPosition: 'bottom',
  speed: 1500
});
document.querySelector('.prev_center').addEventListener('click', function () {
  slider1.goTo('prev');
});
document.querySelector('.next_center').addEventListener('click', function () {
  slider1.goTo('next');
});
document.querySelector('.prev_center').addEventListener('click', function () {
  slider1.goTo('prev');
});
document.querySelector('.next_center').addEventListener('click', function () {
  slider1.goTo('next');
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_benefits_benefits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/benefits/benefits */ "./src/blocks/modules/benefits/benefits.js");
/* harmony import */ var _modules_benefits_benefits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_benefits_benefits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_carousel_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/carousel/carousel */ "./src/blocks/modules/carousel/carousel.js");
/* harmony import */ var _modules_carousel_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_carousel_carousel__WEBPACK_IMPORTED_MODULE_2__);




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;
//# sourceMappingURL=main.js.map