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
/******/ 	return __webpack_require__(__webpack_require__.s = "./plugin/slider.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugin/mvp/model.ts":
/*!*****************************!*\
  !*** ./plugin/mvp/model.ts ***!
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

/**
 * @class Model
 *
 * Управляет данными слайдера.
 * 
 * @param options
 */
var Model =
/*#__PURE__*/
function () {
  function Model(options) {
    _classCallCheck(this, Model);

    this.defaultValues = options;
    this.options = _objectSpread({}, this.defaultValues);
    this.observers = [];
  }

  _createClass(Model, [{
    key: "subscribe",
    value: function subscribe(observer) {
      var _this = this;

      this.observers.push(observer);
      return {
        unsubscribe: function unsubscribe() {
          _this.observers = _this.observers.filter(function (ob) {
            return ob != observer;
          });
        }
      };
    }
  }, {
    key: "setData",
    value: function setData(content) {
      var _this2 = this;

      console.log('update model', content);

      var prevOptions = _objectSpread({}, this.options);

      this.options = Object.assign({}, this.options, content);

      if (this.observers.length > 0) {
        this.observers.forEach(function (observer) {
          return observer(_this2.options, prevOptions);
        });
      }
    }
  }, {
    key: "getDataModel",
    value: function getDataModel() {
      var _this3 = _objectSpread({}, this),
          defaultValues = _this3.defaultValues,
          options = _this3.options;

      return {
        defaultValues: defaultValues,
        options: options
      };
    }
  }, {
    key: "getDefaultValues",
    value: function getDefaultValues() {
      return _objectSpread({}, this.defaultValues);
    }
  }, {
    key: "updateData",
    value: function updateData(option, value, source) {
      if (option === undefined || value === undefined) {
        throw new Error('bad argument');
      } else if (option === 'interval__a' && typeof value === 'string') {
        this.setData({
          'defaultInterval': [value, this.options.defaultInterval[1]]
        });
      } else if (option === 'interval__b' && typeof value === 'string') {
        this.setData({
          'defaultInterval': [this.options.defaultInterval[0], value]
        });
      } else {
        this.setData(_defineProperty({}, option, value));
      }

      console.log("update model through ".concat(source), this.options); // if (source === 'view') {
      //     this.setData({});
      // }       
    }
  }]);

  return Model;
}();

/***/ }),

/***/ "./plugin/mvp/presentor.ts":
/*!*********************************!*\
  !*** ./plugin/mvp/presentor.ts ***!
  \*********************************/
/*! exports provided: Presentor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Presentor", function() { return Presentor; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./plugin/mvp/model.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./plugin/mvp/view.ts");
/* harmony import */ var _settingsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settingsView */ "./plugin/mvp/settingsView.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
* @class Presentor
*
* Реализация взаимодействия между Моделью и Видом слайдера
*
* @param model
* @param view
*/

