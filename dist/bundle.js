var PerfToolbar =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/** Describes a button to be displayed in the collapsed toolbar. */
var Button = /** @class */ (function () {
    /**
     * Create the button.
     * @param emoji The icon for the button. The intention is to use a single character emoji
     *   but it's just a string, so anything goes.
     * @param getValue Gets the displayed value for the button.
     * @param getColor Gets the background color for the button.
     */
    function Button(emoji, getValue, getColor) {
        this.emoji = emoji;
        this.getValue = getValue;
        this.getColor = getColor;
    }
    /**
     * Renders the button by adding it as a new child.
     * @param container The DOM node that should contain this button.
     */
    Button.prototype.render = function (container) {
        var li = document.createElement("li");
        li.setAttribute("style", "background-color:" + this.getColor());
        li.innerText = this.emoji + " " + this.getValue();
        container.appendChild(li);
    };
    return Button;
}());



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toolbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ipanel__ = __webpack_require__(4);

/** Describes the toolbar. */
var Toolbar = /** @class */ (function () {
    /**
     * Creates the toolbar.
     * @param panels The panels to be displayed when the toolbar is opened.
     * @param container Optional parameter that defaults to the body of the HTML page.
     */
    function Toolbar(panels, container) {
        if (container === void 0) { container = window.document.body; }
        this.panels = panels;
        this.container = container;
        this.root = document.createElement("div");
        container.appendChild(this.root);
    }
    Toolbar.prototype.render = function () {
        // clear all children
        this.container.innerHTML = "";
        var ul = document.createElement("ul");
        for (var _i = 0, _a = this.panels; _i < _a.length; _i++) {
            var p = _a[_i];
            for (var _b = 0, _c = p.getButtons(); _b < _c.length; _b++) {
                var b = _c[_b];
                b.render(ul);
            }
        }
        this.container.appendChild(ul);
    };
    return Toolbar;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationTimingsPanel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_button__ = __webpack_require__(0);

var NavigationTimingsPanel = /** @class */ (function () {
    function NavigationTimingsPanel() {
    }
    NavigationTimingsPanel.prototype.render = function (target) {
        var t = performance.timing;
        target.innerHTML = "\n        <table>\n            <tr>\n                <th>Get Connected</th>\n                <td>" + (t.connectEnd - t.domainLookupStart).toFixed(2) + " ms</td>\n            </tr>\n            <tr>\n                <td>DNS Lookup</td>\n                <td>" + (t.domainLookupEnd - t.domainLookupStart).toFixed(2) + " ms</td>\n            </tr>\n            <tr>\n                <td>SSL</td>\n                <td>" + (t.connectEnd - t.connectStart).toFixed(2) + " ms</td>\n            </tr>\n            <tr>\n                <th>Get Content</th>\n                <td>" + (t.responseEnd - t.requestStart).toFixed(2) + " ms</td>\n            </tr>\n            <tr>\n                <td>Waiting for Server</td>\n                <td>" + (t.responseStart - t.requestStart).toFixed(2) + " ms</td>\n            </tr>\n            <tr>\n                <td>Time To Download</td>\n                <td>" + (t.responseEnd - t.responseStart).toFixed(2) + " ms</td>\n            </tr>\n            <tr>\n                <th colspan=2>Get Ready</th>\n            </tr>\n            <tr>\n                <td>Parse Content</td>\n                <td>" + (t.domInteractive - t.responseEnd).toFixed(2) + " ms</td>\n            </tr>\n            <tr>\n                <td>Deferred Scripts</td>\n                <td>" + (t.domContentLoadedEventEnd - t.domInteractive).toFixed(2) + " ms</td>\n            </tr>\n            <tr>\n                <td>DOM Complete</td>\n                <td>" + (t.domComplete - t.domContentLoadedEventEnd).toFixed(2) + " ms</td>\n            </tr>\n            <tr>\n                <td>Load Event</td>\n                <td>" + (t.loadEventEnd - t.loadEventStart).toFixed(2) + " ms</td>\n            </tr>\n            <tr>\n                <th>Total Load</th>\n                <td>" + (t.loadEventEnd - t.navigationStart).toFixed(2) + " ms</td>\n            </tr>\n        </table>\n        ";
    };
    NavigationTimingsPanel.prototype.getButtons = function () {
        return [new __WEBPACK_IMPORTED_MODULE_0_button__["a" /* Button */]('⏱️', function () { return (performance.timing.loadEventEnd - performance.timing.navigationStart).toFixed(2) + " ms"; }, function () { return performance.timing.loadEventEnd - performance.timing.navigationStart < 500 ? "green" : "red"; })];
    };
    return NavigationTimingsPanel;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolbar__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_toolbar__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__button__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_button__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__panels_navigation_timing__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return __WEBPACK_IMPORTED_MODULE_1_toolbar__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_3_button__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationTimingsPanel", function() { return __WEBPACK_IMPORTED_MODULE_4__panels_navigation_timing__["a"]; });
// Core




// Panels





/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(0);



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2UwZWJmZmMwNjgxMDM3MDJlNzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbGJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL25hdmlnYXRpb24tdGltaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaXBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBO0FBQUEsbUVBQW1FO0FBQ25FO0lBRUk7Ozs7OztPQU1HO0lBQ0gsZ0JBQW1CLEtBQWEsRUFBUyxRQUFzQixFQUFTLFFBQXNCO1FBQTNFLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBYztJQUc5RixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksdUJBQU0sR0FBYixVQUFjLFNBQXNCO1FBRWhDLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsc0JBQW9CLElBQUksQ0FBQyxRQUFRLEVBQUksQ0FBQyxDQUFDO1FBQ2hFLEVBQUUsQ0FBQyxTQUFTLEdBQU0sSUFBSSxDQUFDLEtBQUssU0FBSSxJQUFJLENBQUMsUUFBUSxFQUFJLENBQUM7UUFFbEQsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7O0FDM0JpQjtBQUVsQiw2QkFBNkI7QUFDN0I7SUFJSTs7OztPQUlHO0lBQ0gsaUJBQW9CLE1BQWdCLEVBQVUsU0FBNkM7UUFBN0Msd0NBQXlCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSTtRQUF2RSxXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBb0M7UUFFdkYsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSx3QkFBTSxHQUFiO1FBRUkscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUU5QixJQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsRUFBVSxVQUFXLEVBQVgsU0FBSSxDQUFDLE1BQU0sRUFBWCxjQUFXLEVBQVgsSUFBVztZQUFwQixJQUFJLENBQUM7WUFFTCxHQUFHLEVBQVUsVUFBYyxFQUFkLE1BQUMsQ0FBQyxVQUFVLEVBQUUsRUFBZCxjQUFjLEVBQWQsSUFBYztnQkFBdkIsSUFBSSxDQUFDO2dCQUVMLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDaEI7U0FDSjtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7QUNqQytCO0FBRWhDO0lBQUE7SUFvRUEsQ0FBQztJQWhFRyx1Q0FBTSxHQUFOLFVBQU8sTUFBbUI7UUFDdEIsSUFBTSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUU3QixNQUFNLENBQUMsU0FBUyxHQUFHLHNHQUlMLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGdIQUkvQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyx5R0FJcEQsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGlIQUkxQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsd0hBSTNDLENBQUMsQ0FBQyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxzSEFJN0MsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLHNNQU81QyxDQUFDLENBQUMsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsc0hBSTdDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGtIQUkxRCxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxnSEFJdkQsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGdIQUk5QyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsNERBRzVELENBQUM7SUFDTixDQUFDO0lBRUQsMkNBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxDQUFDLElBQUksc0RBQU0sQ0FDZCxJQUFJLEVBQ0osY0FBTSxPQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQUssRUFBekYsQ0FBeUYsRUFDL0YsY0FBTSxrQkFBVyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBNUYsQ0FBNEYsQ0FDckcsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVMLDZCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RUQ7QUFBQSxPQUFPO0FBQ1k7QUFBbUM7QUFDcEM7QUFBaUM7QUFFbkQsU0FBUztBQUMyQjtBQUFxRTtBQU12Rzs7Ozs7Ozs7O0FDWGdCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNlMGViZmZjMDY4MTAzNzAyZTcyIiwiLyoqIERlc2NyaWJlcyBhIGJ1dHRvbiB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIGNvbGxhcHNlZCB0b29sYmFyLiAqL1xyXG5leHBvcnQgY2xhc3MgQnV0dG9uXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIHRoZSBidXR0b24uXHJcbiAgICAgKiBAcGFyYW0gZW1vamkgVGhlIGljb24gZm9yIHRoZSBidXR0b24uIFRoZSBpbnRlbnRpb24gaXMgdG8gdXNlIGEgc2luZ2xlIGNoYXJhY3RlciBlbW9qaVxyXG4gICAgICogICBidXQgaXQncyBqdXN0IGEgc3RyaW5nLCBzbyBhbnl0aGluZyBnb2VzLlxyXG4gICAgICogQHBhcmFtIGdldFZhbHVlIEdldHMgdGhlIGRpc3BsYXllZCB2YWx1ZSBmb3IgdGhlIGJ1dHRvbi5cclxuICAgICAqIEBwYXJhbSBnZXRDb2xvciBHZXRzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgYnV0dG9uLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZW1vamk6IHN0cmluZywgcHVibGljIGdldFZhbHVlOiAoKSA9PiBzdHJpbmcsIHB1YmxpYyBnZXRDb2xvcjogKCkgPT4gc3RyaW5nKVxyXG4gICAge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlcnMgdGhlIGJ1dHRvbiBieSBhZGRpbmcgaXQgYXMgYSBuZXcgY2hpbGQuXHJcbiAgICAgKiBAcGFyYW0gY29udGFpbmVyIFRoZSBET00gbm9kZSB0aGF0IHNob3VsZCBjb250YWluIHRoaXMgYnV0dG9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVuZGVyKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGJhY2tncm91bmQtY29sb3I6JHt0aGlzLmdldENvbG9yKCl9YCk7XHJcbiAgICAgICAgbGkuaW5uZXJUZXh0ID0gYCR7dGhpcy5lbW9qaX0gJHt0aGlzLmdldFZhbHVlKCl9YDtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9idXR0b24udHMiLCJpbXBvcnQgXCIuL2lwYW5lbFwiOyBpbXBvcnQgeyBJUGFuZWwgfSBmcm9tICcuL2lwYW5lbCc7XHJcblxyXG4vKiogRGVzY3JpYmVzIHRoZSB0b29sYmFyLiAqL1xyXG5leHBvcnQgY2xhc3MgVG9vbGJhclxyXG57XHJcbiAgICBwcml2YXRlIHJvb3Q6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgdG9vbGJhci5cclxuICAgICAqIEBwYXJhbSBwYW5lbHMgVGhlIHBhbmVscyB0byBiZSBkaXNwbGF5ZWQgd2hlbiB0aGUgdG9vbGJhciBpcyBvcGVuZWQuXHJcbiAgICAgKiBAcGFyYW0gY29udGFpbmVyIE9wdGlvbmFsIHBhcmFtZXRlciB0aGF0IGRlZmF1bHRzIHRvIHRoZSBib2R5IG9mIHRoZSBIVE1MIHBhZ2UuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFuZWxzOiBJUGFuZWxbXSwgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gd2luZG93LmRvY3VtZW50LmJvZHkpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yb290KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICAvLyBjbGVhciBhbGwgY2hpbGRyZW5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgICAgICBmb3IobGV0IHAgb2YgdGhpcy5wYW5lbHMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3IobGV0IGIgb2YgcC5nZXRCdXR0b25zKCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGIucmVuZGVyKHVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodWwpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90b29sYmFyLnRzIiwiaW1wb3J0IHsgSVBhbmVsIH0gZnJvbSAnaXBhbmVsJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYnV0dG9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uVGltaW5nc1BhbmVsIGltcGxlbWVudHMgSVBhbmVsXHJcbntcclxuICAgIG5hbWU6IFwiTmF2aWdhdGlvbiBUaW1pbmdzXCI7XHJcblxyXG4gICAgcmVuZGVyKHRhcmdldDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0ID0gcGVyZm9ybWFuY2UudGltaW5nO1xyXG5cclxuICAgICAgICB0YXJnZXQuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPkdldCBDb25uZWN0ZWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7KHQuY29ubmVjdEVuZCAtIHQuZG9tYWluTG9va3VwU3RhcnQpLnRvRml4ZWQoMil9IG1zPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPkROUyBMb29rdXA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7KHQuZG9tYWluTG9va3VwRW5kIC0gdC5kb21haW5Mb29rdXBTdGFydCkudG9GaXhlZCgyKX0gbXM8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+U1NMPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4keyh0LmNvbm5lY3RFbmQgLSB0LmNvbm5lY3RTdGFydCkudG9GaXhlZCgyKX0gbXM8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+R2V0IENvbnRlbnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7KHQucmVzcG9uc2VFbmQgLSB0LnJlcXVlc3RTdGFydCkudG9GaXhlZCgyKX0gbXM8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+V2FpdGluZyBmb3IgU2VydmVyPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4keyh0LnJlc3BvbnNlU3RhcnQgLSB0LnJlcXVlc3RTdGFydCkudG9GaXhlZCgyKX0gbXM8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+VGltZSBUbyBEb3dubG9hZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHsodC5yZXNwb25zZUVuZCAtIHQucmVzcG9uc2VTdGFydCkudG9GaXhlZCgyKX0gbXM8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGggY29sc3Bhbj0yPkdldCBSZWFkeTwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD5QYXJzZSBDb250ZW50PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4keyh0LmRvbUludGVyYWN0aXZlIC0gdC5yZXNwb25zZUVuZCkudG9GaXhlZCgyKX0gbXM8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+RGVmZXJyZWQgU2NyaXB0czwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHsodC5kb21Db250ZW50TG9hZGVkRXZlbnRFbmQgLSB0LmRvbUludGVyYWN0aXZlKS50b0ZpeGVkKDIpfSBtczwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZD5ET00gQ29tcGxldGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPiR7KHQuZG9tQ29tcGxldGUgLSB0LmRvbUNvbnRlbnRMb2FkZWRFdmVudEVuZCkudG9GaXhlZCgyKX0gbXM8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+TG9hZCBFdmVudDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+JHsodC5sb2FkRXZlbnRFbmQgLSB0LmxvYWRFdmVudFN0YXJ0KS50b0ZpeGVkKDIpfSBtczwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBMb2FkPC90aD5cclxuICAgICAgICAgICAgICAgIDx0ZD4keyh0LmxvYWRFdmVudEVuZCAtIHQubmF2aWdhdGlvblN0YXJ0KS50b0ZpeGVkKDIpfSBtczwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJ1dHRvbnMoKTogQnV0dG9uW10ge1xyXG4gICAgICAgIHJldHVybiBbbmV3IEJ1dHRvbihcclxuICAgICAgICAgICAgJ+KPse+4jycsXHJcbiAgICAgICAgICAgICgpID0+IGAkeyhwZXJmb3JtYW5jZS50aW1pbmcubG9hZEV2ZW50RW5kIC0gcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCkudG9GaXhlZCgyKX0gbXNgLFxyXG4gICAgICAgICAgICAoKSA9PiBwZXJmb3JtYW5jZS50aW1pbmcubG9hZEV2ZW50RW5kIC0gcGVyZm9ybWFuY2UudGltaW5nLm5hdmlnYXRpb25TdGFydCA8IDUwMCA/IFwiZ3JlZW5cIiA6IFwicmVkXCJcclxuICAgICAgICApXTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFuZWxzL25hdmlnYXRpb24tdGltaW5nLnRzIiwiLy8gQ29yZVxyXG5pbXBvcnQgXCIuL3Rvb2xiYXJcIjsgaW1wb3J0IHsgVG9vbGJhciB9IGZyb20gXCJ0b29sYmFyXCI7XHJcbmltcG9ydCBcIi4vYnV0dG9uXCI7IGltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2J1dHRvbic7XHJcblxyXG4vLyBQYW5lbHNcclxuaW1wb3J0IFwiLi9wYW5lbHMvbmF2aWdhdGlvbi10aW1pbmdcIjsgaW1wb3J0IHsgTmF2aWdhdGlvblRpbWluZ3NQYW5lbCB9IGZyb20gXCIuL3BhbmVscy9uYXZpZ2F0aW9uLXRpbWluZ1wiO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIFRvb2xiYXIsXHJcbiAgICBCdXR0b24sXHJcbiAgICBOYXZpZ2F0aW9uVGltaW5nc1BhbmVsXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImltcG9ydCBcIi4vYnV0dG9uXCI7IGltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJztcclxuXHJcbi8qKiBEZXNjcmliZXMgYSBwYW5lbCB3aXRoaW4gdGhlIG9wZW5lZCB0b29sYmFyLiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYW5lbFxyXG57XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXJzIHRoZSBwYW5lbC5cclxuICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIEhUTUwgZWxlbWVudCB0byBjb250YWluIHRoaXMgcGFuZWwuXHJcbiAgICAgKi9cclxuICAgIHJlbmRlcih0YXJnZXQ6IEhUTUxFbGVtZW50KTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIGJ1dHRvbnMgcHJvdmlkZWQgYnkgdGhpcyBwYW5lbCB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIGNvbGxhcHNlZCB0b29sYmFyLlxyXG4gICAgICovXHJcbiAgICBnZXRCdXR0b25zKCk6IEJ1dHRvbltdO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2lwYW5lbC50cyJdLCJzb3VyY2VSb290IjoiIn0=