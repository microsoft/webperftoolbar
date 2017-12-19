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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Button__ = __webpack_require__(1);



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Button */
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Toolbar__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_toolbar__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_IPanel__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Button__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_button__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return __WEBPACK_IMPORTED_MODULE_1_toolbar__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_4_button__["a"]; });








/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Toolbar */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_IPanel__ = __webpack_require__(0);

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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toolbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_IPanel__ = __webpack_require__(0);

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
/* 5 */
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



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjYxNDE1MjkyZGFiNmM0OGE2ZTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL0lQYW5lbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvVG9vbGJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbGJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzdEZ0I7Ozs7Ozs7O0FDQWhCO0FBQUEsbUVBQW1FO0FBQ25FO0lBRUk7Ozs7OztPQU1HO0lBQ0gsZ0JBQW1CLEtBQWEsRUFBUyxRQUFzQixFQUFTLFFBQXNCO1FBQTNFLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBYztJQUc5RixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksdUJBQU0sR0FBYixVQUFjLFNBQXNCO1FBRWhDLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFP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UyxhQUFRLEdBQVIsUUFBUSxDQUFjO0lBRzlGLENBQUM7SUFFRDs7O09BR0c7SUFDSSx1QkFBTSxHQUFiLFVBQWMsU0FBc0I7UUFFaEMsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxzQkFBb0IsSUFBSSxDQUFDLFFBQVEsRUFBSSxDQUFDLENBQUM7UUFDaEUsRUFBRSxDQUFDLFNBQVMsR0FBTSxJQUFJLENBQUMsS0FBSyxTQUFJLElBQUksQ0FBQyxRQUFRLEVBQUksQ0FBQztRQUVsRCxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmNjE0MTUyOTJkYWI2YzQ4YTZlOCIsImltcG9ydCBcIkJ1dHRvblwiOyBpbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2J1dHRvbic7XHJcblxyXG4vKiogRGVzY3JpYmVzIGEgcGFuZWwgd2l0aGluIHRoZSBvcGVuZWQgdG9vbGJhci4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFuZWxcclxue1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVycyB0aGUgcGFuZWwuXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSBIVE1MIGVsZW1lbnQgdG8gY29udGFpbiB0aGlzIHBhbmVsLlxyXG4gICAgICovXHJcbiAgICByZW5kZXIodGFyZ2V0OiBIVE1MRWxlbWVudCk6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBidXR0b25zIHByb3ZpZGVkIGJ5IHRoaXMgcGFuZWwgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBjb2xsYXBzZWQgdG9vbGJhci5cclxuICAgICAqL1xyXG4gICAgZ2V0QnV0dG9ucygpOiBCdXR0b25bXTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JUGFuZWwudHMiLCIvKiogRGVzY3JpYmVzIGEgYnV0dG9uIHRvIGJlIGRpc3BsYXllZCBpbiB0aGUgY29sbGFwc2VkIHRvb2xiYXIuICovXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25cclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgdGhlIGJ1dHRvbi5cclxuICAgICAqIEBwYXJhbSBlbW9qaSBUaGUgaWNvbiBmb3IgdGhlIGJ1dHRvbi4gVGhlIGludGVudGlvbiBpcyB0byB1c2UgYSBzaW5nbGUgY2hhcmFjdGVyIGVtb2ppXHJcbiAgICAgKiAgIGJ1dCBpdCdzIGp1c3QgYSBzdHJpbmcsIHNvIGFueXRoaW5nIGdvZXMuXHJcbiAgICAgKiBAcGFyYW0gZ2V0VmFsdWUgR2V0cyB0aGUgZGlzcGxheWVkIHZhbHVlIGZvciB0aGUgYnV0dG9uLlxyXG4gICAgICogQHBhcmFtIGdldENvbG9yIEdldHMgdGhlIGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBidXR0b24uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbW9qaTogc3RyaW5nLCBwdWJsaWMgZ2V0VmFsdWU6ICgpID0+IHN0cmluZywgcHVibGljIGdldENvbG9yOiAoKSA9PiBzdHJpbmcpXHJcbiAgICB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVycyB0aGUgYnV0dG9uIGJ5IGFkZGluZyBpdCBhcyBhIG5ldyBjaGlsZC5cclxuICAgICAqIEBwYXJhbSBjb250YWluZXIgVGhlIERPTSBub2RlIHRoYXQgc2hvdWxkIGNvbnRhaW4gdGhpcyBidXR0b24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW5kZXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBgYmFja2dyb3VuZC1jb2xvcjoke3RoaXMuZ2V0Q29sb3IoKX1gKTtcclxuICAgICAgICBsaS5pbm5lclRleHQgPSBgJHt0aGlzLmVtb2ppfSAke3RoaXMuZ2V0VmFsdWUoKX1gO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0J1dHRvbi50cyIsImltcG9ydCBcIlRvb2xiYXJcIjsgaW1wb3J0IHsgVG9vbGJhciB9IGZyb20gXCJ0b29sYmFyXCI7XHJcbmltcG9ydCBcIklQYW5lbFwiOyBpbXBvcnQgeyBJUGFuZWwgfSBmcm9tICdpcGFuZWwnO1xyXG5pbXBvcnQgXCJCdXR0b25cIjsgaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYnV0dG9uJztcclxuXHJcbmV4cG9ydCB7VG9vbGJhciwgQnV0dG9ufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LnRzIiwiaW1wb3J0IFwiSVBhbmVsXCI7IGltcG9ydCB7IElQYW5lbCB9IGZyb20gJy4vaXBhbmVsJztcclxuXHJcbi8qKiBEZXNjcmliZXMgdGhlIHRvb2xiYXIuICovXHJcbmV4cG9ydCBjbGFzcyBUb29sYmFyXHJcbntcclxuICAgIHByaXZhdGUgcm9vdDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSB0b29sYmFyLlxyXG4gICAgICogQHBhcmFtIHBhbmVscyBUaGUgcGFuZWxzIHRvIGJlIGRpc3BsYXllZCB3aGVuIHRoZSB0b29sYmFyIGlzIG9wZW5lZC5cclxuICAgICAqIEBwYXJhbSBjb250YWluZXIgT3B0aW9uYWwgcGFyYW1ldGVyIHRoYXQgZGVmYXVsdHMgdG8gdGhlIGJvZHkgb2YgdGhlIEhUTUwgcGFnZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYW5lbHM6IElQYW5lbFtdLCBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQuYm9keSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJvb3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIGNsZWFyIGFsbCBjaGlsZHJlblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgICAgIGZvcihsZXQgcCBvZiB0aGlzLnBhbmVscylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgYiBvZiBwLmdldEJ1dHRvbnMoKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYi5yZW5kZXIodWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh1bCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Rvb2xiYXIudHMiLCJpbXBvcnQgXCJJUGFuZWxcIjsgaW1wb3J0IHsgSVBhbmVsIH0gZnJvbSAnLi9pcGFuZWwnO1xyXG5cclxuLyoqIERlc2NyaWJlcyB0aGUgdG9vbGJhci4gKi9cclxuZXhwb3J0IGNsYXNzIFRvb2xiYXJcclxue1xyXG4gICAgcHJpdmF0ZSByb290OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIHRvb2xiYXIuXHJcbiAgICAgKiBAcGFyYW0gcGFuZWxzIFRoZSBwYW5lbHMgdG8gYmUgZGlzcGxheWVkIHdoZW4gdGhlIHRvb2xiYXIgaXMgb3BlbmVkLlxyXG4gICAgICogQHBhcmFtIGNvbnRhaW5lciBPcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBkZWZhdWx0cyB0byB0aGUgYm9keSBvZiB0aGUgSFRNTCBwYWdlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhbmVsczogSVBhbmVsW10sIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5ib2R5KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMucm9vdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2xlYXIgYWxsIGNoaWxkcmVuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgZm9yKGxldCBwIG9mIHRoaXMucGFuZWxzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKGxldCBiIG9mIHAuZ2V0QnV0dG9ucygpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBiLnJlbmRlcih1bCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHVsKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdG9vbGJhci50cyIsIi8qKiBEZXNjcmliZXMgYSBidXR0b24gdG8gYmUgZGlzcGxheWVkIGluIHRoZSBjb2xsYXBzZWQgdG9vbGJhci4gKi9cclxuZXhwb3J0IGNsYXNzIEJ1dHRvblxyXG57XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZSB0aGUgYnV0dG9uLlxyXG4gICAgICogQHBhcmFtIGVtb2ppIFRoZSBpY29uIGZvciB0aGUgYnV0dG9uLiBUaGUgaW50ZW50aW9uIGlzIHRvIHVzZSBhIHNpbmdsZSBjaGFyYWN0ZXIgZW1vamlcclxuICAgICAqICAgYnV0IGl0J3MganVzdCBhIHN0cmluZywgc28gYW55dGhpbmcgZ29lcy5cclxuICAgICAqIEBwYXJhbSBnZXRWYWx1ZSBHZXRzIHRoZSBkaXNwbGF5ZWQgdmFsdWUgZm9yIHRoZSBidXR0b24uXHJcbiAgICAgKiBAcGFyYW0gZ2V0Q29sb3IgR2V0cyB0aGUgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIGJ1dHRvbi5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGVtb2ppOiBzdHJpbmcsIHB1YmxpYyBnZXRWYWx1ZTogKCkgPT4gc3RyaW5nLCBwdWJsaWMgZ2V0Q29sb3I6ICgpID0+IHN0cmluZylcclxuICAgIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXJzIHRoZSBidXR0b24gYnkgYWRkaW5nIGl0IGFzIGEgbmV3IGNoaWxkLlxyXG4gICAgICogQHBhcmFtIGNvbnRhaW5lciBUaGUgRE9NIG5vZGUgdGhhdCBzaG91bGQgY29udGFpbiB0aGlzIGJ1dHRvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbmRlcihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhpcy5nZXRDb2xvcigpfWApO1xyXG4gICAgICAgIGxpLmlubmVyVGV4dCA9IGAke3RoaXMuZW1vaml9ICR7dGhpcy5nZXRWYWx1ZSgpfWA7XHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYnV0dG9uLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==