var Presentor =
/*#__PURE__*/
function () {
  function Presentor(object, options) {
    var _this = this;

    _classCallCheck(this, Presentor);

    _defineProperty(this, "unsub", []);

    _defineProperty(this, "handleChangeView", function (option, value) {
      _this.model.updateData(option, value, 'view');
    });

    _defineProperty(this, "handleUpdateView", function (data, oldData) {
      _this.view.updateView(data, oldData);
    });

    _defineProperty(this, "handleUpdateSettingsView", function (data, prevData) {
      if (_this.settings) _this.settings.updateSettingsView(data, prevData);

      if (!data.showSettings) {
        var _this$unsub$pop;

        _this.settings = undefined;
        (_this$unsub$pop = _this.unsub.pop()) === null || _this$unsub$pop === void 0 ? void 0 : _this$unsub$pop.unsubscribe();
      }
    });

    _defineProperty(this, "handleChangeSettingsView", function (event) {
      if (event.target) {
        var target = event.target;
        var option;
        var value;

        switch (target.className) {
          case 'step':
            option = 'step';
            value = target.value;
            break;

          case 'mode__single':
          case 'mode__multiple':
            option = 'mode';
            value = target.value;
            break;

          case 'view__gorizontal':
          case 'view__vertical':
            option = 'orientation';
            value = target.value;
            break;

          case 'info':
            option = 'showValue';

            if (target instanceof HTMLInputElement) {
              value = target.checked;
            }

            break;

          case 'values':
            option = 'defaultValue';
            value = target.value;
            break;

          case 'interval__a':
            option = 'interval__a';
            value = target.value;
            break;

          case 'interval__b':
            option = 'interval__b';
            value = target.value;
            break;

          case 'maximum':
            option = 'maximumValue';
            value = target.value;
            break;

          case 'minimum':
            option = 'minimumValue';
            value = target.value;
            break;
        }

        _this.model.updateData(option, value, 'settings'); //option: keyof ViewOptions, value: string | boolean | Mode | Orientation

      }
    });

    this.model = new _model__WEBPACK_IMPORTED_MODULE_0__["Model"](options);
    this.initView(object);
    this.initSettings(object, options);
    this.subOnCustomEvents(options);
  }

  _createClass(Presentor, [{
    key: "initSettings",
    value: function initSettings(object, options) {
      if (options.showSettings) {
        this.settings = new _settingsView__WEBPACK_IMPORTED_MODULE_2__["SettingsView"](object, this.model.getDefaultValues());
        this.settings.view.addEventListener('change', this.handleChangeSettingsView);
        this.unsub.push(this.model.subscribe(this.handleUpdateSettingsView));
      }
    }
  }, {
    key: "initView",
    value: function initView(object) {
      this.view = new _view__WEBPACK_IMPORTED_MODULE_1__["View"](object, this.model.getDataModel().options);
      this.view.initHandleChangeModel(this.handleChangeView);
      this.unsub.push(this.model.subscribe(this.handleUpdateView));
    }
  }, {
    key: "subOnCustomEvents",
    value: function subOnCustomEvents(options) {
      if (typeof options.onValueChanged === 'function') {
        var _this$view;

        (_this$view = this.view) === null || _this$view === void 0 ? void 0 : _this$view.view.on('valueChanged', options.onValueChanged);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this$view2;

      this.view.view.removeClass().parent().html('');
      this.unsub.forEach(function (o) {
        return o.unsubscribe();
      });
      (_this$view2 = this.view) === null || _this$view2 === void 0 ? void 0 : _this$view2.view.off('valueChanged');
    }
  }, {
    key: "getModel",
    value: function getModel() {
      return this.model;
    }
  }]);

  return Presentor;
}();

/***/ }),

/***/ "./plugin/mvp/settingsView.ts":
/*!************************************!*\
  !*** ./plugin/mvp/settingsView.ts ***!
  \************************************/
/*! exports provided: SettingsView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsView", function() { return SettingsView; });
/* harmony import */ var _utils_view_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/view.functions */ "./plugin/utils/view.functions.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * @class ViewSettings
 *
 * Визуальное представление настроек.
 * @param object
 * @param options
 */
var SettingsView =
/*#__PURE__*/
function () {
  function SettingsView(object, dataModel) {
    _classCallCheck(this, SettingsView);

    this.view = Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["createSettings"])();
    this.render(object, this.view);
    this.init(dataModel, this.view);
  }

  _createClass(SettingsView, [{
    key: "render",
    value: function render(object, view) {
      object.before(view);
    }
  }, {
    key: "init",
    value: function init(data, view) {
      var _findElements = Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["findElements"])(view),
          showValueInput = _findElements.showValueInput,
          orientationInputs = _findElements.orientationInputs,
          modeInputs = _findElements.modeInputs,
          stepInput = _findElements.stepInput,
          minInput = _findElements.minInput,
          maxInput = _findElements.maxInput,
          divWithValue = _findElements.divWithValue;

      var values = Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["setElementsForValues"])(divWithValue, data.mode);
      var siblings = view.nextSibling;
      showValueInput.checked = data.showValue;
      Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["setNodeValue"])(Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["diversification"])(orientationInputs, siblings.id), data.orientation);
      Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["setNodeValue"])(Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["diversification"])(modeInputs, siblings.id), data.mode);
      stepInput.value = data.step;
      minInput.value = data.minimumValue;
      maxInput.value = data.maximumValue;
      Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["initValues"])(data.mode, values, data.defaultValue, data.defaultInterval);
    }
  }, {
    key: "updateSettingsView",
    value: function updateSettingsView(newDataModel, prevData) {
      console.log('settings update', newDataModel);
      Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["setNewData"])(newDataModel, prevData, this.view);
    }
  }]);

  return SettingsView;
}();

/***/ }),

/***/ "./plugin/mvp/view.ts":
/*!****************************!*\
  !*** ./plugin/mvp/view.ts ***!
  \****************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony import */ var _utils_view_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/view.functions */ "./plugin/utils/view.functions.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * @class View
 *
 * Визуальное представление слайдера.
 * @param object
 * @param options
 */
