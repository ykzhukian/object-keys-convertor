"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.y = exports.x = exports.C = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _mapping = _interopRequireDefault(require("./mapping"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var test = 123;
console.log(test, (0, _mapping["default"])());

var C = function C() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, C);
  (0, _defineProperty2["default"])(this, "x", 10);
  (0, _defineProperty2["default"])(this, "getX", function () {
    return _this.x;
  });
  (0, _defineProperty2["default"])(this, "setX", function (newVal) {
    _this.x = newVal;
  });
};

exports.C = C;
var x = new C();
exports.x = x;

var y = _objectSpread({}, {
  some: 'value'
});

exports.y = y;
x.setX(13);