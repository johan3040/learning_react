(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./app/components/Card.js":
/*!********************************!*\
  !*** ./app/components/Card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tooltip */ \"./app/components/Tooltip.js\");\n/* harmony import */ var _contexts_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../contexts/theme */ \"./app/contexts/theme.js\");\n\n\n\n\nfunction Card(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contexts_theme__WEBPACK_IMPORTED_MODULE_2__[\"ThemeConsumer\"], null, function (_ref) {\n    var theme = _ref.theme,\n        toggleTheme = _ref.toggleTheme;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"card card-\".concat(theme)\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: props.img\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      text: \"This is the age\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Age: \", props.age)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tooltip__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      text: \"This is the weight\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Weight: \", props.weight)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, \"Description: \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"Very happy doggo\")));\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\n//# sourceURL=webpack:///./app/components/Card.js?");

/***/ }),

/***/ "./app/components/Dogs.js":
/*!********************************!*\
  !*** ./app/components/Dogs.js ***!
  \********************************/
/*! exports provided: Dogs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dogs\", function() { return Dogs; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ \"./app/components/Card.js\");\n/* harmony import */ var _images_dog1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/dog1.jpg */ \"./app/images/dog1.jpg\");\n/* harmony import */ var _images_dog1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_dog1_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_dog2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/dog2.jpg */ \"./app/images/dog2.jpg\");\n/* harmony import */ var _images_dog2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_dog2_jpg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar Dogs =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Dogs, _Component);\n\n  function Dogs() {\n    _classCallCheck(this, Dogs);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Dogs).apply(this, arguments));\n  }\n\n  _createClass(Dogs, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"cardContainer\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        name: \"Charlie\",\n        img: _images_dog1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,\n        age: 3,\n        weight: 45\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        name: \"Ally\",\n        img: _images_dog2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,\n        age: 2,\n        weight: 20\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"Link\"], {\n        to: \"/joke?term=dog\",\n        className: \"jokeLink\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"btn\"\n      }, \"Get dog joke\")));\n    }\n  }]);\n\n  return Dogs;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dogs);\n\n//# sourceURL=webpack:///./app/components/Dogs.js?");

/***/ }),

/***/ "./app/components/Tooltip.js":
/*!***********************************!*\
  !*** ./app/components/Tooltip.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _withHover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withHover */ \"./app/components/withHover.js\");\n\n\n\nfunction Tooltip(_ref) {\n  var children = _ref.children,\n      text = _ref.text,\n      hovering = _ref.hovering;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tooltipContainer\"\n  }, hovering && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tooltip\"\n  }, text), children);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_withHover__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Tooltip));\n\n//# sourceURL=webpack:///./app/components/Tooltip.js?");

/***/ }),

/***/ "./app/components/withHover.js":
/*!*************************************!*\
  !*** ./app/components/withHover.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nfunction withHover(Component) {\n  return (\n    /*#__PURE__*/\n    function (_React$Component) {\n      _inherits(WithHover, _React$Component);\n\n      function WithHover(props) {\n        var _this;\n\n        _classCallCheck(this, WithHover);\n\n        _this = _possibleConstructorReturn(this, _getPrototypeOf(WithHover).call(this, props));\n        _this.state = {\n          hovering: false\n        };\n        return _this;\n      }\n\n      _createClass(WithHover, [{\n        key: \"mouseEnter\",\n        value: function mouseEnter() {\n          this.setState({\n            hovering: true\n          });\n        }\n      }, {\n        key: \"mouseLeave\",\n        value: function mouseLeave() {\n          this.setState({\n            hovering: false\n          });\n        }\n      }, {\n        key: \"render\",\n        value: function render() {\n          var _this2 = this;\n\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n            onMouseEnter: function onMouseEnter() {\n              return _this2.mouseEnter();\n            },\n            onMouseLeave: function onMouseLeave() {\n              return _this2.mouseLeave();\n            }\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, this.props, {\n            hovering: this.state.hovering\n          })));\n        }\n      }]);\n\n      return WithHover;\n    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)\n  );\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (withHover);\n\n//# sourceURL=webpack:///./app/components/withHover.js?");

/***/ }),

/***/ "./app/images/dog1.jpg":
/*!*****************************!*\
  !*** ./app/images/dog1.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"7d05c0ab375bc6527b5aca4c05e11120.jpg\";\n\n//# sourceURL=webpack:///./app/images/dog1.jpg?");

/***/ }),

/***/ "./app/images/dog2.jpg":
/*!*****************************!*\
  !*** ./app/images/dog2.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"4e7ffd3e1a5fd0803e7d2531b183e19b.jpg\";\n\n//# sourceURL=webpack:///./app/images/dog2.jpg?");

/***/ })

}]);