var View =
/*#__PURE__*/
function () {
  // 'A' or 'B'
  function View(view, options) {
    var _this = this;

    _classCallCheck(this, View);

    _defineProperty(this, "handlers", [function () {}, function () {}]);

    _defineProperty(this, "changeModalHandler", function () {});

    _defineProperty(this, "onMouseMove", function (step, uniqueSpaceA, uniqueSpaceB, event) {
      var orient = _this.options.orientation === 'Gorizontal' ? 'left' : 'top';
      var client = _this.options.orientation === 'Gorizontal' ? 'clientX' : 'clientY';
      var offset = _this.options.orientation === 'Gorizontal' ? 'offsetWidth' : 'offsetHeight';
      var prop = _this.options.orientation === 'Gorizontal' ? 'width' : 'height';

      var position = event[client] - _this.shift - _this.view.offset()[orient];

      _this.checkedPosition(position, step, _this.options.mode, uniqueSpaceA, uniqueSpaceB);

      if (_this.options.mode === 'Single') {
        _this.view.find('.thumb')[0].style[orient] = _this.newOffset + 'px';
        _this.options.defaultValue = _this.changeValue(_this.space, _this.newOffset);
      } else {
        if (uniqueSpaceB !== undefined) {
          _this.view.find('.thumb__b')[0].style[orient] = _this.newOffset + 'px';
          _this.view.find('.interval')[0].style[prop] = _this.newOffset - Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["valueToPixel"])(+_this.options.defaultInterval[0], _this.space, _this.delta, _this.options) + 'px';
          _this.lastSetOffset = 'B';
          _this.options.defaultInterval[1] = _this.changeValue(_this.space, _this.newOffset);
        } else {
          _this.view.find('.thumb__a')[0].style[orient] = _this.newOffset + 'px';
          _this.view.find('.interval')[0].style[orient] = _this.newOffset + _this.view.find('.thumb__a')[0][offset] / 2 + 'px';
          _this.view.find('.interval')[0].style[prop] = Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["valueToPixel"])(+_this.options.defaultInterval[1], _this.space, _this.delta, _this.options) - _this.newOffset + 'px';
          _this.lastSetOffset = 'A';
          _this.options.defaultInterval[0] = _this.changeValue(_this.space, _this.newOffset);
        }
      }

      if (_this.options.showValue) {
        Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["changeLabelPosition"])(_this.view, _this.options, [_this.newOffset], _this.lastSetOffset);
      }
    });

    _defineProperty(this, "onMouseUp", function () {
      document.removeEventListener('mouseup', _this.onMouseUp);

      if (_this.options.mode === 'Single') {
        document.removeEventListener('mousemove', _this.handler); //this.options.defaultValue = this.changeValue(this.space, this.newOffset);

        _this.changeModalHandler('defaultValue', _this.options.defaultValue);
      } else {
        if (_this.lastSetOffset === 'A') {
          document.removeEventListener('mousemove', _this.handlers[0]); //this.options.defaultInterval[0] = this.changeValue(this.space, this.newOffset);

          _this.changeModalHandler('interval__a', _this.options.defaultInterval[0]);
        } else {
          document.removeEventListener('mousemove', _this.handlers[1]); //this.options.defaultInterval[1] = this.changeValue(this.space, this.newOffset);

          _this.changeModalHandler('interval__b', _this.options.defaultInterval[1]);
        }
      } //console.log(this.view.offset(), this.view.find('.thumb').offset());
      // this.value.all = this.changeHandler(this.space.all, this.newPos, 'mouseup');
      // this.object.find('.thumb').val(this.value.all);    

    });

    this.view = view;
    this.options = _objectSpread({}, options, {
      defaultInterval: _toConsumableArray(options.defaultInterval)
    });
    this.shift = 0;
    this.newOffset = 0;
    this.delta = Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["calcDelta"])(options);
    Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["createSlider"])(view, options, this.delta);
    this.space = Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["calcSpace"])(view, options);
  }

  _createClass(View, [{
    key: "setShift",
    value: function setShift(event, thumb) {
      var prop = this.options.orientation === 'Gorizontal' ? 'left' : 'top';
      var client = this.options.orientation === 'Gorizontal' ? 'clientX' : 'clientY';
      this.shift = event[client] - thumb.offset()[prop];
    }
  }, {
    key: "initHandleChangeModel",
    value: function initHandleChangeModel(handler) {
      this.changeModalHandler = handler;

      if (this.options.mode === 'Single') {
        var thumb = this.view.find('.thumb');
        this.setOn(thumb);
        thumb.on('dragstart', function () {
          return false;
        }); //this.view.on('click', this.onClick.bind(this, +this.space.all as number, thumb));
      } else {
        var thumbA = this.view.find('.thumb__a');
        this.setOn(thumbA);
        thumbA.on('dragstart', function () {
          return false;
        });
        var thumbB = this.view.find('.thumb__b');
        this.setOn(thumbB);
        thumbB.on('dragstart', function () {
          return false;
        });
      }
    }
  }, {
    key: "setOn",
    value: function setOn(thumb) {
      var _this2 = this;

      var handler;
      thumb.on('mousedown', function (event) {
        _this2.setShift(event, thumb);

        var step = Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["stepToPixel"])(_this2.space, _this2.delta, _this2.options);

        if (_this2.options.mode === 'Multiple') {
          var valueA = Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["valueToPixel"])(+_this2.options.defaultInterval[0], _this2.space, _this2.delta, _this2.options);
          var valueB = Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["valueToPixel"])(+_this2.options.defaultInterval[1], _this2.space, _this2.delta, _this2.options);
          var spaceA = valueB - step;
          var spaceB = _this2.space - valueA - step;

          if (thumb.hasClass('thumb__a')) {
            _this2.handlers[0] = _this2.onMouseMove.bind(_this2, step, spaceA, undefined);
            handler = _this2.handlers[0];
          } else {
            _this2.handlers[1] = _this2.onMouseMove.bind(_this2, step, undefined, spaceB);
            handler = _this2.handlers[1];
          }
        } else {
          _this2.handler = _this2.onMouseMove.bind(_this2, step, undefined, undefined);
          handler = _this2.handler;
        } // разница между точкой клика и крайней левой точкой позиции кнопки   


        document.addEventListener('mousemove', handler);
        document.addEventListener('mouseup', _this2.onMouseUp);
      });
    }
  }, {
    key: "checkedPosition",
    value: function checkedPosition(position, step, mode, uniqueSpaceA, uniqueSpaceB) {
      var space = mode === 'Single' ? this.space : uniqueSpaceB !== undefined ? this.space : uniqueSpaceA;
      var cond = mode === 'Single' ? 0 : uniqueSpaceB !== undefined ? this.space - uniqueSpaceB : 0;

      if (position < cond) {
        this.newOffset = cond;
      } else if (position > space) {
        this.newOffset = space;
      } else {
        this.newOffset = Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["stepBalancing"])(position, step);
      }
    }
  }, {
    key: "changeValue",
    value: function changeValue(width, left) {
      var value = Math.round(left * ((+this.options.maximumValue - +this.options.minimumValue) / width)) + +this.options.minimumValue;
      return value.toString();
    }
  }, {
    key: "updateView",
    // Methods changing of settings
    value: function updateView(data, oldData) {
      console.log('view update', data);
      this.newOffset = Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["changeView"])(this.view, data, oldData);
      this.options = Object.assign({}, this.options, data);
      this.delta = Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["calcDelta"])(this.options);
      this.space = Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__["calcSpace"])(this.view, this.options);

      if (this.newOffset === -1) {
        this.initHandleChangeModel(this.changeModalHandler);
      }
    }
  }]);

  return View;
}();

