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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toolbar__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return __WEBPACK_IMPORTED_MODULE_0__toolbar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_1__button__["a"]; });




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toolbar; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/** Describes a button to be displayed in the collapsed toolbar. */
var Button = /** @class */ (function () {
    /**
     * Create the button.
     */
    function Button(config) {
        if (config === void 0) { config = {}; }
        this.emoji = config.emoji || "";
        this.getValue = config.getValue || (function () { return ""; });
        this.getColor = config.getValue || (function () { return ""; });
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



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjM0ODY3MGJkNWRkZWFmNDRhNTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy90b29sYmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9idXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdEb0M7QUFDRjs7Ozs7Ozs7QUNDbEM7QUFBQSw2QkFBNkI7QUFDN0I7SUFJSTs7OztPQUlHO0lBQ0gsaUJBQW9CLE1BQWdCLEVBQVUsU0FBNkM7UUFBN0Msd0NBQXlCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSTtRQUF2RSxXQUFNLEdBQU4sTUFBTSxDQUFVO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBb0M7UUFFdkYsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSx3QkFBTSxHQUFiO1FBRUkscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUU5QixJQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLEdBQUcsRUFBVSxVQUFXLEVBQVgsU0FBSSxDQUFDLE1BQU0sRUFBWCxjQUFXLEVBQVgsSUFBVztZQUFwQixJQUFJLENBQUM7WUFFTCxHQUFHLEVBQVUsVUFBYyxFQUFkLE1BQUMsQ0FBQyxVQUFVLEVBQUUsRUFBZCxjQUFjLEVBQWQsSUFBYztnQkFBdkIsSUFBSSxDQUFDO2dCQUVMLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDaEI7U0FDSjtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7O0FDeEJEO0FBQUEsbUVBQW1FO0FBQ25FO0lBV0k7O09BRUc7SUFDSCxnQkFBWSxNQUFpQztRQUFqQyxvQ0FBaUM7UUFFekMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxjQUFNLFNBQUUsRUFBRixDQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxjQUFNLFNBQUUsRUFBRixDQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksdUJBQU0sR0FBYixVQUFjLFNBQXNCO1FBRWhDLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsc0JBQW9CLElBQUksQ0FBQyxRQUFRLEVBQUksQ0FBQyxDQUFDO1FBQ2hFLEVBQUUsQ0FBQyxTQUFTLEdBQU0sSUFBSSxDQUFDLEtBQUssU0FBSSxJQUFJLENBQUMsUUFBUSxFQUFJLENBQUM7UUFFbEQsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjM0ODY3MGJkNWRkZWFmNDRhNTciLCJleHBvcnQgeyBUb29sYmFyIH0gZnJvbSBcIi4vdG9vbGJhclwiO1xyXG5leHBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9idXR0b25cIjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzIiwiaW1wb3J0IHsgSVBhbmVsIH0gZnJvbSAnLi9pcGFuZWwnO1xyXG5cclxuLyoqIERlc2NyaWJlcyB0aGUgdG9vbGJhci4gKi9cclxuZXhwb3J0IGNsYXNzIFRvb2xiYXJcclxue1xyXG4gICAgcHJpdmF0ZSByb290OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIHRvb2xiYXIuXHJcbiAgICAgKiBAcGFyYW0gcGFuZWxzIFRoZSBwYW5lbHMgdG8gYmUgZGlzcGxheWVkIHdoZW4gdGhlIHRvb2xiYXIgaXMgb3BlbmVkLlxyXG4gICAgICogQHBhcmFtIGNvbnRhaW5lciBPcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBkZWZhdWx0cyB0byB0aGUgYm9keSBvZiB0aGUgSFRNTCBwYWdlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhbmVsczogSVBhbmVsW10sIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5ib2R5KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2xlYXIgYWxsIGNoaWxkcmVuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgZm9yKGxldCBwIG9mIHRoaXMucGFuZWxzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGxldCBiIG9mIHAuZ2V0QnV0dG9ucygpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiLnJlbmRlcih1bCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHVsKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdG9vbGJhci50cyIsImV4cG9ydCBpbnRlcmZhY2UgSUJ1dHRvbkNvbmZpZ3VyYXRpb25cclxue1xyXG4gICAgLyoqIFRoZSBpY29uIGZvciB0aGUgYnV0dG9uLiBUaGUgaW50ZW50aW9uIGlzIHRvIHVzZSBhIHNpbmdsZSBjaGFyYWN0ZXIgZW1vamkgYnV0IGl0J3MganVzdCBhIHN0cmluZywgc28gYW55dGhpbmcgZ29lcyAqL1xyXG4gICAgZW1vamk/OiBzdHJpbmc7XHJcbiAgICAvKiogR2V0cyB0aGUgZGlzcGxheWVkIHZhbHVlIGZvciB0aGUgYnV0dG9uLiAqL1xyXG4gICAgZ2V0VmFsdWU/OiAoKSA9PiBzdHJpbmc7XHJcbiAgICAvKiogR2V0cyB0aGUgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIGJ1dHRvbi4gKi9cclxuICAgIGdldENvbG9yPzogKCkgPT4gc3RyaW5nO1xyXG59XHJcblxyXG4vKiogRGVzY3JpYmVzIGEgYnV0dG9uIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgY29sbGFwc2VkIHRvb2xiYXIuICovXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25cclxue1xyXG4gICAgLyoqIFRoZSBpY29uIGZvciB0aGUgYnV0dG9uLiBUaGUgaW50ZW50aW9uIGlzIHRvIHVzZSBhIHNpbmdsZSBjaGFyYWN0ZXIgZW1vamkgYnV0IGl0J3MganVzdCBhIHN0cmluZywgc28gYW55dGhpbmcgZ29lcyAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGVtb2ppOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIEdldHMgdGhlIGRpc3BsYXllZCB2YWx1ZSBmb3IgdGhlIGJ1dHRvbi4gKi9cclxuICAgIHB1YmxpYyByZWFkb25seSBnZXRWYWx1ZTogKCkgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8qKiBHZXRzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgYnV0dG9uLiAqL1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGdldENvbG9yOiAoKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdGhlIGJ1dHRvbi5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJQnV0dG9uQ29uZmlndXJhdGlvbiA9IHt9KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZW1vamkgPSBjb25maWcuZW1vamkgfHwgXCJcIjtcclxuICAgICAgICB0aGlzLmdldFZhbHVlID0gY29uZmlnLmdldFZhbHVlIHx8ICgoKSA9PiBcIlwiKTtcclxuICAgICAgICB0aGlzLmdldENvbG9yID0gY29uZmlnLmdldFZhbHVlIHx8ICgoKSA9PiBcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlcnMgdGhlIGJ1dHRvbiBieSBhZGRpbmcgaXQgYXMgYSBuZXcgY2hpbGQuXHJcbiAgICAgKiBAcGFyYW0gY29udGFpbmVyIFRoZSBET00gbm9kZSB0aGF0IHNob3VsZCBjb250YWluIHRoaXMgYnV0dG9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVuZGVyKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGJhY2tncm91bmQtY29sb3I6JHt0aGlzLmdldENvbG9yKCl9YCk7XHJcbiAgICAgICAgbGkuaW5uZXJUZXh0ID0gYCR7dGhpcy5lbW9qaX0gJHt0aGlzLmdldFZhbHVlKCl9YDtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9idXR0b24udHMiXSwic291cmNlUm9vdCI6IiJ9