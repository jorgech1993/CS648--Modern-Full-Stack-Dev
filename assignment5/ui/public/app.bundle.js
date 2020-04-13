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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProductList_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductList.jsx */ \"./src/ProductList.jsx\");\n/* globals React ReactDOM */\n\nvar element = React.createElement(_ProductList_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null);\nReactDOM.render(element, document.getElementById('contents'));\n\n//# sourceURL=webpack:///./src/App.jsx?");

/***/ }),

/***/ "./src/ProductAdd.jsx":
/*!****************************!*\
  !*** ./src/ProductAdd.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductAdd; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/* globals React PropTypes */\nvar ProductAdd =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(ProductAdd, _React$Component);\n\n  function ProductAdd() {\n    var _this;\n\n    _classCallCheck(this, ProductAdd);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductAdd).call(this));\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(ProductAdd, [{\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      e.preventDefault();\n      var form = document.forms.productAdd;\n      var product = {\n        category: form.category.value,\n        pricePerUnit: form.pricePerUnit.value.replace('$', ''),\n        productName: form.productName.value,\n        imageUrl: form.imageUrl.value\n      };\n      this.props.createProduct(product);\n      form.category.value = 'Shirts';\n      form.pricePerUnit.value = '$';\n      form.productName.value = '';\n      form.imageUrl.value = '';\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"form\", {\n        id: \"inventoryForm\",\n        name: \"productAdd\",\n        onSubmit: this.handleSubmit\n      }, React.createElement(\"table\", {\n        className: \"formTable\"\n      }, React.createElement(\"tbody\", null, React.createElement(\"tr\", null, React.createElement(\"td\", {\n        className: \"formTableData\"\n      }, \"Category\"), React.createElement(\"td\", {\n        className: \"formTableData\"\n      }, \"Price Per Unit\")), React.createElement(\"tr\", null, React.createElement(\"td\", {\n        className: \"formTableData\"\n      }, React.createElement(\"select\", {\n        id: \"categoryList\",\n        name: \"category\"\n      }, React.createElement(\"option\", {\n        value: \"Shirts\"\n      }, \"Shirts\"), React.createElement(\"option\", {\n        value: \"Jeans\"\n      }, \"Jeans\"), React.createElement(\"option\", {\n        value: \"Jackets\"\n      }, \"Jackets\"), React.createElement(\"option\", {\n        value: \"Sweaters\"\n      }, \"Sweaters\"), React.createElement(\"option\", {\n        value: \"Accessories\"\n      }, \"Accessories\"))), React.createElement(\"td\", {\n        className: \"formTableData\"\n      }, React.createElement(\"input\", {\n        type: \"text\",\n        name: \"pricePerUnit\",\n        defaultValue: \"$\"\n      }))), React.createElement(\"tr\", null, React.createElement(\"td\", {\n        className: \"formTableData\"\n      }, \"Product Name\"), React.createElement(\"td\", {\n        className: \"formTableData\"\n      }, \"Image URL\")), React.createElement(\"tr\", null, React.createElement(\"td\", {\n        className: \"formTableData\"\n      }, React.createElement(\"input\", {\n        type: \"text\",\n        name: \"productName\"\n      })), React.createElement(\"td\", {\n        className: \"formTableData\"\n      }, React.createElement(\"input\", {\n        type: \"text\",\n        name: \"imageUrl\"\n      }))))), React.createElement(\"button\", {\n        id: \"addButton\",\n        type: \"submit\"\n      }, \"Add Product\"));\n    }\n  }]);\n\n  return ProductAdd;\n}(React.Component);\n\n\n\n//# sourceURL=webpack:///./src/ProductAdd.jsx?");

/***/ }),

