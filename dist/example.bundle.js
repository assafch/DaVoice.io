/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/keyword-detection-web/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/keyword-detection-web/dist/index.js ***!
  \**********************************************************/
/***/ ((module, exports, __webpack_require__) => {


/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var keyword_detection_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! keyword-detection-web */ \"./node_modules/keyword-detection-web/dist/index.js\");\n/* harmony import */ var keyword_detection_web__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(keyword_detection_web__WEBPACK_IMPORTED_MODULE_0__);\n// example/example.js\n\ndocument.addEventListener('DOMContentLoaded', async () => {\n  // Optional: Validate license\n  const licenseManager = new keyword_detection_web__WEBPACK_IMPORTED_MODULE_0__.LicenseManager();\n  //const licenseManager = new window.main.LicenseManager();\n  const licenseKey = 'MTcyODkzOTYwMDAwMA==-Gy0+y3OCG32COKypi/mpT1AYrTlYAz/IvNt1WZ+gVsI=';\n  const isLicensed = await licenseManager.isLicenseValid(licenseKey);\n  if (!isLicensed) {\n    alert('Invalid or expired license key.');\n    return;\n  }\n\n  // Initialize Keyword Detector\n  const threshold = 0.9999;\n  const bufferCount = 2;\n  const statusElement = document.getElementById('status');\n  const onKeywordDetected = detected => {\n    if (detected) {\n      keywordDetector.stopListening();\n      console.log('Keyword detected!');\n      alert(\"Keyword detected!\");\n      keywordDetector.startListening();\n    }\n  };\n  const modelsFolderPath = \"./models\";\n  const modelToUse = \"need_help_now.onnx\";\n  statusElement.textContent = 'Loading models...' + modelToUse.replace(/\\.onnx$/, '').replace(/_/g, ' ');\n  const keywordDetector = new keyword_detection_web__WEBPACK_IMPORTED_MODULE_0__.KeywordDetector(modelsFolderPath, modelToUse, threshold, bufferCount, onKeywordDetected);\n  try {\n    await keywordDetector.init();\n    statusElement.textContent = 'Models loaded. Listening for keywords...' + modelToUse.replace(/\\.onnx$/, '').replace(/_/g, ' ');\n\n    // Start listening for keywords\n    keywordDetector.startListening();\n  } catch (error) {\n    console.error('Initialization error:', error);\n    statusElement.textContent = 'Error initializing keyword detector.';\n  }\n});\n\n//# sourceURL=webpack://davoice_website/./src/example.js?");

/***/ }),

/***/ "./node_modules/keyword-detection-web/dist sync recursive":
/*!*******************************************************!*\
  !*** ./node_modules/keyword-detection-web/dist/ sync ***!
  \*******************************************************/
/***/ ((module) => {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = () => ([]);\nwebpackEmptyContext.resolve = webpackEmptyContext;\nwebpackEmptyContext.id = \"./node_modules/keyword-detection-web/dist sync recursive\";\nmodule.exports = webpackEmptyContext;\n\n//# sourceURL=webpack://davoice_website/./node_modules/keyword-detection-web/dist/_sync?");

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
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/example.js");
/******/ 	
/******/ })()
;