/***/ }),

/***/ "./plugin/slider.ts":
/*!**************************!*\
  !*** ./plugin/slider.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var _plugin_mvp_presentor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugin/mvp/presentor */ "./plugin/mvp/presentor.ts");

;

(function ($) {
  var pluginName = 'customslider';
  var defaultOptions = {
    minimumValue: '0',
    maximumValue: '100',
    defaultValue: '50',
    defaultInterval: ['25', '75'],
    showValue: true,
    showSettings: true,
    step: '1',
    orientation: 'Vertical',
    mode: 'Multiple',
    onValueChanged: undefined,
    measurement: '₽'
  };
  var methods = {
    init: function init(object, options) {
      object.data(pluginName, new _plugin_mvp_presentor__WEBPACK_IMPORTED_MODULE_0__["Presentor"](object, options));
    },
    update: function update(object, content) {
      object.data(pluginName).getModel().setData(content);
    },
    destroy: function destroy(object) {
      object.data(pluginName).destroy();
      object.removeData(pluginName);
    },
    value: function value(object) {
      var data = object.data(pluginName).getModel().options;
      var value = data.mode === 'Single' ? data.defaultValue + data.measurement : data.defaultInterval[0] + data.measurement + ' - ' + data.defaultInterval[1] + data.measurement;
      return value;
    }
  };

  $.fn.sliderPlugin = function (options) {
    var result;

    var _this = this.data(pluginName);

    if (typeof options === 'string' && options === 'update') {
      methods[options].apply(this, [this, arguments[1]]);
    } else if (typeof options === 'string' && options === 'destroy') {
      methods[options](this);
    } else if (typeof options === 'string' && options === 'value') {
      result = methods[options](this);
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

/***/ "./plugin/utils/view.functions.ts":
/*!****************************************!*\
  !*** ./plugin/utils/view.functions.ts ***!
  \****************************************/
/*! exports provided: propsViewOptions, createSlider, calcSpace, calcDelta, stepToPixel, stepBalancing, valueToPixel, changeLabelPosition, changeView, createSettings, findElements, setElementsForValues, initValues, setNewData, setNodeValue, diversification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propsViewOptions", function() { return propsViewOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSlider", function() { return createSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcSpace", function() { return calcSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcDelta", function() { return calcDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepToPixel", function() { return stepToPixel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepBalancing", function() { return stepBalancing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueToPixel", function() { return valueToPixel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLabelPosition", function() { return changeLabelPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeView", function() { return changeView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSettings", function() { return createSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findElements", function() { return findElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setElementsForValues", function() { return setElementsForValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initValues", function() { return initValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNewData", function() { return setNewData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNodeValue", function() { return setNodeValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diversification", function() { return diversification; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var propsViewOptions = new Array('orientation', 'mode', 'step', 'minimumValue', 'maximumValue', 'defaultValue', 'defaultInterval', 'showValue', 'showSettings'); // функции для создания и обновления вида слайдера

function createSlider(view, options, delta) {
  view.addClass('slider');
  initOrientation(view, options.orientation);
  initMode(view, options);
  initThumb(view, options, delta);

  if (options.showValue) {
    initLabel(view, options);
  }
}
;

function initOrientation(view, orientation) {
  orientation === 'Gorizontal' ? view.addClass('slider__gorizont') : view.addClass('slider__vertical');
}

function initMode(view, options) {
  if (options.mode === 'Single') {
    var thumb = createElement('button', 'thumb');
    thumb.value = options.defaultValue;
    view.append(thumb);
  } else {
    var interval;

    if (options.orientation === 'Gorizontal') {
      interval = createElement('div', ['interval', 'interval__gorizontal']);
    } else {
      interval = createElement('div', ['interval', 'interval__vertical']);
    }

    var thumbA = createElement('button', 'thumb__a');
    thumbA.value = options.defaultInterval[0];
    var thumbB = createElement('button', 'thumb__b');
    thumbB.value = options.defaultInterval[1];
    view.append(interval);
    view.append(thumbA);
    view.append(thumbB);
  }
}

function initThumb(view, options, delta) {
  var orientation = options.orientation;
  var mode = options.mode;
  var offset = orientation === 'Gorizontal' ? 'offsetWidth' : 'offsetHeight';
  var style = orientation === 'Gorizontal' ? 'left' : 'top';
  var interval = orientation === 'Gorizontal' ? 'width' : 'height';
  var selector = mode === 'Single' ? '.thumb' : '.thumb__a';
  var space = calcSpace(view, options);

  switch (mode) {
    case 'Single':
      view.find('.thumb')[0].style[style] = valueToPixel(+options.defaultValue, space, delta, options) + 'px';
      break;

    case 'Multiple':
      var valueA = valueToPixel(+options.defaultInterval[0], space, delta, options);
      var valueB = valueToPixel(+options.defaultInterval[1], space, delta, options);
      view.find('.thumb__a')[0].style[style] = valueA + 'px';
      view.find('.thumb__b')[0].style[style] = valueB + 'px';
      view.find('.interval')[0].style[interval] = valueB - valueA + 'px';
      view.find('.interval')[0].style[style] = valueA + view.find(selector)[0][offset] / 2 + 'px';
      break;
  } //this.newPos = this.valueToPixel(+this.value.all);

}

function initLabel(view, options) {
  var onLabels = options.showValue;
  var labels = [];

  if (options.mode === 'Single') {
    labels = options.orientation === 'Gorizontal' ? ['label__x'] : ['label__y'];
    multipleCreate(labels[0], options.defaultValue, view);
  } else {
    labels = options.orientation === 'Gorizontal' ? ['label__ax', 'label__bx'] : ['label__ay', 'label__by'];
    multipleCreate(labels[0], options.defaultInterval[0], view);
    multipleCreate(labels[1], options.defaultInterval[1], view);
  }

  if (onLabels) {
    initStartPositionLabel(labels, options, view);
  }
}

function initStartPositionLabel(labels, options, view) {
  var style = options.orientation === 'Gorizontal' ? 'left' : 'top';
  var space = calcSpace(view, options);
  var delta = calcDelta(options);

  switch (options.mode) {
    case 'Single':
      view.find('.' + labels[0])[0].style[style] = valueToPixel(+options.defaultValue, space, delta, options) + 'px';
      break;

    case 'Multiple':
      view.find('.' + labels[0])[0].style[style] = valueToPixel(+options.defaultInterval[0], space, delta, options) + 'px';
      view.find('.' + labels[1])[0].style[style] = valueToPixel(+options.defaultInterval[1], space, delta, options) + 'px';
      break;
  }
}

function calcSpace(view, options) {
  var offset = options.orientation === 'Gorizontal' ? 'offsetWidth' : 'offsetHeight';
  var selector = options.mode === 'Single' ? '.thumb' : '.thumb__a';
  return view[0][offset] - view.find(selector)[0][offset] - 2;
}
function calcDelta(options) {
  return +options.maximumValue - +options.minimumValue;
}
function stepToPixel(space, delta, options) {
  return +options.step * (space / delta);
}
function stepBalancing(change, step) {
  var balance = change % step;

  if (step / 2 <= balance) {
    return change + (step - balance);
  } else {
    return change - balance;
  }
}
function valueToPixel(value, space, delta, options) {
  return Math.round(value * (space / delta) - +options.minimumValue * (space / delta));
}

function multipleCreate(label, value, view) {
  if (view.find('.' + label).length !== 0) {
    view.find('.' + label).remove();
    return;
  }

  var pValue = createElement('p', ['label', label]);
  pValue.textContent = value;
  view.append(pValue);
}

function changeLabelPosition(view, options, offset, lastOffset) {
  var orientation = options.orientation === 'Gorizontal' ? 'left' : 'top';
  var axis = options.orientation === 'Gorizontal' ? 'x' : 'y';

  if (options.mode === 'Single') {
    view.find('.label__' + axis)[0].style[orientation] = offset[0] + 'px';
    view.find('.label__' + axis)[0].textContent = options.defaultValue;
  } else {
    if (lastOffset && lastOffset === 'A') {
      view.find('.label__a' + axis)[0].style[orientation] = offset[0] + 'px';
      view.find('.label__a' + axis)[0].textContent = options.defaultInterval[0];
    } else if (lastOffset && lastOffset === 'B') {
      view.find('.label__b' + axis)[0].style[orientation] = offset[0] + 'px';
      view.find('.label__b' + axis)[0].textContent = options.defaultInterval[1];
    } else {
      view.find('.label__a' + axis)[0].style[orientation] = offset[0] + 'px';
      view.find('.label__a' + axis)[0].textContent = options.defaultInterval[0];
      view.find('.label__b' + axis)[0].style[orientation] = offset[1] + 'px';
      view.find('.label__b' + axis)[0].textContent = options.defaultInterval[1];
    }
  }
}

function checkKey(key, data, oldData) {
  if (key === 'defaultValue' || key === 'minimumValue' || key === 'maximumValue' || key === 'orientation' || key === 'defaultInterval' || key === 'step' || key === 'mode' || key === 'showValue' || key === 'showSettings') {
    return data[key] !== oldData[key];
  } else {
    return false;
  }
}

function calcOffset(view, options) {
  var space = calcSpace(view, options);
  var delta = calcDelta(options);

  if (options.mode === 'Single') {
    var newOffset = valueToPixel(+options.defaultValue, space, delta, options);
    return [newOffset];
  } else {
    var offsetA = valueToPixel(+options.defaultInterval[0], space, delta, options);
    var offsetB = valueToPixel(+options.defaultInterval[1], space, delta, options);
    return [offsetA, offsetB];
  }
}

function clearAll(view) {
  view.empty();
  view.off();
}

function toggleOrientation(view) {
  view.toggleClass('slider__gorizont slider__vertical');
}

function changeView(view, data, oldData) {
  //Object.keys(data).forEach((key)
  var code = 0;
  propsViewOptions.forEach(function (key) {
    if (checkKey(key, data, oldData)) {
      switch (key) {
        case 'defaultValue':
        case 'defaultInterval':
          updateFunctions.changeDefaultValue(view, data);

          if (typeof data.onValueChanged === 'function') {
            var measurement = data.measurement ? data.measurement : '';
            var values = '';

            if (data.mode === 'Single') {
              values = data.defaultValue + measurement;
            } else {
              values = data.defaultInterval[0] + measurement + ' - ' + data.defaultInterval[1] + measurement;
            }

            $(view).trigger('valueChanged', values);
          }

          return;

        case 'minimumValue':
        case 'maximumValue':
          updateFunctions.changeLimitValues(view, data);
          return;

        case 'orientation':
          code = updateFunctions.changeOrientation(view, data);
          return;

        case 'mode':
          code = updateFunctions.changeMode(view, data);
          return;

        case 'step':
          return;

        case 'showValue':
          updateFunctions.changeShowValue(view, data);
          return;
      }
    }
  });
  return code;
}
var updateFunctions = {
  changeDefaultValue: function changeDefaultValue(view, options) {
    var orientation = options.orientation === 'Gorizontal' ? 'left' : 'top';
    var offset = options.orientation === 'Gorizontal' ? 'offsetWidth' : 'offsetHeight';
    var size = options.orientation === 'Gorizontal' ? 'width' : 'height';
    var space = calcSpace(view, options);
    var delta = calcDelta(options);
    var newOffset = valueToPixel(+options.defaultValue, space, delta, options);

    if (options.mode === 'Single') {
      view.find('.thumb')[0].style[orientation] = newOffset + 'px';

      if (options.showValue) {
        changeLabelPosition(view, options, [newOffset]);
      }
    } else {
      var offsetA = valueToPixel(+options.defaultInterval[0], space, delta, options);
      var offsetB = valueToPixel(+options.defaultInterval[1], space, delta, options);
      view.find('.interval')[0].style[orientation] = offsetA + view.find('.thumb__a')[0][offset] / 2 + 'px';
      view.find('.interval')[0].style[size] = offsetB - offsetA + 'px';
      view.find('.thumb__a')[0].style[orientation] = offsetA + 'px';
      view.find('.thumb__b')[0].style[orientation] = offsetB + 'px';

      if (options.showValue) {
        changeLabelPosition(view, options, [offsetA, offsetB]);
      }

      return offsetB;
    }

    return newOffset;
  },
  changeLimitValues: function changeLimitValues(view, options) {
    var delta = calcDelta(options);
    initThumb(view, options, delta);

    if (options.showValue) {
      changeLabelPosition(view, options, calcOffset(view, options));
    }

    return 0;
  },
  changeOrientation: function changeOrientation(view, options) {
    clearAll(view);
    toggleOrientation(view);
    initMode(view, options);
    var delta = calcDelta(options);
    initThumb(view, options, delta);
    if (options.showValue) initLabel(view, options);
    return -1;
  },
  changeMode: function changeMode(view, options) {
    clearAll(view);
    initMode(view, options);
    var delta = calcDelta(options);
    initThumb(view, options, delta);
    if (options.showValue) initLabel(view, options);
    return -1;
  },
  changeShowValue: function changeShowValue(view, options) {
    initLabel(view, options);
    return 0;
  }
}; // функции для создания и обновления вида настроек

function createSettings() {
  var htmlSettings = "            \n        <div class=\"settings__info\">\n            <label>\n                <input class=\"info\" type=\"checkbox\">\n                <div class=\"instead_label\">off/on labels</div>\n            </label>\n        </div>\n        <div class=\"settings__view\">\n            <fieldset>\n                <legend>\u0412\u0438\u0434 \u0441\u043B\u0430\u0439\u0434\u0435\u0440\u0430</legend>\n                <label>\n                    <input class=\"view__gorizontal\" type=\"radio\" name=\"view\" value=\"Gorizontal\" />\n                    <div class=\"gorizontal_label\">\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E</div>\n                </label>\n                <label>\n                    <input class=\"view__vertical\" type=\"radio\" name=\"view\" value=\"Vertical\" />\n                    <div class=\"vertical_label\">\u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E</div>\n                </label>                \n            </fieldset>\n        </div>\n        <div class=\"settings__mode\">\n            <fieldset>\n                <legend>\u0420\u0435\u0436\u0438\u043C</legend>\n                <label>\n                    <input class=\"mode__single\" type=\"radio\" name=\"mode\" value=\"Single\" />\n                    <div class=\"single_label\">Single</div>\n                </label>\n                <label>\n                    <input class=\"mode__multiple\" type=\"radio\" name=\"mode\" value=\"Multiple\" />\n                    <div class=\"multiple_label\">Multiple</div>\n                </label>                \n            </fieldset>            \n        </div>\n        <div class=\"settings__item\">\n            <fieldset>\n                <legend>\u0428\u0430\u0433</legend>\n                <input class=\"step\" name=\"step\" type=\"text\">\n            </fieldset>\n        </div>        \n        <div class=\"settings__values\">\n            <fieldset>\n                <legend>\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u044F</legend>\n            </fieldset>\n        </div>\n        <div class=\"settings__item\">\n            <fieldset>\n            <legend>\u0413\u0440\u0430\u043D\u0438\u0446\u044B</legend>\n            <input class=\"minimum\" name=\"minimum\" type=\"text\" placeholder=\"\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\">\n            <input class=\"maximum\" name=\"maximum\" type=\"text\" placeholder=\"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435\"></fieldset>\n        </div>";
  var divSettings = createElement('div', 'settings');
  divSettings.insertAdjacentHTML('afterbegin', htmlSettings);
  return divSettings;
}
function findElements(view) {
  var showValueInput = view.querySelector('.settings__info input');
  var orientationInputs = view.querySelectorAll('.settings__view input');
  var modeInputs = view.querySelectorAll('.settings__mode input');
  var stepInput = view.querySelector('.settings__item .step');
  var minInput = view.querySelector('.settings__item .minimum');
  var maxInput = view.querySelector('.settings__item .maximum');
  var divWithValue = view.querySelector('.settings__values fieldset');
  return {
    showValueInput: showValueInput,
    orientationInputs: orientationInputs,
    modeInputs: modeInputs,
    stepInput: stepInput,
    minInput: minInput,
    maxInput: maxInput,
    divWithValue: divWithValue
  };
}
function setElementsForValues(div, mode) {
  div.innerHTML = "<legend>\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u044F</legend>";
  var values = createElementsForValues(mode);

  if (mode === 'Single') {
    div.append(values[0]);
  } else {
    div.append(values[0]);
    div.append(values[1]);
  }

  return values;
}
function initValues(mode, values, defaultValue, defaultInterval) {
  if (mode === 'Single') {
    values[0].value = defaultValue;
  } else {
    values[0].value = defaultInterval[0];
    values[1].value = defaultInterval[1];
  }
}
function setNewData(data, prevData, view) {
  var _findElements = findElements(view),
      showValueInput = _findElements.showValueInput,
      orientationInputs = _findElements.orientationInputs,
      modeInputs = _findElements.modeInputs,
      stepInput = _findElements.stepInput,
      minInput = _findElements.minInput,
      maxInput = _findElements.maxInput,
      divWithValue = _findElements.divWithValue;

  propsViewOptions.forEach(function (key) {
    var _view$parentNode;

    if (checkKey(key, data, prevData)) {
      switch (key) {
        case 'showValue':
          showValueInput.checked = data.showValue;
          return;

        case 'orientation':
          setNodeValue(orientationInputs, data.orientation);
          return;

        case 'mode':
          setNodeValue(modeInputs, data.mode);
          var values = setElementsForValues(divWithValue, data.mode);
          initValues(data.mode, values, data.defaultValue, data.defaultInterval);
          return;

        case 'step':
          stepInput.value = data.step;
          return;

        case 'minimumValue':
          minInput.value = data.minimumValue;
          return;

        case 'maximumValue':
          maxInput.value = data.maximumValue;
          return;

        case 'defaultValue':
        case 'defaultInterval':
          var inputs = divWithValue.querySelectorAll('input');
          initValues(data.mode, inputs, data.defaultValue, data.defaultInterval);
          return;

        case 'showSettings':
          (_view$parentNode = view.parentNode) === null || _view$parentNode === void 0 ? void 0 : _view$parentNode.removeChild(view);
          return;
      }
    }
  });
}
function setNodeValue(nodes, value) {
  nodes.forEach(function (input) {
    input.value === value ? input.checked = true : false;
  });
}
function diversification(nodes, id) {
  nodes.forEach(function (input) {
    return input.name = id + '-' + input.name;
  });
  return nodes;
}

function createElementsForValues(mode) {
  var array = [];

  if (mode === 'Single') {
    var inputWithValue = createElement('input');
    inputWithValue.classList.add('values');
    inputWithValue.type = 'text';
    array.push(inputWithValue);
  } else {
    var inputWithValueA = createElement('input');
    var inputWithValueB = createElement('input');
    inputWithValueA.classList.add('interval__a');
    inputWithValueB.classList.add('interval__b');
    inputWithValueA.type = 'text';
    inputWithValueB.type = 'text';
    array.push(inputWithValueA);
    array.push(inputWithValueB);
  }

  return array;
}

function createElement(tag, className) {
  var _element$classList;

  var element = document.createElement(tag);
  if (className && typeof className === 'string') element.classList.add(className);else if (className) (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(className));
  return element;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

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