(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var domExplorer_1 = require('./utils/domExplorer');

var DomStateStorage = function () {
    function DomStateStorage(greeting, domExplorer) {
        _classCallCheck(this, DomStateStorage);

        this.greeting = greeting;
        this._domExplorer = domExplorer;
        this.init();
    }

    _createClass(DomStateStorage, [{
        key: "init",
        value: function init() {
            this.explore();
            document.body.innerHTML = "<h1>" + this.greeting + "</h1>";
        }
    }, {
        key: "explore",
        value: function explore() {
            // 
            var doms = this._domExplorer.processOperator("body");
            console.log("Body dom object is: ", doms);
        }
    }]);

    return DomStateStorage;
}();

;
// The actual domStateStorage object that we expose as a module or via a
// global. It's extended by pulling in one of our other libraries.
exports.domStateStorage = new DomStateStorage("Hello World", new domExplorer_1.DomExplorer());

},{"./utils/domExplorer":2}],2:[function(require,module,exports){
/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DomExplorer = function () {
    function DomExplorer() {
        _classCallCheck(this, DomExplorer);

        this.defaultSelector = "mySelector";
    }

    _createClass(DomExplorer, [{
        key: "processOperator",
        value: function processOperator(selector) {
            // querySelectorAll with selector key //
            var $dom = $(selector);
            return document.querySelectorAll(selector);
        }
    }]);

    return DomExplorer;
}();

exports.DomExplorer = DomExplorer;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZG9tU3RhdGVTdG9yYWdlLnRzIiwic3JjL3V0aWxzL2RvbUV4cGxvcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsNEJBQTRCLEFBQXFCLEFBQUMsQUFHbEQ7OztBQUVJLDZCQUFtQixBQUFnQixVQUFFLEFBQXdCOzs7QUFBMUMsYUFBUSxXQUFSLEFBQVEsQUFBUTtBQUMvQixBQUFJLGFBQUMsQUFBWSxlQUFHLEFBQVcsQUFBQztBQUNoQyxBQUFJLGFBQUMsQUFBSSxBQUFFLEFBQUMsQUFDaEI7QUFBQyxBQUNELEFBQUk7Ozs7O0FBQ0EsQUFBSSxpQkFBQyxBQUFPLEFBQUUsQUFBQztBQUNmLEFBQVEscUJBQUMsQUFBSSxLQUFDLEFBQVMsWUFBRyxBQUFNLFNBQUcsQUFBSSxLQUFDLEFBQVEsV0FBRyxBQUFPLEFBQUMsQUFDL0Q7QUFBQyxBQUVPLEFBQU87Ozs7QUFDWCxBQUFHO0FBQ0gsZ0JBQUksQUFBSSxPQUFHLEFBQUksS0FBQyxBQUFZLGFBQUMsQUFBZSxnQkFBQyxBQUFNLEFBQUMsQUFBQztBQUNyRCxBQUFPLG9CQUFDLEFBQUcsSUFBQyxBQUFzQix3QkFBRSxBQUFJLEFBQUMsQUFBQyxBQUM5QztBQUFDLEFBQ0wsQUFBQzs7Ozs7O0FBQUEsQUFBQztBQUVGLEFBQXdFO0FBQ3hFLEFBQWtFO0FBQ3ZELFFBQWUsa0JBQUcsSUFBSSxBQUFlLGdCQUFDLEFBQWEsZUFBRSxJQUFJLGNBQVcsQUFBRSxBQUFDLEFBQUM7OztBQ3ZCbkYsQUFBb0U7QUFFcEU7Ozs7Ozs7QUFFSTs7O0FBQ0ksQUFBSSxhQUFDLEFBQWUsa0JBQUcsQUFBWSxBQUFDLEFBQ3hDO0FBQUMsQUFFTSxBQUFlOzs7O3dDQUFDLEFBQWdCO0FBQ25DLEFBQXdDO0FBQ3hDLGdCQUFJLEFBQUksT0FBRyxBQUFDLEVBQUMsQUFBUSxBQUFDLEFBQUM7QUFDdkIsQUFBTSxtQkFBQyxBQUFRLFNBQUMsQUFBZ0IsaUJBQUMsQUFBUSxBQUFDLEFBQUMsQUFDL0M7QUFBQyxBQUNMLEFBQUM7Ozs7OztBQVhZLFFBQVcsY0FXdkIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgRG9tRXhwbG9yZXIgfSBmcm9tICcuL3V0aWxzL2RvbUV4cGxvcmVyJztcclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuY2xhc3MgRG9tU3RhdGVTdG9yYWdlIHtcclxuICAgIHByaXZhdGUgX2RvbUV4cGxvcmVyOiBEb21FeHBsb3JlcjtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBncmVldGluZzogc3RyaW5nLCBkb21FeHBsb3JlcjogRG9tRXhwbG9yZXIpIHtcclxuICAgICAgICB0aGlzLl9kb21FeHBsb3JlciA9IGRvbUV4cGxvcmVyO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmV4cGxvcmUoKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IFwiPGgxPlwiICsgdGhpcy5ncmVldGluZyArIFwiPC9oMT5cIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4cGxvcmUoKSB7XHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgdmFyIGRvbXMgPSB0aGlzLl9kb21FeHBsb3Jlci5wcm9jZXNzT3BlcmF0b3IoXCJib2R5XCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQm9keSBkb20gb2JqZWN0IGlzOiBcIiwgZG9tcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBUaGUgYWN0dWFsIGRvbVN0YXRlU3RvcmFnZSBvYmplY3QgdGhhdCB3ZSBleHBvc2UgYXMgYSBtb2R1bGUgb3IgdmlhIGFcclxuLy8gZ2xvYmFsLiBJdCdzIGV4dGVuZGVkIGJ5IHB1bGxpbmcgaW4gb25lIG9mIG91ciBvdGhlciBsaWJyYXJpZXMuXHJcbmV4cG9ydCBsZXQgZG9tU3RhdGVTdG9yYWdlID0gbmV3IERvbVN0YXRlU3RvcmFnZShcIkhlbGxvIFdvcmxkXCIsIG5ldyBEb21FeHBsb3JlcigpKTsiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvaW5kZXguZC50c1wiIC8+XHJcblxyXG5leHBvcnQgY2xhc3MgRG9tRXhwbG9yZXIge1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0U2VsZWN0b3I6c3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0U2VsZWN0b3IgPSBcIm15U2VsZWN0b3JcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJvY2Vzc09wZXJhdG9yKHNlbGVjdG9yOiBzdHJpbmcpIDogTm9kZUxpc3RPZjxFbGVtZW50PiB7XHJcbiAgICAgICAgLy8gcXVlcnlTZWxlY3RvckFsbCB3aXRoIHNlbGVjdG9yIGtleSAvL1xyXG4gICAgICAgIHZhciAkZG9tID0gJChzZWxlY3Rvcik7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gICAgfVxyXG59Il19
