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
    }

    _createClass(DomStateStorage, [{
        key: "init",
        value: function init() {
            this.explore();
            return "<h1>" + this.greeting + "</h1>";
        }
    }, {
        key: "explore",
        value: function explore() {
            var doms = this._domExplorer.processOperator("body");
            console.log("Body dom object is: ", doms);
        }
    }]);

    return DomStateStorage;
}();

;
var greeter = new DomStateStorage("Welcome!!", new domExplorer_1.DomExplorer());
document.body.innerHTML = greeter.init();

},{"./utils/domExplorer":2}],2:[function(require,module,exports){
/// <reference path="../../typings/index.d.ts" />
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
            // querySelectorAll with selector key
            var $dom = $(selector);
            return document.querySelectorAll(selector);
        }
    }]);

    return DomExplorer;
}();

exports.DomExplorer = DomExplorer;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZG9tU3RhdGVTdG9yYWdlLnRzIiwic3JjL3V0aWxzL2RvbUV4cGxvcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUEsNEJBQTRCLEFBQXFCLEFBQUMsQUFFbEQ7OztBQUVJLDZCQUFtQixBQUFnQixVQUFFLEFBQXdCOzs7QUFBMUMsYUFBUSxXQUFSLEFBQVEsQUFBUTtBQUMvQixBQUFJLGFBQUMsQUFBWSxlQUFHLEFBQVcsQUFBQyxBQUNwQztBQUFDLEFBQ0QsQUFBSTs7Ozs7QUFDQSxBQUFJLGlCQUFDLEFBQU8sQUFBRSxBQUFDO0FBQ2YsQUFBTSxtQkFBQyxBQUFNLFNBQUcsQUFBSSxLQUFDLEFBQVEsV0FBRyxBQUFPLEFBQUMsQUFDNUM7QUFBQyxBQUVPLEFBQU87Ozs7QUFDWCxnQkFBSSxBQUFJLE9BQUcsQUFBSSxLQUFDLEFBQVksYUFBQyxBQUFlLGdCQUFDLEFBQU0sQUFBQyxBQUFDO0FBQ3JELEFBQU8sb0JBQUMsQUFBRyxJQUFDLEFBQXNCLHdCQUFFLEFBQUksQUFBQyxBQUFDLEFBQzlDO0FBQUMsQUFDTCxBQUFDOzs7Ozs7QUFBQSxBQUFDO0FBRUYsSUFBSSxBQUFPLFVBQUcsSUFBSSxBQUFlLGdCQUFDLEFBQVcsYUFBRSxJQUFJLGNBQVcsQUFBRSxBQUFDLEFBQUM7QUFDbEUsQUFBUSxTQUFDLEFBQUksS0FBQyxBQUFTLFlBQUcsQUFBTyxRQUFDLEFBQUksQUFBRSxBQUFDOzs7QUNuQnpDLEFBQWlEO0FBRWpEOzs7Ozs7O0FBRUk7OztBQUNJLEFBQUksYUFBQyxBQUFlLGtCQUFHLEFBQVksQUFBQyxBQUN4QztBQUFDLEFBRU0sQUFBZTs7Ozt3Q0FBQyxBQUFnQjtBQUNuQyxBQUFxQztBQUNyQyxnQkFBSSxBQUFJLE9BQUcsQUFBQyxFQUFDLEFBQVEsQUFBQyxBQUFDO0FBQ3ZCLEFBQU0sbUJBQUMsQUFBUSxTQUFDLEFBQWdCLGlCQUFDLEFBQVEsQUFBQyxBQUFDLEFBQy9DO0FBQUMsQUFDTCxBQUFDOzs7Ozs7QUFYWSxRQUFXLGNBV3ZCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7IERvbUV4cGxvcmVyIH0gZnJvbSAnLi91dGlscy9kb21FeHBsb3Jlcic7XHJcblxyXG5jbGFzcyBEb21TdGF0ZVN0b3JhZ2Uge1xyXG4gICAgcHJpdmF0ZSBfZG9tRXhwbG9yZXI6IERvbUV4cGxvcmVyO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGdyZWV0aW5nOiBzdHJpbmcsIGRvbUV4cGxvcmVyOiBEb21FeHBsb3Jlcikge1xyXG4gICAgICAgIHRoaXMuX2RvbUV4cGxvcmVyID0gZG9tRXhwbG9yZXI7XHJcbiAgICB9XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuZXhwbG9yZSgpO1xyXG4gICAgICAgIHJldHVybiBcIjxoMT5cIiArIHRoaXMuZ3JlZXRpbmcgKyBcIjwvaDE+XCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHBsb3JlKCkge1xyXG4gICAgICAgIHZhciBkb21zID0gdGhpcy5fZG9tRXhwbG9yZXIucHJvY2Vzc09wZXJhdG9yKFwiYm9keVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJvZHkgZG9tIG9iamVjdCBpczogXCIsIGRvbXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGdyZWV0ZXIgPSBuZXcgRG9tU3RhdGVTdG9yYWdlKFwiV2VsY29tZSEhXCIsIG5ldyBEb21FeHBsb3JlcigpKTtcclxuZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBncmVldGVyLmluaXQoKTsiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmV4cG9ydCBjbGFzcyBEb21FeHBsb3JlciB7XHJcbiAgICBwcml2YXRlIGRlZmF1bHRTZWxlY3RvcjpzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRlZmF1bHRTZWxlY3RvciA9IFwibXlTZWxlY3RvclwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcm9jZXNzT3BlcmF0b3Ioc2VsZWN0b3I6IHN0cmluZykgOiBOb2RlTGlzdE9mPEVsZW1lbnQ+IHtcclxuICAgICAgICAvLyBxdWVyeVNlbGVjdG9yQWxsIHdpdGggc2VsZWN0b3Iga2V5XHJcbiAgICAgICAgdmFyICRkb20gPSAkKHNlbGVjdG9yKTtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbiAgICB9XHJcbn0iXX0=
