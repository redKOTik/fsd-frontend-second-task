(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory(require('jquery'), require('moment'));
  else if (typeof define === 'function' && define.amd) define(['jquery', 'moment'], factory);
  else {
    var a = typeof exports === 'object' ? factory(require('jquery'), require('moment')) : factory(root.jquery, root.moment);
    for (var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
  }
}(window, function (__WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_moment__) {
  return /** *** */ (function (modules) { // webpackBootstrap
    /** *** */ 	// The module cache
    /** *** */ 	var installedModules = {};
    /** *** */
    /** *** */ 	// The require function
    /** *** */ 	function __webpack_require__(moduleId) {
      /** *** */
      /** *** */ 		// Check if module is in cache
      /** *** */ 		if (installedModules[moduleId]) {
        /** *** */ 			return installedModules[moduleId].exports;
        /** *** */ 		}
      /** *** */ 		// Create a new module (and put it into the cache)
      /** *** */ 		var module = installedModules[moduleId] = {
        /** *** */ 			i: moduleId,
        /** *** */ 			l: false,
        /** *** */ 			exports: {}
        /** *** */ 		};
      /** *** */
      /** *** */ 		// Execute the module function
      /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /** *** */
      /** *** */ 		// Flag the module as loaded
      /** *** */ 		module.l = true;
      /** *** */
      /** *** */ 		// Return the exports of the module
      /** *** */ 		return module.exports;
      /** *** */ 	}
    /** *** */
    /** *** */
    /** *** */ 	// expose the modules object (__webpack_modules__)
    /** *** */ 	__webpack_require__.m = modules;
    /** *** */
    /** *** */ 	// expose the module cache
    /** *** */ 	__webpack_require__.c = installedModules;
    /** *** */
    /** *** */ 	// define getter function for harmony exports
    /** *** */ 	__webpack_require__.d = function (exports, name, getter) {
      /** *** */ 		if (!__webpack_require__.o(exports, name)) {
        /** *** */ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /** *** */ 		}
      /** *** */ 	};
    /** *** */
    /** *** */ 	// define __esModule on exports
    /** *** */ 	__webpack_require__.r = function (exports) {
      /** *** */ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /** *** */ 		}
      /** *** */ 		Object.defineProperty(exports, '__esModule', { value: true });
      /** *** */ 	};
    /** *** */
    /** *** */ 	// create a fake namespace object
    /** *** */ 	// mode & 1: value is a module id, require it
    /** *** */ 	// mode & 2: merge all properties of value into the ns
    /** *** */ 	// mode & 4: return value when already ns object
    /** *** */ 	// mode & 8|1: behave like require
    /** *** */ 	__webpack_require__.t = function (value, mode) {
      /** *** */ 		if (mode & 1) value = __webpack_require__(value);
      /** *** */ 		if (mode & 8) return value;
      /** *** */ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
      /** *** */ 		var ns = Object.create(null);
      /** *** */ 		__webpack_require__.r(ns);
      /** *** */ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
      /** *** */ 		if (mode & 2 && typeof value !== 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
      /** *** */ 		return ns;
      /** *** */ 	};
    /** *** */
    /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
    /** *** */ 	__webpack_require__.n = function (module) {
      /** *** */ 		var getter = module && module.__esModule
      /** *** */ 			? function getDefault() { return module.default; }
      /** *** */ 			: function getModuleExports() { return module; };
      /** *** */ 		__webpack_require__.d(getter, 'a', getter);
      /** *** */ 		return getter;
      /** *** */ 	};
    /** *** */
    /** *** */ 	// Object.prototype.hasOwnProperty.call
    /** *** */ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /** *** */
    /** *** */ 	// __webpack_public_path__
    /** *** */ 	__webpack_require__.p = '';
    /** *** */
    /** *** */
    /** *** */ 	// Load entry module and return exports
    /** *** */ 	return __webpack_require__(__webpack_require__.s = './plugin/datepicker.ts');
    /** *** */ }({

    /***/ './plugin/datepicker.ts':
    /*! ******************************!*\
  !*** ./plugin/datepicker.ts ***!
  \***************************** */
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */(function (jQuery, moment) {
        /* harmony import */ var _plugin_mvp_presentor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugin/mvp/presentor */ './plugin/mvp/presentor.ts');
        // import * as moment from '../../node_modules/moment/moment';

        (function ($) {
          var pluginName = 'datepicker';
          var defaultOptions = {
            state: 'Collapsed',
            title: 'ДД.ММ.ГГГГ',
            mode: 'Single',
            now: moment().locale('ru'),
            select: 'Two',
            currentMonth: moment().locale('ru'),
            selected: [],
            onDateSelected: undefined
          };
          var methods = {
            init: function init(object, options) {
              // (window as any)[object.attr('id')!] = new Presentor(object, options);
              object.data(pluginName, new _plugin_mvp_presentor__WEBPACK_IMPORTED_MODULE_0__.Presentor(object, options));
            },
            update: function update(object, content) {
              // (window as any)[object.attr('id')!].getModel().setData(content, true);
              object.data(pluginName).getModel().setData(content, true);
            },
            destroy: function destroy(object) {
              // (window as any)[object.attr('id')!].destroy();
              // delete (window as any)[object.attr('id')!];
              object.data(pluginName).destroy();
              object.removeData(pluginName);
            },
            value: function value(object) {
              // const data: any[] = (window as any)[object.attr('id')!].getModel().options.selected;
              var data = object.data(pluginName).getModel().options.selected;
              var dates = [];

              if (data.length > 0 && data[0] instanceof moment) {
                dates.push(data[0].toDate());
              } else if (data.length > 0) {
                Object.keys(data[0]).forEach(function (key) {
                  dates.push(data[0][key].toDate());
                });
              }

              return dates;
            }
          };

          $.fn.datepicker = function (options) {
            var result;

            var _this = this.data(pluginName);

            if (typeof options === 'string' && options === 'update') {
              methods[options].apply(this, [this, arguments[1]]);
            } else if (typeof options === 'string' && options === 'destroy') {
              methods[options](this);
            } else if (typeof options === 'string' && options === 'value') {
              return methods[options](this);
            } else if (typeof options === 'boolean') {
              result = _this;
            } else {
              var opts = $.extend({}, defaultOptions, options);
              methods.init.apply(this, [this, opts]);
            }

            return result || this;
          };
        }(jQuery));
        /* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__(/*! jquery */ 'jquery'), __webpack_require__(/*! moment */ 'moment')));
      /***/ }),

    /***/ './plugin/mvp/model.ts':
    /*! *****************************!*\
  !*** ./plugin/mvp/model.ts ***!
  \**************************** */
    /*! exports provided: Model */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Model', function () { return Model; });
      function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

      function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

      function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

      function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

      function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value, enumerable: true, configurable: true, writable: true
          });
        } else { obj[key] = value; } return obj;
      }

      /**
 * @class Model
 *
 * Управляет данными.
 *
 * @param options
 */
      var Model = /* #__PURE__ */(function () {
        function Model(options) {
          _classCallCheck(this, Model);

          _defineProperty(this, 'activeSelect', '');

          this.defaultOptions = options;
          this.options = _objectSpread({}, this.defaultOptions);
          this.tempState = this.cloneData();
          this.applyIsActive = false;
          this.clearIsActive = false;
          this.observers = [];
        }

        _createClass(Model, [{
          key: 'subscribe',
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
          key: 'setData',
          value: function setData(content, save) {
            var _this2 = this;

            // console.log('update model', content);
            save ? this.tempState = content : false;
            this.clearIsActive = this.isActiveClear(content.selected);
            var prevOptions = this.cloneData();
            this.options = Object.assign({}, this.options, content);

            if (this.observers.length > 0) {
              this.observers.forEach(function (observer) {
                return observer(_this2.options, prevOptions, {
                  clear: _this2.clearIsActive,
                  apply: _this2.applyIsActive
                });
              });
            }
          }
        }, {
          key: 'getDataModel',
          value: function getDataModel() {
            var _this3 = _objectSpread({}, this);
            var defaultOptions = _this3.defaultOptions;
            var options = _this3.options;

            return {
              defaultOptions: defaultOptions,
              options: options
            };
          }
        }, {
          key: 'getDefaultOptions',
          value: function getDefaultOptions() {
            return _objectSpread({}, this.defaultOptions);
          }
        }, {
          key: 'isActiveClear',
          value: function isActiveClear(selected) {
            return selected.length > 0;
          }
        }, {
          key: 'cloneData',
          value: function cloneData() {
            if (this.options.mode === 'Single') {
              return _objectSpread(_objectSpread({}, this.options), {}, {
                currentMonth: this.options.currentMonth.clone(),
                selected: this.options.selected.map(function (moment) {
                  return moment.clone();
                })
              });
            }
            return _objectSpread(_objectSpread({}, this.options), {}, {
              currentMonth: this.options.currentMonth.clone(),
              selected: this.options.selected.map(function (moment) {
                if (moment.hasOwnProperty('start')) {
                  moment.start = moment.start.clone();
                }

                if (moment.hasOwnProperty('end')) {
                  moment.end = moment.end.clone();
                }

                return moment;
              })
            });
          }
        }, {
          key: 'updateData',
          value: function updateData(option, value, select) {
            if (option === 'state' && (value === 'Expanded' || value === 'Collapsed')) {
              if (this.options.mode === 'Range' && select) {
                this.activeSelect = select;
              } else {
                this.activeSelect = '';
              }

              this.applyIsActive = false;
              var content = this.tempState;
              content.state = value;
              this.setData(content);
            } else if (option === 'increment') {
              var _content = this.cloneData();

              _content.currentMonth.add(1, 'M');

              this.setData(_content);
            } else if (option === 'decrement') {
              var _content2 = this.cloneData();

              _content2.currentMonth.subtract(1, 'M');

              this.setData(_content2);
            } else if (option === 'selected') {
              this.applyIsActive = true;

              var _content3 = this.cloneData();

              var _select = _content3.currentMonth.clone().date(+value);

              if (this.options.mode === 'Single') {
                _content3.selected = [];

                _content3.selected.push(_select);

                this.setData(_content3);
              } else if (this.options.select === 'Two') {
                if (_content3.selected.length === 0) {
                  _content3.selected.push(_defineProperty({}, this.activeSelect, _select));

                  this.setData(_content3);
                } else {
                  if (this.activeSelect === 'start' && _content3.selected[0].hasOwnProperty('end')) {
                    var otherMoment = _content3.selected[0].end;

                    if (_select.isSameOrBefore(otherMoment)) {
                      _content3.selected[0] = _objectSpread(_objectSpread({}, _content3.selected[0]), {}, _defineProperty({}, this.activeSelect, _select));
                    } else {
                      _content3.selected[0] = _objectSpread(_objectSpread({}, _content3.selected[0]), {}, {
                        end: _select
                      });
                    }

                    this.setData(_content3);
                    return;
                  }

                  if (this.activeSelect === 'end' && _content3.selected[0].hasOwnProperty('start')) {
                    var _otherMoment = _content3.selected[0].start;

                    if (_select.isSameOrAfter(_otherMoment)) {
                      _content3.selected[0] = _objectSpread(_objectSpread({}, _content3.selected[0]), {}, _defineProperty({}, this.activeSelect, _select));
                    } else {
                      _content3.selected[0] = _objectSpread(_objectSpread({}, _content3.selected[0]), {}, {
                        start: _select
                      });
                    }

                    this.setData(_content3);
                    return;
                  }

                  _content3.selected[0] = _objectSpread(_objectSpread({}, _content3.selected[0]), {}, _defineProperty({}, this.activeSelect, _select));
                  this.setData(_content3);
                }
              } else if (_content3.selected.length === 0) {
                _content3.selected.push({
                  start: _select
                });

                this.setData(_content3);
              } else {
                if (_content3.selected[0].hasOwnProperty('start') && !_content3.selected[0].hasOwnProperty('end')) {
                  var _otherMoment2 = _content3.selected[0].start;

                  if (_select.isBefore(_otherMoment2)) {
                    _content3.selected[0] = _objectSpread(_objectSpread({}, _content3.selected[0]), {}, {
                      start: _select,
                      end: _otherMoment2
                    });
                  } else if (_select.isAfter(_otherMoment2)) {
                    _content3.selected[0] = _objectSpread(_objectSpread({}, _content3.selected[0]), {}, {
                      end: _select
                    });
                  } else if (_select.isSame(_otherMoment2)) {
                    _content3.selected = [];
                  }

                  this.setData(_content3);
                  return;
                }

                if (_content3.selected[0].hasOwnProperty('end') && !_content3.selected[0].hasOwnProperty('start')) {
                  var _otherMoment3 = _content3.selected[0].end;

                  if (_select.isBefore(_otherMoment3)) {
                    _content3.selected[0] = _objectSpread(_objectSpread({}, _content3.selected[0]), {}, {
                      start: _select
                    });
                  } else if (_select.isAfter(_otherMoment3)) {
                    _content3.selected[0] = _objectSpread(_objectSpread({}, _content3.selected[0]), {}, {
                      start: _otherMoment3,
                      end: _select
                    });
                  } else if (_select.isSame(_otherMoment3)) {
                    _content3.selected = [];
                  }

                  this.setData(_content3);
                  return;
                }

                if (_content3.selected[0].hasOwnProperty('start') && _content3.selected[0].hasOwnProperty('end')) {
                  var startMoment = _content3.selected[0].start;
                  var endMoment = _content3.selected[0].end;

                  if (_select.isBefore(startMoment)) {
                    _content3.selected[0] = _objectSpread(_objectSpread({}, _content3.selected[0]), {}, {
                      start: _select
                    });
                  } else if (_select.isAfter(endMoment)) {
                    _content3.selected[0] = _objectSpread(_objectSpread({}, _content3.selected[0]), {}, {
                      end: _select
                    });
                  } else if (_select.isSame(startMoment)) {
                    _content3.selected[0] = {
                      end: _content3.selected[0].end
                    };
                  } else if (_select.isSame(endMoment)) {
                    _content3.selected[0] = {
                      start: _content3.selected[0].start
                    };
                  }

                  this.setData(_content3);
                }
              }
            } else if (option === 'clear') {
              this.applyIsActive = true;

              var _content4 = this.cloneData();

              _content4.selected = [];
              this.setData(_content4);
            } else if (option === 'save') {
              this.applyIsActive = false;

              var _content5 = this.cloneData();

              this.setData(_content5, true);
            }
          }
        }]);

        return Model;
      }());
      /***/ }),

    /***/ './plugin/mvp/presentor.ts':
    /*! *********************************!*\
  !*** ./plugin/mvp/presentor.ts ***!
  \******************************** */
    /*! exports provided: Presentor */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */(function ($) {
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'Presentor', function () { return Presentor; });
        /* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ './plugin/mvp/model.ts');
        /* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ './plugin/mvp/view.ts');
        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

        function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

        function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value, enumerable: true, configurable: true, writable: true
            });
          } else { obj[key] = value; } return obj;
        }

        /**
* @class Presentor
*
* Реализация взаимодействия между Моделью и Видом
*
* @param model
* @param view
*/

        var Presentor = /* #__PURE__ */(function () {
          function Presentor(object, options) {
            var _this = this;

            _classCallCheck(this, Presentor);

            _defineProperty(this, 'unsub', []);

            _defineProperty(this, 'handleChangeModel', function (event) {
              var target = event.target;
              var currentTarget = event.currentTarget;
              var itIsThat = $(_this.view.mask).has(target).length !== 0 || $(_this.view.mask).is(target);

              if (event.type === 'blur') {
                _this.model.updateData('state', 'Collapsed');

                return;
              }

              if (target && _this.view.mask.classList.contains('active') && !itIsThat) {
                _this.model.updateData('state', 'Collapsed');

                return;
              }

              if (!itIsThat) return;
              var isHeader = target.closest('.datepicker__header');
              var isStartRangeHeader = target.closest('.select__start');
              var isEndRangeHeader = target.closest('.select__end');
              var isRangeHeader = currentTarget.classList.contains('datepicker-range');

              if (target && itIsThat && target instanceof HTMLButtonElement && target.classList.contains('apply__button')) {
                _this.model.updateData('save');

                return;
              }

              if (target && itIsThat && target instanceof HTMLButtonElement && target.classList.contains('clear__button')) {
                _this.model.updateData('clear');

                return;
              }

              if (target && itIsThat && isHeader && !isRangeHeader) {
                _this.model.updateData('state', currentTarget.classList.contains('active') ? 'Collapsed' : 'Expanded');

                return;
              }

              if (target && itIsThat && isHeader && (isStartRangeHeader || isEndRangeHeader)) {
                _this.model.updateData('state', currentTarget.classList.contains('active') ? 'Collapsed' : 'Expanded', isStartRangeHeader ? 'start' : 'end');

                return;
              }

              if (target && itIsThat && target instanceof HTMLButtonElement && target.classList.contains('right-btn')) {
                _this.model.updateData('increment');

                return;
              }

              if (target && itIsThat && target instanceof HTMLButtonElement && target.classList.contains('left-btn')) {
                _this.model.updateData('decrement');

                return;
              }

              if (target && itIsThat && target instanceof HTMLDivElement && target.classList.contains('d') && !target.classList.contains('d-gray')) {
                _this.model.updateData('selected', target.textContent);
              }
            });

            _defineProperty(this, 'handleUpdateView', function (data, prevData, state) {
              _this.view.updateView(data, prevData, state);
            });

            this.model = new _model__WEBPACK_IMPORTED_MODULE_0__.Model(options);
            this.initView(object);
            this.subOnCustomEvents(options);
          }

          _createClass(Presentor, [{
            key: 'initView',
            value: function initView(object) {
              this.view = new _view__WEBPACK_IMPORTED_MODULE_1__.View(object, this.model.getDataModel().options);
              this.view.initHandleChangeModel(this.handleChangeModel);
              this.unsub.push(this.model.subscribe(this.handleUpdateView));
            }
          }, {
            key: 'subOnCustomEvents',
            value: function subOnCustomEvents(options) {
              if (typeof options.onDateSelected === 'function') {
                var _this$view;

                (_this$view = this.view) === null || _this$view === void 0 ? void 0 : _this$view.view.on('dateSelected', options.onDateSelected);
              }
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              var _this$view2; var _this$view3; var
                _this$view4;

              // this.view!.view.removeClass().parent().html('');
              this.unsub.forEach(function (o) {
                return o.unsubscribe();
              });
              (_this$view2 = this.view) === null || _this$view2 === void 0 ? void 0 : _this$view2.view.off('dateSelected');
              (_this$view3 = this.view) === null || _this$view3 === void 0 ? void 0 : _this$view3.mask.remove();
              (_this$view4 = this.view) === null || _this$view4 === void 0 ? void 0 : _this$view4.view.removeClass('hidden');
              return 'plugin data remove';
            }
          }, {
            key: 'getModel',
            value: function getModel() {
              return this.model;
            } // option: keyof ViewOptions, value?: string

          }]);

          return Presentor;
        }());
        /* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__(/*! jquery */ 'jquery')));
      /***/ }),

    /***/ './plugin/mvp/view.ts':
    /*! ****************************!*\
  !*** ./plugin/mvp/view.ts ***!
  \*************************** */
    /*! exports provided: View */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */(function ($) {
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'View', function () { return View; });
        /* harmony import */ var _utils_view_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/view.functions */ './plugin/utils/view.functions.ts');
        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

        function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

        function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value, enumerable: true, configurable: true, writable: true
            });
          } else { obj[key] = value; } return obj;
        }

        /**
 * @class View
 *
 * Визуальное представление.
 * @param object
 * @param options
 */
        var View = /* #__PURE__ */(function () {
          function View(view, options) {
            _classCallCheck(this, View);

            _defineProperty(this, 'changeModalHandler', function () {});

            this.view = view;
            this.options = options;
            this.mask = Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__.createDatepicker)(view, options);
          }

          _createClass(View, [{
            key: 'initHandleChangeModel',
            value: function initHandleChangeModel(handler) {
              this.changeModalHandler = handler;
              this.mask.addEventListener('click', handler);
              this.mask.addEventListener('blur', handler);
              this.mask.querySelectorAll('button').forEach(function (button) {
                $(button).on('mousedown', false);
              });
            } // Methods changing of settings

          }, {
            key: 'updateView',
            value: function updateView(data, prevData, state) {
              var _this = this;

              Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__.setBtnState)(this.mask, state);
              Object.keys(data).forEach(function (key) {
                if (Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__.checkKey)(key, data, prevData)) {
                  switch (key) {
                    case 'state':
                      _this.mask.classList.toggle('active', data.state === 'Expanded');

                      return;

                    case 'currentMonth':
                      Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__.changeMonth)(data.currentMonth, _this.mask);
                      Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__.changeDates)(data.currentMonth, _this.mask);

                      if (data.selected.length > 0) {
                        Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__.selectDate)(data.selected, data.mode, data.currentMonth, _this.mask, data.title, data.select);
                      }

                      return;

                    case 'selected':
                      if (data.selected.length > 0) {
                        Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__.selectDate)(data.selected, data.mode, data.currentMonth, _this.mask, data.title, data.select);

                        if (typeof _this.options.onDateSelected === 'function') {
                          var dates = [];

                          if (data.mode === 'Range') {
                            Object.keys(data.selected[0]).forEach(function (key) {
                              dates.push(data.selected[0][key].toDate());
                            });
                          } else {
                            dates.push(data.selected[0].toDate());
                          }

                          _this.view.trigger('dateSelected', dates);
                        }
                      } else if (data.selected.length === 0) {
                        Object(_utils_view_functions__WEBPACK_IMPORTED_MODULE_0__.unselectDate)(prevData.selected, data.mode, data.currentMonth, _this.mask, data.title, data.select);
                      }
                  }
                }
              });
            }
          }]);

          return View;
        }());
        /* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__(/*! jquery */ 'jquery')));
      /***/ }),

    /***/ './plugin/utils/view.functions.ts':
    /*! ****************************************!*\
  !*** ./plugin/utils/view.functions.ts ***!
  \*************************************** */
    /*! exports provided: createDatepicker, setBtnState, checkKey, changeMonth, changeDates, selectDate, unselectDate */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */(function (moment) {
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'createDatepicker', function () { return createDatepicker; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'setBtnState', function () { return setBtnState; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'checkKey', function () { return checkKey; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'changeMonth', function () { return changeMonth; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'changeDates', function () { return changeDates; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'selectDate', function () { return selectDate; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'unselectDate', function () { return unselectDate; });
        function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

        function _nonIterableSpread() { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }

        function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

        function _iterableToArray(iter) { if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) return Array.from(iter); }

        function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

        function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

        var dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
        function createDatepicker(view, options) {
          view.addClass('hidden');
          var mainClass = options.mode === 'Single' || options.select === 'One' ? 'datepicker' : 'datepicker-range';
          var active = options.state === 'Expanded' ? 'active' : null;
          var title = createSelect(options.mode, options.title, options.select);
          var mask = createElement('div', active === null ? mainClass : [mainClass, active]);
          mask.tabIndex = -1;
          var calendar = createElement('div', 'datepicker__calendar');
          var header = createElement('div', 'datepicker__header');
          title.forEach(function (el) {
            return header.insertAdjacentElement('beforeend', el);
          });
          mask.insertAdjacentElement('beforeend', header);
          mask.insertAdjacentElement('beforeend', calendar);
          calendar.insertAdjacentElement('beforeend', createTitle(options.now));
          calendar.insertAdjacentElement('beforeend', createDates(options.now));
          calendar.insertAdjacentElement('beforeend', createBtns());
          view[0].insertAdjacentElement('afterend', mask);
          return mask;
        }
        function setBtnState(mask, state) {
          var btnDiv = mask.querySelector('.calendar__buttons');
          var btnClear = mask.querySelector('.clear__button');
          var btnApply = mask.querySelector('.apply__button');
          btnClear.classList.toggle('active', state.clear);
          btnApply.classList.toggle('active', state.apply);
          btnDiv.classList.toggle('off', !state.clear && !state.apply);
        }
        function checkKey(key, data, oldData) {
          if (key === 'state' || key === 'title') {
            return data[key] !== oldData[key];
          } if (key === 'currentMonth') {
            return !data.currentMonth.isSame(oldData.currentMonth);
          } if (key === 'selected') {
            return data.selected.length === 0 && oldData.selected.length === 0 ? false : arraysToCompare(data.selected, oldData.selected, data.mode, data.currentMonth);
          }
          return false;
        }
        function changeMonth(moment, mask) {
          var span = mask.querySelector('.calendar__trigger span');
          var title = moment.format('MMMM') + ' ' + moment.format('YYYY');
          span.textContent = title;
        }
        function changeDates(moment, mask) {
          var dates = mask.querySelector('.dates__body');
          dates.innerHTML = '';
          fillCalendarBody(moment, dates);
        }
        function selectDate(moments, mode, monthMoment, mask, defaultTitle, count) {
          var currMonth = monthMoment.format('M-YYYY');
          var someMoment = mode === 'Single' ? moments[0].format('M-YYYY') : moments[0].hasOwnProperty('start') ? moments[0].start.format('M-YYYY') : moments[0].end.format('M-YYYY');
          var isMonth = currMonth === someMoment;
          mask.querySelectorAll('.d').forEach(function (el) {
            return el.classList.remove('select', 'range', 'select_start', 'select_end');
          });

          if (mode === 'Single' && isMonth) {
            var _mask$querySelector;

            var day = +moments[0].format('D') + +moments[0].clone().date(1).format('e');
            (_mask$querySelector = mask.querySelector('.d-'.concat(day))) === null || _mask$querySelector === void 0 ? void 0 : _mask$querySelector.classList.add('select');
            changeTitle(moments, mode, count, mask.querySelectorAll('.header__text'), 'DD.MM.YYYY');
          } else if (mode === 'Range') {
            var span = count === 'Two' ? mask.querySelectorAll('.datepicker-range span.select__title') : mask.querySelectorAll('.datepicker span.header__text');
            setDeafaultTitle(defaultTitle, mode, span);

            if (moments[0].hasOwnProperty('start') && moments[0].start.format('M-YYYY') === currMonth) {
              var _mask$querySelector2;

              var _day = +moments[0].start.format('D') + +moments[0].start.clone().date(1).format('e');

              (_mask$querySelector2 = mask.querySelector('.d-'.concat(_day))) === null || _mask$querySelector2 === void 0 ? void 0 : _mask$querySelector2.classList.add('select');
            }

            if (moments[0].hasOwnProperty('end') && moments[0].end.format('M-YYYY') === currMonth) {
              var _mask$querySelector3;

              var _day2 = +moments[0].end.format('D') + +moments[0].end.clone().date(1).format('e');

              (_mask$querySelector3 = mask.querySelector('.d-'.concat(_day2))) === null || _mask$querySelector3 === void 0 ? void 0 : _mask$querySelector3.classList.add('select');
            }

            if (moments[0].hasOwnProperty('start') && moments[0].hasOwnProperty('end')) {
              var startDay = +moments[0].start.format('D') + +moments[0].start.clone().date(1).format('e');
              var endDay = +moments[0].end.format('D') + +moments[0].end.clone().date(1).format('e'); // const diff = moments[0]['end'].diff(moments[0]['start'], 'days');

              var startMomentMonth = moments[0].start.format('M-YYYY');
              var endMomentMonth = moments[0].end.format('M-YYYY');

              if (startMomentMonth === currMonth && endMomentMonth === currMonth) {
                var _mask$querySelector4; var
                  _mask$querySelector5;

                (_mask$querySelector4 = mask.querySelector('.d-'.concat(startDay))) === null || _mask$querySelector4 === void 0 ? void 0 : _mask$querySelector4.classList.add('select_start');
                (_mask$querySelector5 = mask.querySelector('.d-'.concat(endDay))) === null || _mask$querySelector5 === void 0 ? void 0 : _mask$querySelector5.classList.add('select_end');

                for (var i = startDay + 1; i < endDay; i++) {
                  var _mask$querySelector6;

                  (_mask$querySelector6 = mask.querySelector('.d-'.concat(i))) === null || _mask$querySelector6 === void 0 ? void 0 : _mask$querySelector6.classList.add('range');
                }
              } else if (startMomentMonth === currMonth && endMomentMonth !== currMonth) {
                var _mask$querySelector7;

                (_mask$querySelector7 = mask.querySelector('.d-'.concat(startDay))) === null || _mask$querySelector7 === void 0 ? void 0 : _mask$querySelector7.classList.add('select_start');

                for (var _i = startDay + 1; _i <= 42; _i++) {
                  var _mask$querySelector8;

                  (_mask$querySelector8 = mask.querySelector('.d-'.concat(_i))) === null || _mask$querySelector8 === void 0 ? void 0 : _mask$querySelector8.classList.add('range');
                }
              } else if (startMomentMonth !== currMonth && endMomentMonth === currMonth) {
                var _mask$querySelector9;

                (_mask$querySelector9 = mask.querySelector('.d-'.concat(endDay))) === null || _mask$querySelector9 === void 0 ? void 0 : _mask$querySelector9.classList.add('select_end');

                for (var _i2 = 1; _i2 < endDay; _i2++) {
                  var _mask$querySelector10;

                  (_mask$querySelector10 = mask.querySelector('.d-'.concat(_i2))) === null || _mask$querySelector10 === void 0 ? void 0 : _mask$querySelector10.classList.add('range');
                }
              } else if (startMomentMonth !== currMonth && endMomentMonth !== currMonth && moments[0].start.isBefore(monthMoment) && moments[0].end.isAfter(monthMoment)) {
                for (var _i3 = 1; _i3 <= 42; _i3++) {
                  var _mask$querySelector11;

                  (_mask$querySelector11 = mask.querySelector('.d-'.concat(_i3))) === null || _mask$querySelector11 === void 0 ? void 0 : _mask$querySelector11.classList.add('range');
                }
              }
            }

            var format = count === 'Two' ? 'DD.MM.YYYY' : 'DD MMM';
            changeTitle(moments, mode, count, span, format);
          }
        }
        function unselectDate(moments, mode, monthMoment, mask, defaultTitle, count) {
          var someMoment = mode === 'Single' ? +moments[0].format('M') : moments[0].hasOwnProperty('start') ? +moments[0].start.format('M') : +moments[0].end.format('M');
          var isMonth = +monthMoment.format('M') === someMoment;

          if (mode === 'Single' && isMonth) {
            var _mask$querySelector12;

            var day = +moments[0].format('D') + +moments[0].clone().date(1).format('e');
            (_mask$querySelector12 = mask.querySelector('.d-'.concat(day))) === null || _mask$querySelector12 === void 0 ? void 0 : _mask$querySelector12.classList.remove('select');
            setDeafaultTitle(defaultTitle, mode, mask.querySelectorAll('.datepicker__header span'));
          } else if (mode === 'Range' && isMonth) {
            if (moments[0].hasOwnProperty('start')) {
              var _mask$querySelector13;

              var _day3 = +moments[0].start.format('D') + +moments[0].start.clone().date(1).format('e');

              (_mask$querySelector13 = mask.querySelector('.d-'.concat(_day3))) === null || _mask$querySelector13 === void 0 ? void 0 : _mask$querySelector13.classList.remove('select');
            }

            if (moments[0].hasOwnProperty('end')) {
              var _mask$querySelector14;

              var _day4 = +moments[0].end.format('D') + +moments[0].end.clone().date(1).format('e');

              (_mask$querySelector14 = mask.querySelector('.d-'.concat(_day4))) === null || _mask$querySelector14 === void 0 ? void 0 : _mask$querySelector14.classList.remove('select');
            }

            mask.querySelectorAll('.d').forEach(function (el) {
              return el.classList.remove('range', 'select_start', 'select_end');
            });
            var span = count === 'Two' ? mask.querySelectorAll('.datepicker-range span.select__title') : mask.querySelectorAll('.datepicker span.header__text');
            setDeafaultTitle(defaultTitle, mode, span);
          }
        }

        function changeTitle(moments, mode, count, titles, format) {
          if (mode === 'Single') {
            titles[0].textContent = moments[0].format(format);
          } else {
            if (moments[0].hasOwnProperty('start')) {
              titles[0].textContent = count === 'Two' ? moments[0].start.format(format) : moments[0].start.format(format).substring(0, 6);
            }

            if (moments[0].hasOwnProperty('end')) {
              titles[1].textContent = count === 'Two' ? moments[0].end.format(format) : moments[0].end.format(format).substring(0, 6);
            }
          }
        }

        function setDeafaultTitle(text, mode, titles) {
          if (mode === 'Single') {
            titles[0].textContent = text;
          } else {
            titles.forEach(function (title) {
              return title.textContent = text;
            });
          }
        }

        function createTitle(title) {
          title = title.format('MMMM') + ' ' + title.format('YYYY');
          var div = createElement('div', 'calendar__trigger');
          div.innerHTML = '\n        <button class="left-btn">\uD83E\uDC60</button><span>'.concat(title, '</span><button class="right-btn">\uD83E\uDC62</button>\n    ');
          return div;
        }

        function createDates(now) {
          var div = createElement('div', 'calendar__dates');
          var head = createElement('div', 'dates__header');
          var body = createElement('div', 'dates__body');
          dayNames.forEach(function (day, i) {
            var dayDiv = createElement('div', ['dd', 'dd-'.concat(i + 1)]);
            dayDiv.textContent = day;
            head.insertAdjacentElement('beforeend', dayDiv);
          });
          fillCalendarBody(now, body);
          div.insertAdjacentElement('beforeend', head);
          div.insertAdjacentElement('beforeend', body);
          return div;
        }

        function fillCalendarBody(now, body) {
          var dayOfMonth = +now.format('D');
          var dayOfCondition = moment().format('D-MM-YYYY');
          var monthOfYear = +now.format('M');
          var startMoment = now.clone();
          startMoment.subtract(dayOfMonth - 1, 'd');
          var dayOfWeek = +startMoment.format('e');

          if (dayOfWeek > 0) {
            startMoment.subtract(dayOfWeek, 'd');
          }

          for (var i = 1; i <= 42; i++) {
            var day = startMoment.format('D');
            var currentMonth = +startMoment.format('M');
            var currentDay = startMoment.format('D-MM-YYYY');
            var isGray = currentMonth !== monthOfYear ? 'd-gray' : null;
            var isNow = currentDay === dayOfCondition ? 'now' : null;
            var classesArray = ['d', 'd-'.concat(i)];
            if (isGray !== null) classesArray.push(isGray);
            if (isNow !== null) classesArray.push(isNow);
            var dayDiv = createElement('div', classesArray);
            dayDiv.textContent = day;
            body.insertAdjacentElement('beforeend', dayDiv);
            startMoment.add(1, 'd');
          }
        }

        function createBtns() {
          var divBtns = createElement('div', ['calendar__buttons', 'off']);
          divBtns.innerHTML = '\n        <button class="clear__button">\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C</button><button class="apply__button">\u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C</button>\n    ';
          return divBtns;
        }

        function createElement(tag, className) {
          var _element$classList;

          var element = document.createElement(tag);
          if (className && typeof className === 'string') element.classList.add(className); else if (className) (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(className));
          return element;
        }

        function arraysToCompare(arr, oldArr, mode, monthMoment) {
          if (mode === 'Single') {
            return arr.length !== oldArr.length ? true : arr[0].isSame(oldArr[0]) ? arr[0].format('M-YYYY') === monthMoment.format('M-YYYY') : true;
          }
          return arr.length !== oldArr.length || arr[0] && oldArr[0] && Object.keys(arr[0]).length !== Object.keys(oldArr[0]).length ? true : arr[0].hasOwnProperty('start') && !oldArr[0].hasOwnProperty('start') || arr[0].hasOwnProperty('end') && !oldArr[0].hasOwnProperty('end') || arr[0].hasOwnProperty('start') && oldArr[0].hasOwnProperty('start') && !arr[0].start.isSame(oldArr[0].start) || arr[0].hasOwnProperty('end') && oldArr[0].hasOwnProperty('end') && !arr[0].end.isSame(oldArr[0].end);
        }

        function createSelect(mode, text, count) {
          var arrow = createElement('div', 'header__arrow');
          arrow.classList.add('icon');

          if (mode === 'Single') {
            var title = createElement('span', 'header__text');
            title.textContent = text;
            return [title, arrow];
          } if (count === 'Two') {
            var startDiv = createElement('div', 'select__start');
            var endDiv = createElement('div', 'select__end');

            var _arrow = createElement('div', 'select__arrow');

            _arrow.classList.add('icon');

            var startTitle = createElement('span', 'select__title');
            startTitle.textContent = text;
            var endTitle = createElement('span', 'select__title');
            endTitle.textContent = text;
            startDiv.insertAdjacentElement('beforeend', startTitle);
            startDiv.insertAdjacentElement('beforeend', _arrow.cloneNode());
            endDiv.insertAdjacentElement('beforeend', endTitle);
            endDiv.insertAdjacentElement('beforeend', _arrow);
            return [startDiv, endDiv];
          }
          var custom = createElement('div', 'custom__header');

          var _startTitle = createElement('span', ['header__text']);

          _startTitle.textContent = text;

          var _endTitle = createElement('span', ['header__text']);

          _endTitle.textContent = text;
          var separator = createElement('span', ['header__separator']);
          separator.textContent = ' - ';
          custom.insertAdjacentElement('beforeend', _startTitle);
          custom.insertAdjacentElement('beforeend', separator);
          custom.insertAdjacentElement('beforeend', _endTitle);
          return [custom, arrow];
        }
        /* WEBPACK VAR INJECTION */ }.call(this, __webpack_require__(/*! moment */ 'moment')));
      /***/ }),

    /***/ jquery:
    /*! *************************!*\
  !*** external "jquery" ***!
  \************************ */
    /*! no static exports found */
    /***/ (function (module, exports) {
      module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;
      /***/ }),

    /***/ moment:
    /*! *************************!*\
  !*** external "moment" ***!
  \************************ */
    /*! no static exports found */
    /***/ (function (module, exports) {
      module.exports = __WEBPACK_EXTERNAL_MODULE_moment__;
      /***/ })

    /** *** */ }));
}));
// # sourceMappingURL=bundle.js.map
