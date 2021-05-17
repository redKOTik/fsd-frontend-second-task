(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jquery")) : factory(root["jquery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_jquery__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./plugin/multiselect.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugin/multiselect.ts":
/*!*******************************!*\
  !*** ./plugin/multiselect.ts ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var _plugin_mvc_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugin/mvc/controller */ "./plugin/mvc/controller.ts");

;

(function ($) {
  var pluginName = 'multiselect';
  var defaultOptions = {
    state: 'Collapsed',
    options: [{
      text: 'спальни',
      value: '0',
      unique: false
    }, {
      text: 'кровати',
      value: '0',
      unique: false
    }, {
      text: 'ванные комнаты',
      value: '0',
      unique: false
    }],
    title: 'Сколько комнат',
    totalTextTitle: 'комнаты'
  };
  var methods = {
    init: function init(object, options) {
      object.data(pluginName, new _plugin_mvc_controller__WEBPACK_IMPORTED_MODULE_0__["Controller"](object, options));
    },
    update: function update(object, content) {
      object.data(pluginName).getModel().setData(content, true);
    },
    destroy: function destroy(object) {
      object.data(pluginName).destroy();
      object.removeData(pluginName);
    }
  };

  $.fn.multiselect = function (options) {
    var result;

    var _this = this.data(pluginName);

    if (typeof options === 'string' && options === 'update') {
      methods[options].apply(this, [this, arguments[1]]);
    } else if (typeof options === 'string' && options === 'destroy') {
      methods[options](this);
    } else if (typeof options === 'boolean') {
      result = _this;
    } else {
      var opts = $.extend({}, defaultOptions, options);
      methods['init'].apply(this, [this, opts]);
    }

    return result || this;
  };
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./plugin/mvc/controller.ts":
/*!**********************************!*\
  !*** ./plugin/mvc/controller.ts ***!
  \**********************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./plugin/mvc/view.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./plugin/mvc/model.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Controller = /*#__PURE__*/function () {
  function Controller(object, options) {
    var _this = this;

    _classCallCheck(this, Controller);

    _defineProperty(this, "updateModelHandler", function (event) {
      var target = event.target;
      var itIsThat = $(_this.view.mask).has(target).length !== 0 || $(_this.view.mask).is(target);

      if (event.type === 'blur') {
        _this.model.updateData('save');

        _this.model.updateData('state', 'Collapsed');

        return;
      }

      if (target && itIsThat && target instanceof HTMLButtonElement && target.classList.contains('apply__button')) {
        _this.model.updateData('save');

        return;
      }

      if (target && itIsThat && target instanceof HTMLButtonElement && target.classList.contains('clear__button')) {
        _this.model.updateData('clear');

        return;
      }

      if (target && itIsThat && target instanceof HTMLButtonElement && target.classList.length === 0) {
        var _target$parentNode;

        var option = (_target$parentNode = target.parentNode) === null || _target$parentNode === void 0 ? void 0 : _target$parentNode.parentNode;
        var optionId = option.dataset.id;
        var operation = target.innerHTML;

        _this.model.updateData(optionId, operation);

        return;
      }

      if (target && itIsThat && target instanceof HTMLDivElement && target.classList.contains('multiselect') && target.classList.contains('active')) {
        _this.model.updateData('save');

        _this.model.updateData('state', 'Collapsed');

        return;
      }

      if (target && itIsThat && target instanceof HTMLDivElement && target.classList.contains('multiselect') && !target.classList.contains('active')) {
        _this.model.updateData('state', 'Expanded');

        return;
      }

      if (target && itIsThat && (target.classList.contains('multiselect__title') || target.classList.contains('multiselect__arrow'))) {
        var div = target.parentNode;

        if (div && div.classList.contains('multiselect') && div.classList.contains('active')) {
          _this.model.updateData('save');

          _this.model.updateData('state', 'Collapsed');

          return;
        }

        if (target && div.classList.contains('multiselect') && !div.classList.contains('active')) {
          _this.model.updateData('state', 'Expanded');

          return;
        }
      }

      if (target && _this.view.mask.classList.contains('active') && !itIsThat) {
        _this.model.updateData('save');

        _this.model.updateData('state', 'Collapsed');

        return;
      }
    });

    this.model = new _model__WEBPACK_IMPORTED_MODULE_1__["Model"](options);
    this.view = new _view__WEBPACK_IMPORTED_MODULE_0__["View"](object, this.model);
    this.view.bindChangeModelHandler(this.updateModelHandler);
  }

  _createClass(Controller, [{
    key: "getModel",
    value: function getModel() {
      return this.model;
    }
  }]);

  return Controller;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./plugin/mvc/model.ts":
/*!*****************************!*\
  !*** ./plugin/mvc/model.ts ***!
  \*****************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Model = /*#__PURE__*/function () {
  function Model(options) {
    _classCallCheck(this, Model);

    this.defaultOptions = options;
    this.options = JSON.parse(JSON.stringify(this.defaultOptions));
    this.clearIsActive = this.isActiveClear(this.options.options);
    this.applyIsActive = false;
    this.tempCondition = JSON.parse(JSON.stringify(this.defaultOptions.options));
  }

  _createClass(Model, [{
    key: "subscribe",
    value: function subscribe(observer) {
      var _this = this;

      this.observer = observer;
      return {
        unsubscribe: function unsubscribe() {
          _this.observer = undefined;
        }
      };
    }
  }, {
    key: "setData",
    value: function setData(content, save) {
      //console.log('update model', content);
      save ? this.tempCondition = content.options : false;
      this.clearIsActive = this.isActiveClear(content.options);
      var prevOptions = JSON.parse(JSON.stringify(this.options));
      this.options = Object.assign({}, this.options, content);

      if (typeof this.observer === 'function') {
        this.observer(this.options, prevOptions, {
          clear: this.clearIsActive,
          apply: this.applyIsActive
        });
      }
    }
  }, {
    key: "getDefaultOptions",
    value: function getDefaultOptions() {
      return _objectSpread({}, this.defaultOptions);
    }
  }, {
    key: "isActiveClear",
    value: function isActiveClear(options) {
      var el = options.find(function (el) {
        return +el.value > 0;
      });
      return el !== undefined;
    }
  }, {
    key: "updateData",
    value: function updateData(option, value) {
      if (option === 'state' && (value === 'Expanded' || value === 'Collapsed')) {
        this.applyIsActive = false;
        var content = JSON.parse(JSON.stringify(this.options));
        content.state = value;
        content.options = JSON.parse(JSON.stringify(this.tempCondition));
        this.setData(content);
      } else if (option === 'save') {
        this.applyIsActive = false;
        this.tempCondition = JSON.parse(JSON.stringify(this.options.options));
        this.setData(this.options);
      } else if (option === 'clear') {
        this.applyIsActive = true;

        var _content = JSON.parse(JSON.stringify(this.options));

        _content.options.forEach(function (el) {
          return el.value = '0';
        });

        this.setData(_content);
      } else {
        this.applyIsActive = true;

        var _content2 = JSON.parse(JSON.stringify(this.options));

        var newValue = +_content2.options[+option].value;
        value === '+' ? newValue++ : newValue--;
        newValue < 0 ? newValue = 0 : newValue;
        _content2.options[+option].value = newValue.toString();
        this.setData(_content2);
      } //console.log(`update model through view`, this.options);

    }
  }]);

  return Model;
}();

/***/ }),

/***/ "./plugin/mvc/view.ts":
/*!****************************!*\
  !*** ./plugin/mvc/view.ts ***!
  \****************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony import */ var _utils_view_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/view.functions */ "./plugin/utils/view.functions.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var View = /*#__PURE__*/function () {
  function View(view, model) {
    var _this = this;

    _classCallCheck(this, View);

    _defineProperty(this, "updateView", function (data, prevData, state) {
      Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["setBtnState"])(_this.mask, state);
      Object.keys(data).forEach(function (key) {
        if (Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["checkKey"])(key, data, prevData)) {
          switch (key) {
            case 'state':
              _this.mask.classList.toggle('active', data.state === 'Expanded');

              return;

            case 'options':
              data.options.forEach(function (item, index) {
                Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["setMaskValue"])(_this.mask, item, index);
                Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["setViewValue"])(_this.view, item, index);
              });
              Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["changeTitle"])(_this.mask, data);
              return;

            case 'title':
              Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["setTitle"])(_this.mask, data.title);
              return;
          }
        }
      });
    });

    this.model = model;
    this.view = view;
    this.unsub = this.model.subscribe(this.updateView);
    this.mask = Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["createMultiselect"])(view, model);

    if (this.model.defaultOptions.state === 'Expanded') {
      this.mask.focus();
    }
  }

  _createClass(View, [{
    key: "bindChangeModelHandler",
    value: function bindChangeModelHandler(handler) {
      this.mask.addEventListener('click', handler);
      this.mask.addEventListener('blur', handler);
      this.mask.querySelectorAll('button').forEach(function (button) {
        $(button).on('mousedown', function () {
          return false;
        });
      });
    }
  }]);

  return View;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./plugin/utils/view.functions.ts":