/***/ "./src/ProductList.jsx":
/*!*****************************!*\
  !*** ./src/ProductList.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Inventory; });\n/* harmony import */ var _ProductTable_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductTable.jsx */ \"./src/ProductTable.jsx\");\n/* harmony import */ var _ProductAdd_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductAdd.jsx */ \"./src/ProductAdd.jsx\");\n/* harmony import */ var _graphQLFetch_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphQLFetch.jsx */ \"./src/graphQLFetch.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/* globals React */\n\n/* eslint \"react/jsx-no-undef\": \"off\" */\n\n\n\n\nvar Inventory =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Inventory, _React$Component);\n\n  function Inventory() {\n    var _this;\n\n    _classCallCheck(this, Inventory);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Inventory).call(this));\n    _this.state = {\n      products: []\n    };\n    _this.createProduct = _this.createProduct.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Inventory, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.loadData();\n    }\n  }, {\n    key: \"createProduct\",\n    value: function () {\n      var _createProduct = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(product) {\n        var query, data;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                query = \"mutation productAdd($product: ProductInputs!) {\\n  productAdd(product: $product) { id } }\";\n                _context.next = 3;\n                return Object(_graphQLFetch_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(query, {\n                  product: product\n                });\n\n              case 3:\n                data = _context.sent;\n\n                if (data) {\n                  this.loadData();\n                }\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function createProduct(_x) {\n        return _createProduct.apply(this, arguments);\n      }\n\n      return createProduct;\n    }()\n  }, {\n    key: \"loadData\",\n    value: function () {\n      var _loadData = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee2() {\n        var query, data;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                query = \"query {\\n      productList {\\n        id category productName pricePerUnit imageUrl\\n      }\\n    }\";\n                _context2.next = 3;\n                return Object(_graphQLFetch_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(query);\n\n              case 3:\n                data = _context2.sent;\n\n                if (data) {\n                  this.setState({\n                    products: data.productList\n                  });\n                }\n\n              case 5:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function loadData() {\n        return _loadData.apply(this, arguments);\n      }\n\n      return loadData;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(React.Fragment, null, React.createElement(\"h1\", null, \"My Company Inventory\"), React.createElement(\"div\", {\n        id: \"tableHeader\"\n      }, \"Showing all available products\"), React.createElement(\"hr\", {\n        align: \"left\"\n      }), React.createElement(_ProductTable_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        products: this.state.products\n      }), React.createElement(\"div\", {\n        id: \"fieldsHeader\"\n      }, \"Add a new product to inventory\"), React.createElement(\"hr\", {\n        align: \"left\"\n      }), React.createElement(_ProductAdd_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        createProduct: this.createProduct\n      }));\n    }\n  }]);\n\n  return Inventory;\n}(React.Component);\n\n\n\n//# sourceURL=webpack:///./src/ProductList.jsx?");

/***/ }),

/***/ "./src/ProductTable.jsx":
/*!******************************!*\
  !*** ./src/ProductTable.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InventoryTable; });\n/* globals React */\nfunction ProductRow(props) {\n  var product = props.product;\n  return React.createElement(\"tr\", null, React.createElement(\"td\", {\n    className: \"bordered-table\"\n  }, product.productName), React.createElement(\"td\", {\n    className: \"bordered-table\"\n  }, \"$\".concat(product.pricePerUnit)), React.createElement(\"td\", {\n    className: \"bordered-table\"\n  }, product.category), React.createElement(\"td\", {\n    className: \"bordered-table\"\n  }, ' ', React.createElement(\"a\", {\n    href: product.imageUrl,\n    rel: \"noopener noreferrer\",\n    target: \"_blank\"\n  }, \"View\")));\n}\n\nfunction InventoryTable(props) {\n  var productRows = props.products.map(function (product) {\n    return React.createElement(ProductRow, {\n      key: product.id,\n      product: product\n    });\n  });\n  return React.createElement(\"table\", {\n    className: \"bordered-table\"\n  }, React.createElement(\"thead\", null, React.createElement(\"tr\", null, React.createElement(\"th\", {\n    className: \"bordered-table\"\n  }, \"Product Name\"), React.createElement(\"th\", {\n    className: \"bordered-table\"\n  }, \"Price\"), React.createElement(\"th\", {\n    className: \"bordered-table\"\n  }, \"Category\"), React.createElement(\"th\", {\n    className: \"bordered-table\"\n  }, \"Image\"))), React.createElement(\"tbody\", null, productRows));\n}\n\n//# sourceURL=webpack:///./src/ProductTable.jsx?");

/***/ }),

/***/ "./src/graphQLFetch.jsx":
/*!******************************!*\
  !*** ./src/graphQLFetch.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return graphQLFetch; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction jsonDateReviver(key, value) {\n  return value;\n}\n\nfunction graphQLFetch(_x) {\n  return _graphQLFetch.apply(this, arguments);\n}\n\nfunction _graphQLFetch() {\n  _graphQLFetch = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(query) {\n    var variables,\n        response,\n        body,\n        result,\n        _args = arguments;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            variables = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};\n            _context.prev = 1;\n            _context.next = 4;\n            return fetch(window.ENV.UI_API_ENDPOINT, {\n              method: 'POST',\n              headers: {\n                'Content-Type': 'application/json'\n              },\n              body: JSON.stringify({\n                query: query,\n                variables: variables\n              })\n            });\n\n          case 4:\n            response = _context.sent;\n            _context.next = 7;\n            return response.text();\n\n          case 7:\n            body = _context.sent;\n            result = JSON.parse(body, jsonDateReviver);\n            return _context.abrupt(\"return\", result.data);\n\n          case 12:\n            _context.prev = 12;\n            _context.t0 = _context[\"catch\"](1);\n            alert(\"Error in sending data to server: \".concat(_context.t0.message));\n\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 12]]);\n  }));\n  return _graphQLFetch.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./src/graphQLFetch.jsx?");

/***/ })

/******/ });