/*!****************************************!*\
  !*** ./plugin/utils/view.functions.ts ***!
  \****************************************/
/*! exports provided: createMultiselect, setMaskValue, setViewValue, setTitle, changeTitle, checkKey, setBtnState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMultiselect", function() { return createMultiselect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMaskValue", function() { return setMaskValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setViewValue", function() { return setViewValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTitle", function() { return setTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTitle", function() { return changeTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkKey", function() { return checkKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBtnState", function() { return setBtnState; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createMultiselect(view, model) {
  view.addClass('hidden');
  var active = model.defaultOptions.state === 'Expanded' ? 'active' : null;
  var spanTitle = createElement('span', 'multiselect__title');
  var divHead = createElement('div', active === null ? 'multiselect' : ['multiselect', active]);
  divHead.tabIndex = -1;
  var divContent = createElement('div', 'multiselect__content');
  var icon = createElement('div', 'multiselect__arrow');
  icon.classList.add('icon');
  spanTitle.textContent = model.defaultOptions.title;
  divHead.insertAdjacentElement('beforeend', spanTitle);
  divHead.insertAdjacentElement('beforeend', icon);
  divHead.insertAdjacentElement('beforeend', divContent);
  view[0].insertAdjacentElement('afterend', divHead);
  model.defaultOptions.options.forEach(function (option, index) {
    divContent.insertAdjacentElement('beforeend', createOption(option, index));
  });
  divContent.insertAdjacentElement('beforeend', createBtns());
  changeTitle(divHead, model.options);
  return divHead;
}
function setMaskValue(mask, item, index) {
  var option = mask.querySelector(".option[data-id=\"".concat(index, "\"]"));
  var counter = option === null || option === void 0 ? void 0 : option.querySelector('.option__counter span');
  var optionName = option === null || option === void 0 ? void 0 : option.querySelector('.option__text');
  var decrementBtn = option === null || option === void 0 ? void 0 : option.querySelector('.option__counter button:first-of-type');
  counter.textContent = item.value;
  optionName.textContent = item.text;
  decrementBtn.classList.toggle('disabled', +item.value === 0);
}
function setViewValue(view, item, index) {
  var option = view[0].querySelectorAll('option')[index];
  option.value = item.value;
  option.textContent = item.text;
}
function setTitle(mask, title) {
  var titleEl = mask.querySelector('span.multiselect__title');
  titleEl.textContent = title;
}
function changeTitle(mask, data) {
  makeTitle(mask, data.options, data.totalTextTitle, data.title);
}

function makeTitle(mask, options, totalTitle, defaultTitle) {
  var title = '';
  var compositeTitle = '';
  var amount = 0;
  var otherAmount = 0;
  options.forEach(function (item) {
    if (item.unique) {
      compositeTitle += +item.value > 0 ? "".concat(item.value, " ").concat(item.text, ", ") : '';
      otherAmount += +item.value;
    } else {
      amount += +item.value;
    }
  });
  var totalAmount = amount + otherAmount;

  if (totalAmount > 0) {
    title = (amount > 0 ? "".concat(amount, " ").concat(totalTitle, ", ") : '') + compositeTitle;
  } else {
    title = defaultTitle;
  }

  if (totalAmount > 0) {
    title = title.substring(0, title.length - 2);
  }

  setTitle(mask, title.length > 19 ? title.substring(0, 20) + '...' : title.length === 0 ? defaultTitle : title);
}

function checkKey(key, data, oldData) {
  if (key === 'state' || key === 'title') {
    return data[key] !== oldData[key];
  } else if (key === 'options') {
    if (data.options.length !== oldData.options.length) {
      return true;
    } else {
      var option = data.options.find(function (option, index) {
        return oldData.options[index].value !== option.value || oldData.options[index].text !== option.text;
      });
      return option !== undefined;
    }
  } else {
    return false;
  }
}
function setBtnState(mask, state) {
  var btnDiv = mask.querySelector('.multiselect__buttons');
  var btnClear = mask.querySelector('.clear__button');
  var btnApply = mask.querySelector('.apply__button');
  btnClear.classList.toggle('active', state.clear);
  btnApply.classList.toggle('active', state.apply);
  btnDiv.classList.toggle('off', !state.clear && !state.apply);
}

function createOption(option, id) {
  var divOption = createElement('div', 'option');
  divOption.dataset.id = id.toString();
  var divTextOption = createElement('div', 'option__text');
  var divCounter = createElement('div', 'option__counter');
  divTextOption.textContent = option.text;
  divCounter.innerHTML = "\n        <button class=\"".concat(+option.value === 0 ? 'disabled' : '', "\">-</button><span>").concat(option.value, "</span><button>+</button>\n    ");
  divOption.insertAdjacentElement('beforeend', divTextOption);
  divOption.insertAdjacentElement('beforeend', divCounter);
  return divOption;
}

function createBtns() {
  var divBtns = createElement('div', ['multiselect__buttons', 'off']);
  divBtns.innerHTML = "\n        <button class=\"clear__button\">\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C</button><button class=\"apply__button\">\u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C</button>\n    ";
  return divBtns;
}

function createElement(tag, className) {
  var _element$classList;

  var element = document.createElement(tag);
  if (className && typeof className === 'string') element.classList.add(className);else if (className) (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(className));
  return element;
}

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ })

/******/ });
});
//# sourceMappingURL=bundle.js.map