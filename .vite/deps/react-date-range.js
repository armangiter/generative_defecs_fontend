import {
  addDays_exports,
  addMonths_exports,
  addYears_exports,
  differenceInCalendarDays_exports,
  differenceInCalendarMonths_exports,
  differenceInDays_exports,
  eachDayOfInterval_exports,
  en_US_exports,
  endOfDay_exports,
  endOfMonth_exports,
  endOfWeek_exports,
  format_exports,
  init_addDays,
  init_addMonths,
  init_addYears,
  init_differenceInCalendarDays,
  init_differenceInCalendarMonths,
  init_differenceInDays,
  init_eachDayOfInterval,
  init_en_US,
  init_endOfDay,
  init_endOfMonth,
  init_endOfWeek,
  init_format,
  init_isAfter,
  init_isBefore,
  init_isEqual,
  init_isSameDay,
  init_isSameMonth,
  init_isValid,
  init_isWeekend,
  init_isWithinInterval,
  init_max,
  init_min,
  init_parse,
  init_setMonth,
  init_setYear,
  init_startOfDay,
  init_startOfMonth,
  init_startOfWeek,
  init_subMonths,
  isAfter_exports,
  isBefore_exports,
  isEqual_exports,
  isSameDay_exports,
  isSameMonth_exports,
  isValid_exports,
  isWeekend_exports,
  isWithinInterval_exports,
  max_exports,
  min_exports,
  parse_exports,
  setMonth_exports,
  setYear_exports,
  startOfDay_exports,
  startOfMonth_exports,
  startOfWeek_exports,
  subMonths_exports
} from "./chunk-FQVVVPIJ.js";
import "./chunk-DJMIULMO.js";
import "./chunk-XVB2CY43.js";
import "./chunk-FT6KXUFF.js";
import {
  require_prop_types
} from "./chunk-FJ2DDJHN.js";
import {
  require_react
} from "./chunk-FLAVOKRJ.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "./chunk-AC2VUBZ6.js";

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      var nativeCodeString = "[native code]";
      function classNames() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// node_modules/react-date-range/dist/components/DayCell/index.js
var require_DayCell = __commonJS({
  "node_modules/react-date-range/dist/components/DayCell/index.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.rangeShape = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _classnames4 = _interopRequireDefault(require_classnames());
    var _endOfDay = _interopRequireDefault((init_endOfDay(), __toCommonJS(endOfDay_exports)));
    var _isBefore = _interopRequireDefault((init_isBefore(), __toCommonJS(isBefore_exports)));
    var _isAfter = _interopRequireDefault((init_isAfter(), __toCommonJS(isAfter_exports)));
    var _isSameDay = _interopRequireDefault((init_isSameDay(), __toCommonJS(isSameDay_exports)));
    var _format = _interopRequireDefault((init_format(), __toCommonJS(format_exports)));
    var _startOfDay = _interopRequireDefault((init_startOfDay(), __toCommonJS(startOfDay_exports)));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var DayCell = function(_Component) {
      _inherits(DayCell2, _Component);
      var _super = _createSuper(DayCell2);
      function DayCell2(props, context) {
        var _this;
        _classCallCheck(this, DayCell2);
        _this = _super.call(this, props, context);
        _defineProperty(_assertThisInitialized(_this), "handleKeyEvent", function(event) {
          var _this$props = _this.props, day = _this$props.day, onMouseDown = _this$props.onMouseDown, onMouseUp = _this$props.onMouseUp;
          if ([
            13,
            32
            /* enter */
          ].includes(event.keyCode)) {
            if (event.type === "keydown")
              onMouseDown(day);
            else
              onMouseUp(day);
          }
        });
        _defineProperty(_assertThisInitialized(_this), "handleMouseEvent", function(event) {
          var _this$props2 = _this.props, day = _this$props2.day, disabled = _this$props2.disabled, onPreviewChange = _this$props2.onPreviewChange, onMouseEnter = _this$props2.onMouseEnter, onMouseDown = _this$props2.onMouseDown, onMouseUp = _this$props2.onMouseUp;
          var stateChanges = {};
          if (disabled) {
            onPreviewChange();
            return;
          }
          switch (event.type) {
            case "mouseenter":
              onMouseEnter(day);
              onPreviewChange(day);
              stateChanges.hover = true;
              break;
            case "blur":
            case "mouseleave":
              stateChanges.hover = false;
              break;
            case "mousedown":
              stateChanges.active = true;
              onMouseDown(day);
              break;
            case "mouseup":
              event.stopPropagation();
              stateChanges.active = false;
              onMouseUp(day);
              break;
            case "focus":
              onPreviewChange(day);
              break;
          }
          if (Object.keys(stateChanges).length) {
            _this.setState(stateChanges);
          }
        });
        _defineProperty(_assertThisInitialized(_this), "getClassNames", function() {
          var _classnames;
          var _this$props3 = _this.props, isPassive = _this$props3.isPassive, isToday = _this$props3.isToday, isWeekend = _this$props3.isWeekend, isStartOfWeek = _this$props3.isStartOfWeek, isEndOfWeek = _this$props3.isEndOfWeek, isStartOfMonth = _this$props3.isStartOfMonth, isEndOfMonth = _this$props3.isEndOfMonth, disabled = _this$props3.disabled, styles = _this$props3.styles;
          return (0, _classnames4.default)(styles.day, (_classnames = {}, _defineProperty(_classnames, styles.dayPassive, isPassive), _defineProperty(_classnames, styles.dayDisabled, disabled), _defineProperty(_classnames, styles.dayToday, isToday), _defineProperty(_classnames, styles.dayWeekend, isWeekend), _defineProperty(_classnames, styles.dayStartOfWeek, isStartOfWeek), _defineProperty(_classnames, styles.dayEndOfWeek, isEndOfWeek), _defineProperty(_classnames, styles.dayStartOfMonth, isStartOfMonth), _defineProperty(_classnames, styles.dayEndOfMonth, isEndOfMonth), _defineProperty(_classnames, styles.dayHovered, _this.state.hover), _defineProperty(_classnames, styles.dayActive, _this.state.active), _classnames));
        });
        _defineProperty(_assertThisInitialized(_this), "renderPreviewPlaceholder", function() {
          var _classnames2;
          var _this$props4 = _this.props, preview = _this$props4.preview, day = _this$props4.day, styles = _this$props4.styles;
          if (!preview)
            return null;
          var startDate = preview.startDate ? (0, _endOfDay.default)(preview.startDate) : null;
          var endDate = preview.endDate ? (0, _startOfDay.default)(preview.endDate) : null;
          var isInRange = (!startDate || (0, _isAfter.default)(day, startDate)) && (!endDate || (0, _isBefore.default)(day, endDate));
          var isStartEdge = !isInRange && (0, _isSameDay.default)(day, startDate);
          var isEndEdge = !isInRange && (0, _isSameDay.default)(day, endDate);
          return _react.default.createElement("span", {
            className: (0, _classnames4.default)((_classnames2 = {}, _defineProperty(_classnames2, styles.dayStartPreview, isStartEdge), _defineProperty(_classnames2, styles.dayInPreview, isInRange), _defineProperty(_classnames2, styles.dayEndPreview, isEndEdge), _classnames2)),
            style: {
              color: preview.color
            }
          });
        });
        _defineProperty(_assertThisInitialized(_this), "renderSelectionPlaceholders", function() {
          var _this$props5 = _this.props, styles = _this$props5.styles, ranges = _this$props5.ranges, day = _this$props5.day;
          if (_this.props.displayMode === "date") {
            var isSelected = (0, _isSameDay.default)(_this.props.day, _this.props.date);
            return isSelected ? _react.default.createElement("span", {
              className: styles.selected,
              style: {
                color: _this.props.color
              }
            }) : null;
          }
          var inRanges = ranges.reduce(function(result, range) {
            var startDate = range.startDate;
            var endDate = range.endDate;
            if (startDate && endDate && (0, _isBefore.default)(endDate, startDate)) {
              var _ref = [endDate, startDate];
              startDate = _ref[0];
              endDate = _ref[1];
            }
            startDate = startDate ? (0, _endOfDay.default)(startDate) : null;
            endDate = endDate ? (0, _startOfDay.default)(endDate) : null;
            var isInRange = (!startDate || (0, _isAfter.default)(day, startDate)) && (!endDate || (0, _isBefore.default)(day, endDate));
            var isStartEdge = !isInRange && (0, _isSameDay.default)(day, startDate);
            var isEndEdge = !isInRange && (0, _isSameDay.default)(day, endDate);
            if (isInRange || isStartEdge || isEndEdge) {
              return [].concat(_toConsumableArray(result), [_objectSpread({
                isStartEdge,
                isEndEdge,
                isInRange
              }, range)]);
            }
            return result;
          }, []);
          return inRanges.map(function(range, i) {
            var _classnames3;
            return _react.default.createElement("span", {
              key: i,
              className: (0, _classnames4.default)((_classnames3 = {}, _defineProperty(_classnames3, styles.startEdge, range.isStartEdge), _defineProperty(_classnames3, styles.endEdge, range.isEndEdge), _defineProperty(_classnames3, styles.inRange, range.isInRange), _classnames3)),
              style: {
                color: range.color || _this.props.color
              }
            });
          });
        });
        _this.state = {
          hover: false,
          active: false
        };
        return _this;
      }
      _createClass(DayCell2, [{
        key: "render",
        value: function render() {
          var dayContentRenderer = this.props.dayContentRenderer;
          return _react.default.createElement("button", _extends({
            type: "button",
            onMouseEnter: this.handleMouseEvent,
            onMouseLeave: this.handleMouseEvent,
            onFocus: this.handleMouseEvent,
            onMouseDown: this.handleMouseEvent,
            onMouseUp: this.handleMouseEvent,
            onBlur: this.handleMouseEvent,
            onPauseCapture: this.handleMouseEvent,
            onKeyDown: this.handleKeyEvent,
            onKeyUp: this.handleKeyEvent,
            className: this.getClassNames(this.props.styles)
          }, this.props.disabled || this.props.isPassive ? {
            tabIndex: -1
          } : {}, {
            style: {
              color: this.props.color
            }
          }), this.renderSelectionPlaceholders(), this.renderPreviewPlaceholder(), _react.default.createElement("span", {
            className: this.props.styles.dayNumber
          }, (dayContentRenderer === null || dayContentRenderer === void 0 ? void 0 : dayContentRenderer(this.props.day)) || _react.default.createElement("span", null, (0, _format.default)(this.props.day, this.props.dayDisplayFormat))));
        }
      }]);
      return DayCell2;
    }(_react.Component);
    DayCell.defaultProps = {};
    var rangeShape = _propTypes.default.shape({
      startDate: _propTypes.default.object,
      endDate: _propTypes.default.object,
      color: _propTypes.default.string,
      key: _propTypes.default.string,
      autoFocus: _propTypes.default.bool,
      disabled: _propTypes.default.bool,
      showDateDisplay: _propTypes.default.bool
    });
    exports.rangeShape = rangeShape;
    DayCell.propTypes = {
      day: _propTypes.default.object.isRequired,
      dayDisplayFormat: _propTypes.default.string,
      date: _propTypes.default.object,
      ranges: _propTypes.default.arrayOf(rangeShape),
      preview: _propTypes.default.shape({
        startDate: _propTypes.default.object,
        endDate: _propTypes.default.object,
        color: _propTypes.default.string
      }),
      onPreviewChange: _propTypes.default.func,
      previewColor: _propTypes.default.string,
      disabled: _propTypes.default.bool,
      isPassive: _propTypes.default.bool,
      isToday: _propTypes.default.bool,
      isWeekend: _propTypes.default.bool,
      isStartOfWeek: _propTypes.default.bool,
      isEndOfWeek: _propTypes.default.bool,
      isStartOfMonth: _propTypes.default.bool,
      isEndOfMonth: _propTypes.default.bool,
      color: _propTypes.default.string,
      displayMode: _propTypes.default.oneOf(["dateRange", "date"]),
      styles: _propTypes.default.object,
      onMouseDown: _propTypes.default.func,
      onMouseUp: _propTypes.default.func,
      onMouseEnter: _propTypes.default.func,
      dayContentRenderer: _propTypes.default.func
    };
    var _default = DayCell;
    exports.default = _default;
  }
});

// node_modules/react-date-range/dist/utils.js
var require_utils = __commonJS({
  "node_modules/react-date-range/dist/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.calcFocusDate = calcFocusDate;
    exports.findNextRangeIndex = findNextRangeIndex;
    exports.getMonthDisplayRange = getMonthDisplayRange;
    exports.generateStyles = generateStyles;
    var _classnames = _interopRequireDefault(require_classnames());
    var _addDays = _interopRequireDefault((init_addDays(), __toCommonJS(addDays_exports)));
    var _differenceInCalendarMonths = _interopRequireDefault((init_differenceInCalendarMonths(), __toCommonJS(differenceInCalendarMonths_exports)));
    var _differenceInCalendarDays = _interopRequireDefault((init_differenceInCalendarDays(), __toCommonJS(differenceInCalendarDays_exports)));
    var _endOfWeek = _interopRequireDefault((init_endOfWeek(), __toCommonJS(endOfWeek_exports)));
    var _startOfWeek = _interopRequireDefault((init_startOfWeek(), __toCommonJS(startOfWeek_exports)));
    var _endOfMonth = _interopRequireDefault((init_endOfMonth(), __toCommonJS(endOfMonth_exports)));
    var _startOfMonth = _interopRequireDefault((init_startOfMonth(), __toCommonJS(startOfMonth_exports)));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function calcFocusDate(currentFocusedDate, props) {
      var shownDate = props.shownDate, date = props.date, months = props.months, ranges = props.ranges, focusedRange = props.focusedRange, displayMode = props.displayMode;
      var targetInterval;
      if (displayMode === "dateRange") {
        var range = ranges[focusedRange[0]] || {};
        targetInterval = {
          start: range.startDate,
          end: range.endDate
        };
      } else {
        targetInterval = {
          start: date,
          end: date
        };
      }
      targetInterval.start = (0, _startOfMonth.default)(targetInterval.start || /* @__PURE__ */ new Date());
      targetInterval.end = (0, _endOfMonth.default)(targetInterval.end || targetInterval.start);
      var targetDate = targetInterval.start || targetInterval.end || shownDate || /* @__PURE__ */ new Date();
      if (!currentFocusedDate)
        return shownDate || targetDate;
      if ((0, _differenceInCalendarMonths.default)(targetInterval.start, targetInterval.end) > months) {
        return currentFocusedDate;
      }
      return targetDate;
    }
    function findNextRangeIndex(ranges) {
      var currentRangeIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
      var nextIndex = ranges.findIndex(function(range, i) {
        return i > currentRangeIndex && range.autoFocus !== false && !range.disabled;
      });
      if (nextIndex !== -1)
        return nextIndex;
      return ranges.findIndex(function(range) {
        return range.autoFocus !== false && !range.disabled;
      });
    }
    function getMonthDisplayRange(date, dateOptions, fixedHeight) {
      var startDateOfMonth = (0, _startOfMonth.default)(date, dateOptions);
      var endDateOfMonth = (0, _endOfMonth.default)(date, dateOptions);
      var startDateOfCalendar = (0, _startOfWeek.default)(startDateOfMonth, dateOptions);
      var endDateOfCalendar = (0, _endOfWeek.default)(endDateOfMonth, dateOptions);
      if (fixedHeight && (0, _differenceInCalendarDays.default)(endDateOfCalendar, startDateOfCalendar) <= 34) {
        endDateOfCalendar = (0, _addDays.default)(endDateOfCalendar, 7);
      }
      return {
        start: startDateOfCalendar,
        end: endDateOfCalendar,
        startDateOfMonth,
        endDateOfMonth
      };
    }
    function generateStyles(sources) {
      if (!sources.length)
        return {};
      var generatedStyles = sources.filter(function(source) {
        return Boolean(source);
      }).reduce(function(styles, styleSource) {
        Object.keys(styleSource).forEach(function(key) {
          styles[key] = (0, _classnames.default)(styles[key], styleSource[key]);
        });
        return styles;
      }, {});
      return generatedStyles;
    }
  }
});

// node_modules/react-date-range/dist/components/Month/index.js
var require_Month = __commonJS({
  "node_modules/react-date-range/dist/components/Month/index.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _DayCell = _interopRequireWildcard(require_DayCell());
    var _eachDayOfInterval = _interopRequireDefault((init_eachDayOfInterval(), __toCommonJS(eachDayOfInterval_exports)));
    var _isWithinInterval = _interopRequireDefault((init_isWithinInterval(), __toCommonJS(isWithinInterval_exports)));
    var _isWeekend = _interopRequireDefault((init_isWeekend(), __toCommonJS(isWeekend_exports)));
    var _isAfter = _interopRequireDefault((init_isAfter(), __toCommonJS(isAfter_exports)));
    var _isSameDay = _interopRequireDefault((init_isSameDay(), __toCommonJS(isSameDay_exports)));
    var _isBefore = _interopRequireDefault((init_isBefore(), __toCommonJS(isBefore_exports)));
    var _endOfWeek = _interopRequireDefault((init_endOfWeek(), __toCommonJS(endOfWeek_exports)));
    var _startOfWeek = _interopRequireDefault((init_startOfWeek(), __toCommonJS(startOfWeek_exports)));
    var _endOfDay = _interopRequireDefault((init_endOfDay(), __toCommonJS(endOfDay_exports)));
    var _startOfDay = _interopRequireDefault((init_startOfDay(), __toCommonJS(startOfDay_exports)));
    var _format = _interopRequireDefault((init_format(), __toCommonJS(format_exports)));
    var _utils = require_utils();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function renderWeekdays(styles, dateOptions, weekdayDisplayFormat) {
      var now = /* @__PURE__ */ new Date();
      return _react.default.createElement("div", {
        className: styles.weekDays
      }, (0, _eachDayOfInterval.default)({
        start: (0, _startOfWeek.default)(now, dateOptions),
        end: (0, _endOfWeek.default)(now, dateOptions)
      }).map(function(day, i) {
        return _react.default.createElement("span", {
          className: styles.weekDay,
          key: i
        }, (0, _format.default)(day, weekdayDisplayFormat, dateOptions));
      }));
    }
    var Month = function(_PureComponent) {
      _inherits(Month2, _PureComponent);
      var _super = _createSuper(Month2);
      function Month2() {
        _classCallCheck(this, Month2);
        return _super.apply(this, arguments);
      }
      _createClass(Month2, [{
        key: "render",
        value: function render() {
          var _this = this;
          var now = /* @__PURE__ */ new Date();
          var _this$props = this.props, displayMode = _this$props.displayMode, focusedRange = _this$props.focusedRange, drag = _this$props.drag, styles = _this$props.styles, disabledDates = _this$props.disabledDates, disabledDay = _this$props.disabledDay;
          var minDate = this.props.minDate && (0, _startOfDay.default)(this.props.minDate);
          var maxDate = this.props.maxDate && (0, _endOfDay.default)(this.props.maxDate);
          var monthDisplay = (0, _utils.getMonthDisplayRange)(this.props.month, this.props.dateOptions, this.props.fixedHeight);
          var ranges = this.props.ranges;
          if (displayMode === "dateRange" && drag.status) {
            var _drag$range = drag.range, startDate = _drag$range.startDate, endDate = _drag$range.endDate;
            ranges = ranges.map(function(range, i) {
              if (i !== focusedRange[0])
                return range;
              return _objectSpread(_objectSpread({}, range), {}, {
                startDate,
                endDate
              });
            });
          }
          var showPreview = this.props.showPreview && !drag.disablePreview;
          return _react.default.createElement("div", {
            className: styles.month,
            style: this.props.style
          }, this.props.showMonthName ? _react.default.createElement("div", {
            className: styles.monthName
          }, (0, _format.default)(this.props.month, this.props.monthDisplayFormat, this.props.dateOptions)) : null, this.props.showWeekDays && renderWeekdays(styles, this.props.dateOptions, this.props.weekdayDisplayFormat), _react.default.createElement("div", {
            className: styles.days,
            onMouseLeave: this.props.onMouseLeave
          }, (0, _eachDayOfInterval.default)({
            start: monthDisplay.start,
            end: monthDisplay.end
          }).map(function(day, index) {
            var isStartOfMonth = (0, _isSameDay.default)(day, monthDisplay.startDateOfMonth);
            var isEndOfMonth = (0, _isSameDay.default)(day, monthDisplay.endDateOfMonth);
            var isOutsideMinMax = minDate && (0, _isBefore.default)(day, minDate) || maxDate && (0, _isAfter.default)(day, maxDate);
            var isDisabledSpecifically = disabledDates.some(function(disabledDate) {
              return (0, _isSameDay.default)(disabledDate, day);
            });
            var isDisabledDay = disabledDay(day);
            return _react.default.createElement(_DayCell.default, _extends({}, _this.props, {
              ranges,
              day,
              preview: showPreview ? _this.props.preview : null,
              isWeekend: (0, _isWeekend.default)(day, _this.props.dateOptions),
              isToday: (0, _isSameDay.default)(day, now),
              isStartOfWeek: (0, _isSameDay.default)(day, (0, _startOfWeek.default)(day, _this.props.dateOptions)),
              isEndOfWeek: (0, _isSameDay.default)(day, (0, _endOfWeek.default)(day, _this.props.dateOptions)),
              isStartOfMonth,
              isEndOfMonth,
              key: index,
              disabled: isOutsideMinMax || isDisabledSpecifically || isDisabledDay,
              isPassive: !(0, _isWithinInterval.default)(day, {
                start: monthDisplay.startDateOfMonth,
                end: monthDisplay.endDateOfMonth
              }),
              styles,
              onMouseDown: _this.props.onDragSelectionStart,
              onMouseUp: _this.props.onDragSelectionEnd,
              onMouseEnter: _this.props.onDragSelectionMove,
              dragRange: drag.range,
              drag: drag.status
            }));
          })));
        }
      }]);
      return Month2;
    }(_react.PureComponent);
    Month.defaultProps = {};
    Month.propTypes = {
      style: _propTypes.default.object,
      styles: _propTypes.default.object,
      month: _propTypes.default.object,
      drag: _propTypes.default.object,
      dateOptions: _propTypes.default.object,
      disabledDates: _propTypes.default.array,
      disabledDay: _propTypes.default.func,
      preview: _propTypes.default.shape({
        startDate: _propTypes.default.object,
        endDate: _propTypes.default.object
      }),
      showPreview: _propTypes.default.bool,
      displayMode: _propTypes.default.oneOf(["dateRange", "date"]),
      minDate: _propTypes.default.object,
      maxDate: _propTypes.default.object,
      ranges: _propTypes.default.arrayOf(_DayCell.rangeShape),
      focusedRange: _propTypes.default.arrayOf(_propTypes.default.number),
      onDragSelectionStart: _propTypes.default.func,
      onDragSelectionEnd: _propTypes.default.func,
      onDragSelectionMove: _propTypes.default.func,
      onMouseLeave: _propTypes.default.func,
      monthDisplayFormat: _propTypes.default.string,
      weekdayDisplayFormat: _propTypes.default.string,
      dayDisplayFormat: _propTypes.default.string,
      showWeekDays: _propTypes.default.bool,
      showMonthName: _propTypes.default.bool,
      fixedHeight: _propTypes.default.bool
    };
    var _default = Month;
    exports.default = _default;
  }
});

// node_modules/react-date-range/dist/components/DateInput/index.js
var require_DateInput = __commonJS({
  "node_modules/react-date-range/dist/components/DateInput/index.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _classnames = _interopRequireDefault(require_classnames());
    var _isEqual = _interopRequireDefault((init_isEqual(), __toCommonJS(isEqual_exports)));
    var _isValid = _interopRequireDefault((init_isValid(), __toCommonJS(isValid_exports)));
    var _parse = _interopRequireDefault((init_parse(), __toCommonJS(parse_exports)));
    var _format = _interopRequireDefault((init_format(), __toCommonJS(format_exports)));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var DateInput = function(_PureComponent) {
      _inherits(DateInput2, _PureComponent);
      var _super = _createSuper(DateInput2);
      function DateInput2(props, context) {
        var _this;
        _classCallCheck(this, DateInput2);
        _this = _super.call(this, props, context);
        _defineProperty(_assertThisInitialized(_this), "onKeyDown", function(e) {
          var value = _this.state.value;
          if (e.key === "Enter") {
            _this.update(value);
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onChange", function(e) {
          _this.setState({
            value: e.target.value,
            changed: true,
            invalid: false
          });
        });
        _defineProperty(_assertThisInitialized(_this), "onBlur", function() {
          var value = _this.state.value;
          _this.update(value);
        });
        _this.state = {
          invalid: false,
          changed: false,
          value: _this.formatDate(props)
        };
        return _this;
      }
      _createClass(DateInput2, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          var value = prevProps.value;
          if (!(0, _isEqual.default)(value, this.props.value)) {
            this.setState({
              value: this.formatDate(this.props)
            });
          }
        }
      }, {
        key: "formatDate",
        value: function formatDate(_ref) {
          var value = _ref.value, dateDisplayFormat = _ref.dateDisplayFormat, dateOptions = _ref.dateOptions;
          if (value && (0, _isValid.default)(value)) {
            return (0, _format.default)(value, dateDisplayFormat, dateOptions);
          }
          return "";
        }
      }, {
        key: "update",
        value: function update(value) {
          var _this$state = this.state, invalid = _this$state.invalid, changed = _this$state.changed;
          if (invalid || !changed || !value) {
            return;
          }
          var _this$props = this.props, onChange = _this$props.onChange, dateDisplayFormat = _this$props.dateDisplayFormat, dateOptions = _this$props.dateOptions;
          var parsed = (0, _parse.default)(value, dateDisplayFormat, /* @__PURE__ */ new Date(), dateOptions);
          if ((0, _isValid.default)(parsed)) {
            this.setState({
              changed: false
            }, function() {
              return onChange(parsed);
            });
          } else {
            this.setState({
              invalid: true
            });
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props, className = _this$props2.className, readOnly = _this$props2.readOnly, placeholder = _this$props2.placeholder, ariaLabel = _this$props2.ariaLabel, disabled = _this$props2.disabled, onFocus = _this$props2.onFocus;
          var _this$state2 = this.state, value = _this$state2.value, invalid = _this$state2.invalid;
          return _react.default.createElement("span", {
            className: (0, _classnames.default)("rdrDateInput", className)
          }, _react.default.createElement("input", {
            readOnly,
            disabled,
            value,
            placeholder,
            "aria-label": ariaLabel,
            onKeyDown: this.onKeyDown,
            onChange: this.onChange,
            onBlur: this.onBlur,
            onFocus
          }), invalid && _react.default.createElement("span", {
            className: "rdrWarning"
          }, "⚠"));
        }
      }]);
      return DateInput2;
    }(_react.PureComponent);
    DateInput.propTypes = {
      value: _propTypes.default.object,
      placeholder: _propTypes.default.string,
      disabled: _propTypes.default.bool,
      readOnly: _propTypes.default.bool,
      dateOptions: _propTypes.default.object,
      dateDisplayFormat: _propTypes.default.string,
      ariaLabel: _propTypes.default.string,
      className: _propTypes.default.string,
      onFocus: _propTypes.default.func.isRequired,
      onChange: _propTypes.default.func.isRequired
    };
    DateInput.defaultProps = {
      readOnly: true,
      disabled: false,
      dateDisplayFormat: "MMM D, YYYY"
    };
    var _default = DateInput;
    exports.default = _default;
  }
});

// node_modules/react-list/react-list.js
var require_react_list = __commonJS({
  "node_modules/react-list/react-list.js"(exports, module) {
    (function(global, factory) {
      if (typeof define === "function" && define.amd) {
        define("react-list", ["prop-types", "react"], factory);
      } else if (typeof exports !== "undefined") {
        factory(require_prop_types(), require_react());
      } else {
        var mod = {
          exports: {}
        };
        factory(global.PropTypes, global.React);
        global.ReactList = mod.exports;
      }
    })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : exports, function(_propTypes, _react) {
      "use strict";
      _propTypes = _interopRequireDefault(_propTypes);
      _react = _interopRequireWildcard(_react);
      var _class, _temp;
      function _getRequireWildcardCache() {
        if (typeof WeakMap !== "function")
          return null;
        var cache = /* @__PURE__ */ new WeakMap();
        _getRequireWildcardCache = function _getRequireWildcardCache2() {
          return cache;
        };
        return cache;
      }
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return { "default": obj };
        }
        var cache = _getRequireWildcardCache();
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj["default"] = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      function _possibleConstructorReturn(self2, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self2);
      }
      function _assertThisInitialized(self2) {
        if (self2 === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self2;
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var CLIENT_SIZE_KEYS = {
        x: "clientWidth",
        y: "clientHeight"
      };
      var CLIENT_START_KEYS = {
        x: "clientTop",
        y: "clientLeft"
      };
      var INNER_SIZE_KEYS = {
        x: "innerWidth",
        y: "innerHeight"
      };
      var OFFSET_SIZE_KEYS = {
        x: "offsetWidth",
        y: "offsetHeight"
      };
      var OFFSET_START_KEYS = {
        x: "offsetLeft",
        y: "offsetTop"
      };
      var OVERFLOW_KEYS = {
        x: "overflowX",
        y: "overflowY"
      };
      var SCROLL_SIZE_KEYS = {
        x: "scrollWidth",
        y: "scrollHeight"
      };
      var SCROLL_START_KEYS = {
        x: "scrollLeft",
        y: "scrollTop"
      };
      var SIZE_KEYS = {
        x: "width",
        y: "height"
      };
      var NOOP = function NOOP2() {
      };
      var PASSIVE = function() {
        if (typeof window === "undefined")
          return false;
        var hasSupport = false;
        try {
          document.createElement("div").addEventListener("test", NOOP, {
            get passive() {
              hasSupport = true;
              return false;
            }
          });
        } catch (e) {
        }
        return hasSupport;
      }() ? {
        passive: true
      } : false;
      var UNSTABLE_MESSAGE = "ReactList failed to reach a stable state.";
      var MAX_SYNC_UPDATES = 40;
      var isEqualSubset = function isEqualSubset2(a, b) {
        for (var key in b) {
          if (a[key] !== b[key])
            return false;
        }
        return true;
      };
      var defaultScrollParentGetter = function defaultScrollParentGetter2(component) {
        var axis = component.props.axis;
        var el = component.getEl();
        var overflowKey = OVERFLOW_KEYS[axis];
        while (el = el.parentElement) {
          switch (window.getComputedStyle(el)[overflowKey]) {
            case "auto":
            case "scroll":
            case "overlay":
              return el;
          }
        }
        return window;
      };
      var defaultScrollParentViewportSizeGetter = function defaultScrollParentViewportSizeGetter2(component) {
        var axis = component.props.axis;
        var scrollParent = component.scrollParent;
        return scrollParent === window ? window[INNER_SIZE_KEYS[axis]] : scrollParent[CLIENT_SIZE_KEYS[axis]];
      };
      var constrain = function constrain2(props, state) {
        var length = props.length, minSize = props.minSize, type = props.type;
        var from = state.from, size = state.size, itemsPerRow = state.itemsPerRow;
        size = Math.max(size, minSize);
        var mod = size % itemsPerRow;
        if (mod)
          size += itemsPerRow - mod;
        if (size > length)
          size = length;
        from = type === "simple" || !from ? 0 : Math.max(Math.min(from, length - size), 0);
        if (mod = from % itemsPerRow) {
          from -= mod;
          size += mod;
        }
        if (from === state.from && size == state.size)
          return state;
        return _objectSpread(_objectSpread({}, state), {}, {
          from,
          size
        });
      };
      module.exports = (_temp = _class = function(_Component) {
        _inherits(ReactList, _Component);
        var _super = _createSuper(ReactList);
        _createClass(ReactList, null, [{
          key: "getDerivedStateFromProps",
          value: function getDerivedStateFromProps(props, state) {
            var newState = constrain(props, state);
            return newState === state ? null : newState;
          }
        }]);
        function ReactList(props) {
          var _this;
          _classCallCheck(this, ReactList);
          _this = _super.call(this, props);
          _this.state = constrain(props, {
            itemsPerRow: 1,
            from: props.initialIndex,
            size: 0
          });
          _this.cache = {};
          _this.cachedScrollPosition = null;
          _this.prevPrevState = {};
          _this.unstable = false;
          _this.updateCounter = 0;
          return _this;
        }
        _createClass(ReactList, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            this.updateFrameAndClearCache = this.updateFrameAndClearCache.bind(this);
            window.addEventListener("resize", this.updateFrameAndClearCache);
            this.updateFrame(this.scrollTo.bind(this, this.props.initialIndex));
          }
        }, {
          key: "componentDidUpdate",
          value: function componentDidUpdate(prevProps) {
            var _this2 = this;
            if (this.props.axis !== prevProps.axis)
              this.clearSizeCache();
            if (this.unstable)
              return;
            if (++this.updateCounter > MAX_SYNC_UPDATES) {
              this.unstable = true;
              return console.error(UNSTABLE_MESSAGE);
            }
            if (!this.updateCounterTimeoutId) {
              this.updateCounterTimeoutId = setTimeout(function() {
                _this2.updateCounter = 0;
                delete _this2.updateCounterTimeoutId;
              }, 0);
            }
            this.updateFrame();
          }
        }, {
          key: "maybeSetState",
          value: function maybeSetState(b, cb) {
            if (isEqualSubset(this.state, b))
              return cb();
            this.setState(b, cb);
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            window.removeEventListener("resize", this.updateFrameAndClearCache);
            this.scrollParent.removeEventListener("scroll", this.updateFrameAndClearCache, PASSIVE);
            this.scrollParent.removeEventListener("mousewheel", NOOP, PASSIVE);
          }
        }, {
          key: "getOffset",
          value: function getOffset(el) {
            var axis = this.props.axis;
            var offset = el[CLIENT_START_KEYS[axis]] || 0;
            var offsetKey = OFFSET_START_KEYS[axis];
            do {
              offset += el[offsetKey] || 0;
            } while (el = el.offsetParent);
            return offset;
          }
        }, {
          key: "getEl",
          value: function getEl() {
            return this.el || this.items;
          }
        }, {
          key: "getScrollPosition",
          value: function getScrollPosition() {
            if (typeof this.cachedScrollPosition === "number") {
              return this.cachedScrollPosition;
            }
            var scrollParent = this.scrollParent;
            var axis = this.props.axis;
            var scrollKey = SCROLL_START_KEYS[axis];
            var actual = scrollParent === window ? (
              // Firefox always returns document.body[scrollKey] as 0 and Chrome/Safari
              // always return document.documentElement[scrollKey] as 0, so take
              // whichever has a value.
              document.body[scrollKey] || document.documentElement[scrollKey]
            ) : scrollParent[scrollKey];
            var max = this.getScrollSize() - this.props.scrollParentViewportSizeGetter(this);
            var scroll = Math.max(0, Math.min(actual, max));
            var el = this.getEl();
            this.cachedScrollPosition = this.getOffset(scrollParent) + scroll - this.getOffset(el);
            return this.cachedScrollPosition;
          }
        }, {
          key: "setScroll",
          value: function setScroll(offset) {
            var scrollParent = this.scrollParent;
            var axis = this.props.axis;
            offset += this.getOffset(this.getEl());
            if (scrollParent === window)
              return window.scrollTo(0, offset);
            offset -= this.getOffset(this.scrollParent);
            scrollParent[SCROLL_START_KEYS[axis]] = offset;
          }
        }, {
          key: "getScrollSize",
          value: function getScrollSize() {
            var scrollParent = this.scrollParent;
            var _document = document, body = _document.body, documentElement = _document.documentElement;
            var key = SCROLL_SIZE_KEYS[this.props.axis];
            return scrollParent === window ? Math.max(body[key], documentElement[key]) : scrollParent[key];
          }
        }, {
          key: "hasDeterminateSize",
          value: function hasDeterminateSize() {
            var _this$props = this.props, itemSizeGetter = _this$props.itemSizeGetter, type = _this$props.type;
            return type === "uniform" || itemSizeGetter;
          }
        }, {
          key: "getStartAndEnd",
          value: function getStartAndEnd() {
            var threshold = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props.threshold;
            var scroll = this.getScrollPosition();
            var start = Math.max(0, scroll - threshold);
            var end = scroll + this.props.scrollParentViewportSizeGetter(this) + threshold;
            if (this.hasDeterminateSize()) {
              end = Math.min(end, this.getSpaceBefore(this.props.length));
            }
            return {
              start,
              end
            };
          }
        }, {
          key: "getItemSizeAndItemsPerRow",
          value: function getItemSizeAndItemsPerRow() {
            var _this$props2 = this.props, axis = _this$props2.axis, useStaticSize = _this$props2.useStaticSize;
            var _this$state = this.state, itemSize = _this$state.itemSize, itemsPerRow = _this$state.itemsPerRow;
            if (useStaticSize && itemSize && itemsPerRow) {
              return {
                itemSize,
                itemsPerRow
              };
            }
            var itemEls = this.items.children;
            if (!itemEls.length)
              return {};
            var firstEl = itemEls[0];
            var firstElSize = firstEl[OFFSET_SIZE_KEYS[axis]];
            var delta = Math.abs(firstElSize - itemSize);
            if (isNaN(delta) || delta >= 1)
              itemSize = firstElSize;
            if (!itemSize)
              return {};
            var startKey = OFFSET_START_KEYS[axis];
            var firstStart = firstEl[startKey];
            itemsPerRow = 1;
            for (var item = itemEls[itemsPerRow]; item && item[startKey] === firstStart; item = itemEls[itemsPerRow]) {
              ++itemsPerRow;
            }
            return {
              itemSize,
              itemsPerRow
            };
          }
        }, {
          key: "clearSizeCache",
          value: function clearSizeCache() {
            this.cachedScrollPosition = null;
          }
          // Called by 'scroll' and 'resize' events, clears scroll position cache.
        }, {
          key: "updateFrameAndClearCache",
          value: function updateFrameAndClearCache(cb) {
            this.clearSizeCache();
            return this.updateFrame(cb);
          }
        }, {
          key: "updateFrame",
          value: function updateFrame(cb) {
            this.updateScrollParent();
            if (typeof cb != "function")
              cb = NOOP;
            switch (this.props.type) {
              case "simple":
                return this.updateSimpleFrame(cb);
              case "variable":
                return this.updateVariableFrame(cb);
              case "uniform":
                return this.updateUniformFrame(cb);
            }
          }
        }, {
          key: "updateScrollParent",
          value: function updateScrollParent() {
            var prev = this.scrollParent;
            this.scrollParent = this.props.scrollParentGetter(this);
            if (prev === this.scrollParent)
              return;
            if (prev) {
              prev.removeEventListener("scroll", this.updateFrameAndClearCache);
              prev.removeEventListener("mousewheel", NOOP);
            }
            this.clearSizeCache();
            this.scrollParent.addEventListener("scroll", this.updateFrameAndClearCache, PASSIVE);
            this.scrollParent.addEventListener("mousewheel", NOOP, PASSIVE);
          }
        }, {
          key: "updateSimpleFrame",
          value: function updateSimpleFrame(cb) {
            var _this$getStartAndEnd = this.getStartAndEnd(), end = _this$getStartAndEnd.end;
            var itemEls = this.items.children;
            var elEnd = 0;
            if (itemEls.length) {
              var axis = this.props.axis;
              var firstItemEl = itemEls[0];
              var lastItemEl = itemEls[itemEls.length - 1];
              elEnd = this.getOffset(lastItemEl) + lastItemEl[OFFSET_SIZE_KEYS[axis]] - this.getOffset(firstItemEl);
            }
            if (elEnd > end)
              return cb();
            var _this$props3 = this.props, pageSize = _this$props3.pageSize, length = _this$props3.length;
            var size = Math.min(this.state.size + pageSize, length);
            this.maybeSetState({
              size
            }, cb);
          }
        }, {
          key: "updateVariableFrame",
          value: function updateVariableFrame(cb) {
            if (!this.props.itemSizeGetter)
              this.cacheSizes();
            var _this$getStartAndEnd2 = this.getStartAndEnd(), start = _this$getStartAndEnd2.start, end = _this$getStartAndEnd2.end;
            var _this$props4 = this.props, length = _this$props4.length, pageSize = _this$props4.pageSize;
            var space = 0;
            var from = 0;
            var size = 0;
            var maxFrom = length - 1;
            while (from < maxFrom) {
              var itemSize = this.getSizeOfItem(from);
              if (itemSize == null || space + itemSize > start)
                break;
              space += itemSize;
              ++from;
            }
            var maxSize = length - from;
            while (size < maxSize && space < end) {
              var _itemSize = this.getSizeOfItem(from + size);
              if (_itemSize == null) {
                size = Math.min(size + pageSize, maxSize);
                break;
              }
              space += _itemSize;
              ++size;
            }
            this.maybeSetState(constrain(this.props, {
              from,
              itemsPerRow: 1,
              size
            }), cb);
          }
        }, {
          key: "updateUniformFrame",
          value: function updateUniformFrame(cb) {
            var _this$getItemSizeAndI = this.getItemSizeAndItemsPerRow(), itemSize = _this$getItemSizeAndI.itemSize, itemsPerRow = _this$getItemSizeAndI.itemsPerRow;
            if (!itemSize || !itemsPerRow)
              return cb();
            var _this$getStartAndEnd3 = this.getStartAndEnd(), start = _this$getStartAndEnd3.start, end = _this$getStartAndEnd3.end;
            var _constrain = constrain(this.props, {
              from: Math.floor(start / itemSize) * itemsPerRow,
              size: (Math.ceil((end - start) / itemSize) + 1) * itemsPerRow,
              itemsPerRow
            }), from = _constrain.from, size = _constrain.size;
            return this.maybeSetState({
              itemsPerRow,
              from,
              itemSize,
              size
            }, cb);
          }
        }, {
          key: "getSpaceBefore",
          value: function getSpaceBefore(index) {
            var cache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (cache[index] != null)
              return cache[index];
            var _this$state2 = this.state, itemSize = _this$state2.itemSize, itemsPerRow = _this$state2.itemsPerRow;
            if (itemSize) {
              return cache[index] = Math.floor(index / itemsPerRow) * itemSize;
            }
            var from = index;
            while (from > 0 && cache[--from] == null) {
              ;
            }
            var space = cache[from] || 0;
            for (var i = from; i < index; ++i) {
              cache[i] = space;
              var _itemSize2 = this.getSizeOfItem(i);
              if (_itemSize2 == null)
                break;
              space += _itemSize2;
            }
            return cache[index] = space;
          }
        }, {
          key: "cacheSizes",
          value: function cacheSizes() {
            var cache = this.cache;
            var from = this.state.from;
            var itemEls = this.items.children;
            var sizeKey = OFFSET_SIZE_KEYS[this.props.axis];
            for (var i = 0, l = itemEls.length; i < l; ++i) {
              cache[from + i] = itemEls[i][sizeKey];
            }
          }
        }, {
          key: "getSizeOfItem",
          value: function getSizeOfItem(index) {
            var cache = this.cache, items = this.items;
            var _this$props5 = this.props, axis = _this$props5.axis, itemSizeGetter = _this$props5.itemSizeGetter, itemSizeEstimator = _this$props5.itemSizeEstimator, type = _this$props5.type;
            var _this$state3 = this.state, from = _this$state3.from, itemSize = _this$state3.itemSize, size = _this$state3.size;
            if (itemSize)
              return itemSize;
            if (itemSizeGetter)
              return itemSizeGetter(index);
            if (index in cache)
              return cache[index];
            if (type === "simple" && index >= from && index < from + size && items) {
              var itemEl = items.children[index - from];
              if (itemEl)
                return itemEl[OFFSET_SIZE_KEYS[axis]];
            }
            if (itemSizeEstimator)
              return itemSizeEstimator(index, cache);
          }
        }, {
          key: "scrollTo",
          value: function scrollTo(index) {
            if (index != null)
              this.setScroll(this.getSpaceBefore(index));
          }
        }, {
          key: "scrollAround",
          value: function scrollAround(index) {
            var current = this.getScrollPosition();
            var bottom = this.getSpaceBefore(index);
            var top = bottom - this.props.scrollParentViewportSizeGetter(this) + this.getSizeOfItem(index);
            var min = Math.min(top, bottom);
            var max = Math.max(top, bottom);
            if (current <= min)
              return this.setScroll(min);
            if (current > max)
              return this.setScroll(max);
          }
        }, {
          key: "getVisibleRange",
          value: function getVisibleRange() {
            var _this$state4 = this.state, from = _this$state4.from, size = _this$state4.size;
            var _this$getStartAndEnd4 = this.getStartAndEnd(0), start = _this$getStartAndEnd4.start, end = _this$getStartAndEnd4.end;
            var cache = {};
            var first, last;
            for (var i = from; i < from + size; ++i) {
              var itemStart = this.getSpaceBefore(i, cache);
              var itemEnd = itemStart + this.getSizeOfItem(i);
              if (first == null && itemEnd > start)
                first = i;
              if (first != null && itemStart < end)
                last = i;
            }
            return [first, last];
          }
        }, {
          key: "renderItems",
          value: function renderItems() {
            var _this3 = this;
            var _this$props6 = this.props, itemRenderer = _this$props6.itemRenderer, itemsRenderer = _this$props6.itemsRenderer;
            var _this$state5 = this.state, from = _this$state5.from, size = _this$state5.size;
            var items = [];
            for (var i = 0; i < size; ++i) {
              items.push(itemRenderer(from + i, i));
            }
            return itemsRenderer(items, function(c) {
              return _this3.items = c;
            });
          }
        }, {
          key: "render",
          value: function render() {
            var _this4 = this;
            var _this$props7 = this.props, axis = _this$props7.axis, length = _this$props7.length, type = _this$props7.type, useTranslate3d = _this$props7.useTranslate3d;
            var _this$state6 = this.state, from = _this$state6.from, itemsPerRow = _this$state6.itemsPerRow;
            var items = this.renderItems();
            if (type === "simple")
              return items;
            var style = {
              position: "relative"
            };
            var cache = {};
            var bottom = Math.ceil(length / itemsPerRow) * itemsPerRow;
            var size = this.getSpaceBefore(bottom, cache);
            if (size) {
              style[SIZE_KEYS[axis]] = size;
              if (axis === "x")
                style.overflowX = "hidden";
            }
            var offset = this.getSpaceBefore(from, cache);
            var x = axis === "x" ? offset : 0;
            var y = axis === "y" ? offset : 0;
            var transform = useTranslate3d ? "translate3d(".concat(x, "px, ").concat(y, "px, 0)") : "translate(".concat(x, "px, ").concat(y, "px)");
            var listStyle = {
              msTransform: transform,
              WebkitTransform: transform,
              transform
            };
            return _react["default"].createElement("div", {
              style,
              ref: function ref(c) {
                return _this4.el = c;
              }
            }, _react["default"].createElement("div", {
              style: listStyle
            }, items));
          }
        }]);
        return ReactList;
      }(_react.Component), _defineProperty(_class, "displayName", "ReactList"), _defineProperty(_class, "propTypes", {
        axis: _propTypes["default"].oneOf(["x", "y"]),
        initialIndex: _propTypes["default"].number,
        itemRenderer: _propTypes["default"].func,
        itemSizeEstimator: _propTypes["default"].func,
        itemSizeGetter: _propTypes["default"].func,
        itemsRenderer: _propTypes["default"].func,
        length: _propTypes["default"].number,
        minSize: _propTypes["default"].number,
        pageSize: _propTypes["default"].number,
        scrollParentGetter: _propTypes["default"].func,
        scrollParentViewportSizeGetter: _propTypes["default"].func,
        threshold: _propTypes["default"].number,
        type: _propTypes["default"].oneOf(["simple", "variable", "uniform"]),
        useStaticSize: _propTypes["default"].bool,
        useTranslate3d: _propTypes["default"].bool
      }), _defineProperty(_class, "defaultProps", {
        axis: "y",
        itemRenderer: function itemRenderer(index, key) {
          return _react["default"].createElement("div", {
            key
          }, index);
        },
        itemsRenderer: function itemsRenderer(items, ref) {
          return _react["default"].createElement("div", {
            ref
          }, items);
        },
        length: 0,
        minSize: 1,
        pageSize: 10,
        scrollParentGetter: defaultScrollParentGetter,
        scrollParentViewportSizeGetter: defaultScrollParentViewportSizeGetter,
        threshold: 100,
        type: "simple",
        useStaticSize: false,
        useTranslate3d: false
      }), _temp);
    });
  }
});

// node_modules/shallow-equal/dist/index.esm.js
var index_esm_exports = {};
__export(index_esm_exports, {
  shallowEqualArrays: () => shallowEqualArrays,
  shallowEqualObjects: () => shallowEqualObjects
});
function shallowEqualObjects(objA, objB) {
  if (objA === objB) {
    return true;
  }
  if (!objA || !objB) {
    return false;
  }
  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);
  var len = aKeys.length;
  if (bKeys.length !== len) {
    return false;
  }
  for (var i = 0; i < len; i++) {
    var key = aKeys[i];
    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
      return false;
    }
  }
  return true;
}
function shallowEqualArrays(arrA, arrB) {
  if (arrA === arrB) {
    return true;
  }
  if (!arrA || !arrB) {
    return false;
  }
  var len = arrA.length;
  if (arrB.length !== len) {
    return false;
  }
  for (var i = 0; i < len; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }
  return true;
}
var init_index_esm = __esm({
  "node_modules/shallow-equal/dist/index.esm.js"() {
  }
});

// node_modules/react-date-range/dist/styles.js
var require_styles = __commonJS({
  "node_modules/react-date-range/dist/styles.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = {
      dateRangeWrapper: "rdrDateRangeWrapper",
      calendarWrapper: "rdrCalendarWrapper",
      dateDisplay: "rdrDateDisplay",
      dateDisplayItem: "rdrDateDisplayItem",
      dateDisplayItemActive: "rdrDateDisplayItemActive",
      monthAndYearWrapper: "rdrMonthAndYearWrapper",
      monthAndYearPickers: "rdrMonthAndYearPickers",
      nextPrevButton: "rdrNextPrevButton",
      month: "rdrMonth",
      weekDays: "rdrWeekDays",
      weekDay: "rdrWeekDay",
      days: "rdrDays",
      day: "rdrDay",
      dayNumber: "rdrDayNumber",
      dayPassive: "rdrDayPassive",
      dayToday: "rdrDayToday",
      dayStartOfWeek: "rdrDayStartOfWeek",
      dayEndOfWeek: "rdrDayEndOfWeek",
      daySelected: "rdrDaySelected",
      dayDisabled: "rdrDayDisabled",
      dayStartOfMonth: "rdrDayStartOfMonth",
      dayEndOfMonth: "rdrDayEndOfMonth",
      dayWeekend: "rdrDayWeekend",
      dayStartPreview: "rdrDayStartPreview",
      dayInPreview: "rdrDayInPreview",
      dayEndPreview: "rdrDayEndPreview",
      dayHovered: "rdrDayHovered",
      dayActive: "rdrDayActive",
      inRange: "rdrInRange",
      endEdge: "rdrEndEdge",
      startEdge: "rdrStartEdge",
      prevButton: "rdrPprevButton",
      nextButton: "rdrNextButton",
      selected: "rdrSelected",
      months: "rdrMonths",
      monthPicker: "rdrMonthPicker",
      yearPicker: "rdrYearPicker",
      dateDisplayWrapper: "rdrDateDisplayWrapper",
      definedRangesWrapper: "rdrDefinedRangesWrapper",
      staticRanges: "rdrStaticRanges",
      staticRange: "rdrStaticRange",
      inputRanges: "rdrInputRanges",
      inputRange: "rdrInputRange",
      inputRangeInput: "rdrInputRangeInput",
      dateRangePickerWrapper: "rdrDateRangePickerWrapper",
      staticRangeLabel: "rdrStaticRangeLabel",
      staticRangeSelected: "rdrStaticRangeSelected",
      monthName: "rdrMonthName",
      infiniteMonths: "rdrInfiniteMonths",
      monthsVertical: "rdrMonthsVertical",
      monthsHorizontal: "rdrMonthsHorizontal"
    };
    exports.default = _default;
  }
});

// node_modules/react-date-range/dist/accessibility/index.js
var require_accessibility = __commonJS({
  "node_modules/react-date-range/dist/accessibility/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ariaLabelsShape = void 0;
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var ariaLabelsShape = _propTypes.default.shape({
      dateInput: _propTypes.default.objectOf(_propTypes.default.shape({
        startDate: _propTypes.default.string,
        endDate: _propTypes.default.string
      })),
      monthPicker: _propTypes.default.string,
      yearPicker: _propTypes.default.string,
      prevButton: _propTypes.default.string,
      nextButton: _propTypes.default.string
    });
    exports.ariaLabelsShape = ariaLabelsShape;
  }
});

// node_modules/react-date-range/dist/components/Calendar/index.js
var require_Calendar = __commonJS({
  "node_modules/react-date-range/dist/components/Calendar/index.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _DayCell = require_DayCell();
    var _Month = _interopRequireDefault(require_Month());
    var _DateInput = _interopRequireDefault(require_DateInput());
    var _utils = require_utils();
    var _classnames3 = _interopRequireDefault(require_classnames());
    var _reactList = _interopRequireDefault(require_react_list());
    var _shallowEqual = (init_index_esm(), __toCommonJS(index_esm_exports));
    var _max = _interopRequireDefault((init_max(), __toCommonJS(max_exports)));
    var _min = _interopRequireDefault((init_min(), __toCommonJS(min_exports)));
    var _differenceInDays = _interopRequireDefault((init_differenceInDays(), __toCommonJS(differenceInDays_exports)));
    var _isSameMonth = _interopRequireDefault((init_isSameMonth(), __toCommonJS(isSameMonth_exports)));
    var _addDays = _interopRequireDefault((init_addDays(), __toCommonJS(addDays_exports)));
    var _endOfMonth = _interopRequireDefault((init_endOfMonth(), __toCommonJS(endOfMonth_exports)));
    var _startOfMonth = _interopRequireDefault((init_startOfMonth(), __toCommonJS(startOfMonth_exports)));
    var _differenceInCalendarMonths = _interopRequireDefault((init_differenceInCalendarMonths(), __toCommonJS(differenceInCalendarMonths_exports)));
    var _setMonth2 = _interopRequireDefault((init_setMonth(), __toCommonJS(setMonth_exports)));
    var _setYear2 = _interopRequireDefault((init_setYear(), __toCommonJS(setYear_exports)));
    var _addYears = _interopRequireDefault((init_addYears(), __toCommonJS(addYears_exports)));
    var _isSameDay = _interopRequireDefault((init_isSameDay(), __toCommonJS(isSameDay_exports)));
    var _endOfWeek = _interopRequireDefault((init_endOfWeek(), __toCommonJS(endOfWeek_exports)));
    var _startOfWeek = _interopRequireDefault((init_startOfWeek(), __toCommonJS(startOfWeek_exports)));
    var _eachDayOfInterval = _interopRequireDefault((init_eachDayOfInterval(), __toCommonJS(eachDayOfInterval_exports)));
    var _format = _interopRequireDefault((init_format(), __toCommonJS(format_exports)));
    var _subMonths = _interopRequireDefault((init_subMonths(), __toCommonJS(subMonths_exports)));
    var _addMonths = _interopRequireDefault((init_addMonths(), __toCommonJS(addMonths_exports)));
    var _enUS = _interopRequireDefault((init_en_US(), __toCommonJS(en_US_exports)));
    var _styles = _interopRequireDefault(require_styles());
    var _accessibility = require_accessibility();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var Calendar = function(_PureComponent) {
      _inherits(Calendar2, _PureComponent);
      var _super = _createSuper(Calendar2);
      function Calendar2(_props, context) {
        var _this;
        _classCallCheck(this, Calendar2);
        _this = _super.call(this, _props, context);
        _defineProperty(_assertThisInitialized(_this), "focusToDate", function(date) {
          var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _this.props;
          var preventUnnecessary = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
          if (!props.scroll.enabled) {
            if (preventUnnecessary && props.preventSnapRefocus) {
              var focusedDateDiff = (0, _differenceInCalendarMonths.default)(date, _this.state.focusedDate);
              var isAllowedForward = props.calendarFocus === "forwards" && focusedDateDiff >= 0;
              var isAllowedBackward = props.calendarFocus === "backwards" && focusedDateDiff <= 0;
              if ((isAllowedForward || isAllowedBackward) && Math.abs(focusedDateDiff) < props.months) {
                return;
              }
            }
            _this.setState({
              focusedDate: date
            });
            return;
          }
          var targetMonthIndex = (0, _differenceInCalendarMonths.default)(date, props.minDate, _this.dateOptions);
          var visibleMonths = _this.list.getVisibleRange();
          if (preventUnnecessary && visibleMonths.includes(targetMonthIndex))
            return;
          _this.isFirstRender = true;
          _this.list.scrollTo(targetMonthIndex);
          _this.setState({
            focusedDate: date
          });
        });
        _defineProperty(_assertThisInitialized(_this), "updateShownDate", function() {
          var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _this.props;
          var newProps = props.scroll.enabled ? _objectSpread(_objectSpread({}, props), {}, {
            months: _this.list.getVisibleRange().length
          }) : props;
          var newFocus = (0, _utils.calcFocusDate)(_this.state.focusedDate, newProps);
          _this.focusToDate(newFocus, newProps);
        });
        _defineProperty(_assertThisInitialized(_this), "updatePreview", function(val) {
          if (!val) {
            _this.setState({
              preview: null
            });
            return;
          }
          var preview = {
            startDate: val,
            endDate: val,
            color: _this.props.color
          };
          _this.setState({
            preview
          });
        });
        _defineProperty(_assertThisInitialized(_this), "changeShownDate", function(value) {
          var mode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "set";
          var focusedDate = _this.state.focusedDate;
          var _this$props = _this.props, onShownDateChange = _this$props.onShownDateChange, minDate = _this$props.minDate, maxDate = _this$props.maxDate;
          var modeMapper = {
            monthOffset: function monthOffset() {
              return (0, _addMonths.default)(focusedDate, value);
            },
            setMonth: function(_setMonth) {
              function setMonth() {
                return _setMonth.apply(this, arguments);
              }
              setMonth.toString = function() {
                return _setMonth.toString();
              };
              return setMonth;
            }(function() {
              return (0, _setMonth2.default)(focusedDate, value);
            }),
            setYear: function(_setYear) {
              function setYear() {
                return _setYear.apply(this, arguments);
              }
              setYear.toString = function() {
                return _setYear.toString();
              };
              return setYear;
            }(function() {
              return (0, _setYear2.default)(focusedDate, value);
            }),
            set: function set() {
              return value;
            }
          };
          var newDate = (0, _min.default)([(0, _max.default)([modeMapper[mode](), minDate]), maxDate]);
          _this.focusToDate(newDate, _this.props, false);
          onShownDateChange && onShownDateChange(newDate);
        });
        _defineProperty(_assertThisInitialized(_this), "handleRangeFocusChange", function(rangesIndex, rangeItemIndex) {
          _this.props.onRangeFocusChange && _this.props.onRangeFocusChange([rangesIndex, rangeItemIndex]);
        });
        _defineProperty(_assertThisInitialized(_this), "handleScroll", function() {
          var _this$props2 = _this.props, onShownDateChange = _this$props2.onShownDateChange, minDate = _this$props2.minDate;
          var focusedDate = _this.state.focusedDate;
          var _assertThisInitialize = _assertThisInitialized(_this), isFirstRender = _assertThisInitialize.isFirstRender;
          var visibleMonths = _this.list.getVisibleRange();
          if (visibleMonths[0] === void 0)
            return;
          var visibleMonth = (0, _addMonths.default)(minDate, visibleMonths[0] || 0);
          var isFocusedToDifferent = !(0, _isSameMonth.default)(visibleMonth, focusedDate);
          if (isFocusedToDifferent && !isFirstRender) {
            _this.setState({
              focusedDate: visibleMonth
            });
            onShownDateChange && onShownDateChange(visibleMonth);
          }
          _this.isFirstRender = false;
        });
        _defineProperty(_assertThisInitialized(_this), "renderMonthAndYear", function(focusedDate, changeShownDate, props) {
          var showMonthArrow = props.showMonthArrow, minDate = props.minDate, maxDate = props.maxDate, showMonthAndYearPickers = props.showMonthAndYearPickers, ariaLabels = props.ariaLabels;
          var upperYearLimit = (maxDate || Calendar2.defaultProps.maxDate).getFullYear();
          var lowerYearLimit = (minDate || Calendar2.defaultProps.minDate).getFullYear();
          var styles = _this.styles;
          return _react.default.createElement("div", {
            onMouseUp: function onMouseUp(e) {
              return e.stopPropagation();
            },
            className: styles.monthAndYearWrapper
          }, showMonthArrow ? _react.default.createElement("button", {
            type: "button",
            className: (0, _classnames3.default)(styles.nextPrevButton, styles.prevButton),
            onClick: function onClick() {
              return changeShownDate(-1, "monthOffset");
            },
            "aria-label": ariaLabels.prevButton
          }, _react.default.createElement("i", null)) : null, showMonthAndYearPickers ? _react.default.createElement("span", {
            className: styles.monthAndYearPickers
          }, _react.default.createElement("span", {
            className: styles.monthPicker
          }, _react.default.createElement("select", {
            value: focusedDate.getMonth(),
            onChange: function onChange(e) {
              return changeShownDate(e.target.value, "setMonth");
            },
            "aria-label": ariaLabels.monthPicker
          }, _this.state.monthNames.map(function(monthName, i) {
            return _react.default.createElement("option", {
              key: i,
              value: i
            }, monthName);
          }))), _react.default.createElement("span", {
            className: styles.monthAndYearDivider
          }), _react.default.createElement("span", {
            className: styles.yearPicker
          }, _react.default.createElement("select", {
            value: focusedDate.getFullYear(),
            onChange: function onChange(e) {
              return changeShownDate(e.target.value, "setYear");
            },
            "aria-label": ariaLabels.yearPicker
          }, new Array(upperYearLimit - lowerYearLimit + 1).fill(upperYearLimit).map(function(val, i) {
            var year = val - i;
            return _react.default.createElement("option", {
              key: year,
              value: year
            }, year);
          })))) : _react.default.createElement("span", {
            className: styles.monthAndYearPickers
          }, _this.state.monthNames[focusedDate.getMonth()], " ", focusedDate.getFullYear()), showMonthArrow ? _react.default.createElement("button", {
            type: "button",
            className: (0, _classnames3.default)(styles.nextPrevButton, styles.nextButton),
            onClick: function onClick() {
              return changeShownDate(1, "monthOffset");
            },
            "aria-label": ariaLabels.nextButton
          }, _react.default.createElement("i", null)) : null);
        });
        _defineProperty(_assertThisInitialized(_this), "renderDateDisplay", function() {
          var _this$props3 = _this.props, focusedRange = _this$props3.focusedRange, color = _this$props3.color, ranges = _this$props3.ranges, rangeColors = _this$props3.rangeColors, dateDisplayFormat = _this$props3.dateDisplayFormat, editableDateInputs = _this$props3.editableDateInputs, startDatePlaceholder = _this$props3.startDatePlaceholder, endDatePlaceholder = _this$props3.endDatePlaceholder, ariaLabels = _this$props3.ariaLabels;
          var defaultColor = rangeColors[focusedRange[0]] || color;
          var styles = _this.styles;
          return _react.default.createElement("div", {
            className: styles.dateDisplayWrapper
          }, ranges.map(function(range, i) {
            if (range.showDateDisplay === false || range.disabled && !range.showDateDisplay)
              return null;
            return _react.default.createElement("div", {
              className: styles.dateDisplay,
              key: i,
              style: {
                color: range.color || defaultColor
              }
            }, _react.default.createElement(_DateInput.default, {
              className: (0, _classnames3.default)(styles.dateDisplayItem, _defineProperty({}, styles.dateDisplayItemActive, focusedRange[0] === i && focusedRange[1] === 0)),
              readOnly: !editableDateInputs,
              disabled: range.disabled,
              value: range.startDate,
              placeholder: startDatePlaceholder,
              dateOptions: _this.dateOptions,
              dateDisplayFormat,
              ariaLabel: ariaLabels.dateInput && ariaLabels.dateInput[range.key] && ariaLabels.dateInput[range.key].startDate,
              onChange: _this.onDragSelectionEnd,
              onFocus: function onFocus() {
                return _this.handleRangeFocusChange(i, 0);
              }
            }), _react.default.createElement(_DateInput.default, {
              className: (0, _classnames3.default)(styles.dateDisplayItem, _defineProperty({}, styles.dateDisplayItemActive, focusedRange[0] === i && focusedRange[1] === 1)),
              readOnly: !editableDateInputs,
              disabled: range.disabled,
              value: range.endDate,
              placeholder: endDatePlaceholder,
              dateOptions: _this.dateOptions,
              dateDisplayFormat,
              ariaLabel: ariaLabels.dateInput && ariaLabels.dateInput[range.key] && ariaLabels.dateInput[range.key].endDate,
              onChange: _this.onDragSelectionEnd,
              onFocus: function onFocus() {
                return _this.handleRangeFocusChange(i, 1);
              }
            }));
          }));
        });
        _defineProperty(_assertThisInitialized(_this), "onDragSelectionStart", function(date) {
          var _this$props4 = _this.props, onChange = _this$props4.onChange, dragSelectionEnabled = _this$props4.dragSelectionEnabled;
          if (dragSelectionEnabled) {
            _this.setState({
              drag: {
                status: true,
                range: {
                  startDate: date,
                  endDate: date
                },
                disablePreview: true
              }
            });
          } else {
            onChange && onChange(date);
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onDragSelectionEnd", function(date) {
          var _this$props5 = _this.props, updateRange = _this$props5.updateRange, displayMode = _this$props5.displayMode, onChange = _this$props5.onChange, dragSelectionEnabled = _this$props5.dragSelectionEnabled;
          if (!dragSelectionEnabled)
            return;
          if (displayMode === "date" || !_this.state.drag.status) {
            onChange && onChange(date);
            return;
          }
          var newRange = {
            startDate: _this.state.drag.range.startDate,
            endDate: date
          };
          if (displayMode !== "dateRange" || (0, _isSameDay.default)(newRange.startDate, date)) {
            _this.setState({
              drag: {
                status: false,
                range: {}
              }
            }, function() {
              return onChange && onChange(date);
            });
          } else {
            _this.setState({
              drag: {
                status: false,
                range: {}
              }
            }, function() {
              updateRange && updateRange(newRange);
            });
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onDragSelectionMove", function(date) {
          var drag = _this.state.drag;
          if (!drag.status || !_this.props.dragSelectionEnabled)
            return;
          _this.setState({
            drag: {
              status: drag.status,
              range: {
                startDate: drag.range.startDate,
                endDate: date
              },
              disablePreview: true
            }
          });
        });
        _defineProperty(_assertThisInitialized(_this), "estimateMonthSize", function(index, cache) {
          var _this$props6 = _this.props, direction = _this$props6.direction, minDate = _this$props6.minDate;
          var scrollArea = _this.state.scrollArea;
          if (cache) {
            _this.listSizeCache = cache;
            if (cache[index])
              return cache[index];
          }
          if (direction === "horizontal")
            return scrollArea.monthWidth;
          var monthStep = (0, _addMonths.default)(minDate, index);
          var _getMonthDisplayRange = (0, _utils.getMonthDisplayRange)(monthStep, _this.dateOptions), start = _getMonthDisplayRange.start, end = _getMonthDisplayRange.end;
          var isLongMonth = (0, _differenceInDays.default)(end, start, _this.dateOptions) + 1 > 7 * 5;
          return isLongMonth ? scrollArea.longMonthHeight : scrollArea.monthHeight;
        });
        _this.dateOptions = {
          locale: _props.locale
        };
        if (_props.weekStartsOn !== void 0)
          _this.dateOptions.weekStartsOn = _props.weekStartsOn;
        _this.styles = (0, _utils.generateStyles)([_styles.default, _props.classNames]);
        _this.listSizeCache = {};
        _this.isFirstRender = true;
        _this.state = {
          monthNames: _this.getMonthNames(),
          focusedDate: (0, _utils.calcFocusDate)(null, _props),
          drag: {
            status: false,
            range: {
              startDate: null,
              endDate: null
            },
            disablePreview: false
          },
          scrollArea: _this.calcScrollArea(_props)
        };
        return _this;
      }
      _createClass(Calendar2, [{
        key: "getMonthNames",
        value: function getMonthNames() {
          var _this2 = this;
          return _toConsumableArray(Array(12).keys()).map(function(i) {
            return _this2.props.locale.localize.month(i);
          });
        }
      }, {
        key: "calcScrollArea",
        value: function calcScrollArea(props) {
          var direction = props.direction, months = props.months, scroll = props.scroll;
          if (!scroll.enabled)
            return {
              enabled: false
            };
          var longMonthHeight = scroll.longMonthHeight || scroll.monthHeight;
          if (direction === "vertical") {
            return {
              enabled: true,
              monthHeight: scroll.monthHeight || 220,
              longMonthHeight: longMonthHeight || 260,
              calendarWidth: "auto",
              calendarHeight: (scroll.calendarHeight || longMonthHeight || 240) * months
            };
          }
          return {
            enabled: true,
            monthWidth: scroll.monthWidth || 332,
            calendarWidth: (scroll.calendarWidth || scroll.monthWidth || 332) * months,
            monthHeight: longMonthHeight || 300,
            calendarHeight: longMonthHeight || 300
          };
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this3 = this;
          if (this.props.scroll.enabled) {
            setTimeout(function() {
              return _this3.focusToDate(_this3.state.focusedDate);
            });
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          var propMapper = {
            dateRange: "ranges",
            date: "date"
          };
          var targetProp = propMapper[this.props.displayMode];
          if (this.props[targetProp] !== prevProps[targetProp]) {
            this.updateShownDate(this.props);
          }
          if (prevProps.locale !== this.props.locale || prevProps.weekStartsOn !== this.props.weekStartsOn) {
            this.dateOptions = {
              locale: this.props.locale
            };
            if (this.props.weekStartsOn !== void 0)
              this.dateOptions.weekStartsOn = this.props.weekStartsOn;
            this.setState({
              monthNames: this.getMonthNames()
            });
          }
          if (!(0, _shallowEqual.shallowEqualObjects)(prevProps.scroll, this.props.scroll)) {
            this.setState({
              scrollArea: this.calcScrollArea(this.props)
            });
          }
        }
      }, {
        key: "renderWeekdays",
        value: function renderWeekdays() {
          var _this4 = this;
          var now = /* @__PURE__ */ new Date();
          return _react.default.createElement("div", {
            className: this.styles.weekDays
          }, (0, _eachDayOfInterval.default)({
            start: (0, _startOfWeek.default)(now, this.dateOptions),
            end: (0, _endOfWeek.default)(now, this.dateOptions)
          }).map(function(day, i) {
            return _react.default.createElement("span", {
              className: _this4.styles.weekDay,
              key: i
            }, (0, _format.default)(day, _this4.props.weekdayDisplayFormat, _this4.dateOptions));
          }));
        }
      }, {
        key: "render",
        value: function render() {
          var _this5 = this;
          var _this$props7 = this.props, showDateDisplay = _this$props7.showDateDisplay, onPreviewChange = _this$props7.onPreviewChange, scroll = _this$props7.scroll, direction = _this$props7.direction, disabledDates = _this$props7.disabledDates, disabledDay = _this$props7.disabledDay, maxDate = _this$props7.maxDate, minDate = _this$props7.minDate, rangeColors = _this$props7.rangeColors, color = _this$props7.color, navigatorRenderer = _this$props7.navigatorRenderer, className = _this$props7.className, preview = _this$props7.preview;
          var _this$state = this.state, scrollArea = _this$state.scrollArea, focusedDate = _this$state.focusedDate;
          var isVertical = direction === "vertical";
          var monthAndYearRenderer = navigatorRenderer || this.renderMonthAndYear;
          var ranges = this.props.ranges.map(function(range, i) {
            return _objectSpread(_objectSpread({}, range), {}, {
              color: range.color || rangeColors[i] || color
            });
          });
          return _react.default.createElement("div", {
            className: (0, _classnames3.default)(this.styles.calendarWrapper, className),
            onMouseUp: function onMouseUp() {
              return _this5.setState({
                drag: {
                  status: false,
                  range: {}
                }
              });
            },
            onMouseLeave: function onMouseLeave() {
              _this5.setState({
                drag: {
                  status: false,
                  range: {}
                }
              });
            }
          }, showDateDisplay && this.renderDateDisplay(), monthAndYearRenderer(focusedDate, this.changeShownDate, this.props), scroll.enabled ? _react.default.createElement("div", null, isVertical && this.renderWeekdays(this.dateOptions), _react.default.createElement("div", {
            className: (0, _classnames3.default)(this.styles.infiniteMonths, isVertical ? this.styles.monthsVertical : this.styles.monthsHorizontal),
            onMouseLeave: function onMouseLeave() {
              return onPreviewChange && onPreviewChange();
            },
            style: {
              width: scrollArea.calendarWidth + 11,
              height: scrollArea.calendarHeight + 11
            },
            onScroll: this.handleScroll
          }, _react.default.createElement(_reactList.default, {
            length: (0, _differenceInCalendarMonths.default)((0, _endOfMonth.default)(maxDate), (0, _addDays.default)((0, _startOfMonth.default)(minDate), -1), this.dateOptions),
            treshold: 500,
            type: "variable",
            ref: function ref(target) {
              return _this5.list = target;
            },
            itemSizeEstimator: this.estimateMonthSize,
            axis: isVertical ? "y" : "x",
            itemRenderer: function itemRenderer(index, key) {
              var monthStep = (0, _addMonths.default)(minDate, index);
              return _react.default.createElement(_Month.default, _extends({}, _this5.props, {
                onPreviewChange: onPreviewChange || _this5.updatePreview,
                preview: preview || _this5.state.preview,
                ranges,
                key,
                drag: _this5.state.drag,
                dateOptions: _this5.dateOptions,
                disabledDates,
                disabledDay,
                month: monthStep,
                onDragSelectionStart: _this5.onDragSelectionStart,
                onDragSelectionEnd: _this5.onDragSelectionEnd,
                onDragSelectionMove: _this5.onDragSelectionMove,
                onMouseLeave: function onMouseLeave() {
                  return onPreviewChange && onPreviewChange();
                },
                styles: _this5.styles,
                style: isVertical ? {
                  height: _this5.estimateMonthSize(index)
                } : {
                  height: scrollArea.monthHeight,
                  width: _this5.estimateMonthSize(index)
                },
                showMonthName: true,
                showWeekDays: !isVertical
              }));
            }
          }))) : _react.default.createElement("div", {
            className: (0, _classnames3.default)(this.styles.months, isVertical ? this.styles.monthsVertical : this.styles.monthsHorizontal)
          }, new Array(this.props.months).fill(null).map(function(_, i) {
            var monthStep = (0, _addMonths.default)(_this5.state.focusedDate, i);
            ;
            if (_this5.props.calendarFocus === "backwards") {
              monthStep = (0, _subMonths.default)(_this5.state.focusedDate, _this5.props.months - 1 - i);
            }
            return _react.default.createElement(_Month.default, _extends({}, _this5.props, {
              onPreviewChange: onPreviewChange || _this5.updatePreview,
              preview: preview || _this5.state.preview,
              ranges,
              key: i,
              drag: _this5.state.drag,
              dateOptions: _this5.dateOptions,
              disabledDates,
              disabledDay,
              month: monthStep,
              onDragSelectionStart: _this5.onDragSelectionStart,
              onDragSelectionEnd: _this5.onDragSelectionEnd,
              onDragSelectionMove: _this5.onDragSelectionMove,
              onMouseLeave: function onMouseLeave() {
                return onPreviewChange && onPreviewChange();
              },
              styles: _this5.styles,
              showWeekDays: !isVertical || i === 0,
              showMonthName: !isVertical || i > 0
            }));
          })));
        }
      }]);
      return Calendar2;
    }(_react.PureComponent);
    Calendar.defaultProps = {
      showMonthArrow: true,
      showMonthAndYearPickers: true,
      disabledDates: [],
      disabledDay: function disabledDay() {
      },
      classNames: {},
      locale: _enUS.default,
      ranges: [],
      focusedRange: [0, 0],
      dateDisplayFormat: "MMM d, yyyy",
      monthDisplayFormat: "MMM yyyy",
      weekdayDisplayFormat: "E",
      dayDisplayFormat: "d",
      showDateDisplay: true,
      showPreview: true,
      displayMode: "date",
      months: 1,
      color: "#3d91ff",
      scroll: {
        enabled: false
      },
      direction: "vertical",
      maxDate: (0, _addYears.default)(/* @__PURE__ */ new Date(), 20),
      minDate: (0, _addYears.default)(/* @__PURE__ */ new Date(), -100),
      rangeColors: ["#3d91ff", "#3ecf8e", "#fed14c"],
      startDatePlaceholder: "Early",
      endDatePlaceholder: "Continuous",
      editableDateInputs: false,
      dragSelectionEnabled: true,
      fixedHeight: false,
      calendarFocus: "forwards",
      preventSnapRefocus: false,
      ariaLabels: {}
    };
    Calendar.propTypes = {
      showMonthArrow: _propTypes.default.bool,
      showMonthAndYearPickers: _propTypes.default.bool,
      disabledDates: _propTypes.default.array,
      disabledDay: _propTypes.default.func,
      minDate: _propTypes.default.object,
      maxDate: _propTypes.default.object,
      date: _propTypes.default.object,
      onChange: _propTypes.default.func,
      onPreviewChange: _propTypes.default.func,
      onRangeFocusChange: _propTypes.default.func,
      classNames: _propTypes.default.object,
      locale: _propTypes.default.object,
      shownDate: _propTypes.default.object,
      onShownDateChange: _propTypes.default.func,
      ranges: _propTypes.default.arrayOf(_DayCell.rangeShape),
      preview: _propTypes.default.shape({
        startDate: _propTypes.default.object,
        endDate: _propTypes.default.object,
        color: _propTypes.default.string
      }),
      dateDisplayFormat: _propTypes.default.string,
      monthDisplayFormat: _propTypes.default.string,
      weekdayDisplayFormat: _propTypes.default.string,
      weekStartsOn: _propTypes.default.number,
      dayDisplayFormat: _propTypes.default.string,
      focusedRange: _propTypes.default.arrayOf(_propTypes.default.number),
      initialFocusedRange: _propTypes.default.arrayOf(_propTypes.default.number),
      months: _propTypes.default.number,
      className: _propTypes.default.string,
      showDateDisplay: _propTypes.default.bool,
      showPreview: _propTypes.default.bool,
      displayMode: _propTypes.default.oneOf(["dateRange", "date"]),
      color: _propTypes.default.string,
      updateRange: _propTypes.default.func,
      scroll: _propTypes.default.shape({
        enabled: _propTypes.default.bool,
        monthHeight: _propTypes.default.number,
        longMonthHeight: _propTypes.default.number,
        monthWidth: _propTypes.default.number,
        calendarWidth: _propTypes.default.number,
        calendarHeight: _propTypes.default.number
      }),
      direction: _propTypes.default.oneOf(["vertical", "horizontal"]),
      startDatePlaceholder: _propTypes.default.string,
      endDatePlaceholder: _propTypes.default.string,
      navigatorRenderer: _propTypes.default.func,
      rangeColors: _propTypes.default.arrayOf(_propTypes.default.string),
      editableDateInputs: _propTypes.default.bool,
      dragSelectionEnabled: _propTypes.default.bool,
      fixedHeight: _propTypes.default.bool,
      calendarFocus: _propTypes.default.string,
      preventSnapRefocus: _propTypes.default.bool,
      ariaLabels: _accessibility.ariaLabelsShape
    };
    var _default = Calendar;
    exports.default = _default;
  }
});

// node_modules/react-date-range/dist/components/DateRange/index.js
var require_DateRange = __commonJS({
  "node_modules/react-date-range/dist/components/DateRange/index.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _Calendar = _interopRequireDefault(require_Calendar());
    var _DayCell = require_DayCell();
    var _utils = require_utils();
    var _max = _interopRequireDefault((init_max(), __toCommonJS(max_exports)));
    var _isWithinInterval = _interopRequireDefault((init_isWithinInterval(), __toCommonJS(isWithinInterval_exports)));
    var _min = _interopRequireDefault((init_min(), __toCommonJS(min_exports)));
    var _addDays = _interopRequireDefault((init_addDays(), __toCommonJS(addDays_exports)));
    var _differenceInCalendarDays = _interopRequireDefault((init_differenceInCalendarDays(), __toCommonJS(differenceInCalendarDays_exports)));
    var _isBefore = _interopRequireDefault((init_isBefore(), __toCommonJS(isBefore_exports)));
    var _classnames = _interopRequireDefault(require_classnames());
    var _styles = _interopRequireDefault(require_styles());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var DateRange = function(_Component) {
      _inherits(DateRange2, _Component);
      var _super = _createSuper(DateRange2);
      function DateRange2(props, context) {
        var _this;
        _classCallCheck(this, DateRange2);
        _this = _super.call(this, props, context);
        _defineProperty(_assertThisInitialized(_this), "calcNewSelection", function(value) {
          var isSingleValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
          var focusedRange = _this.props.focusedRange || _this.state.focusedRange;
          var _this$props = _this.props, ranges = _this$props.ranges, onChange = _this$props.onChange, maxDate = _this$props.maxDate, moveRangeOnFirstSelection = _this$props.moveRangeOnFirstSelection, retainEndDateOnFirstSelection = _this$props.retainEndDateOnFirstSelection, disabledDates = _this$props.disabledDates;
          var focusedRangeIndex = focusedRange[0];
          var selectedRange = ranges[focusedRangeIndex];
          if (!selectedRange || !onChange)
            return {};
          var startDate = selectedRange.startDate, endDate = selectedRange.endDate;
          var now = /* @__PURE__ */ new Date();
          var nextFocusRange;
          if (!isSingleValue) {
            startDate = value.startDate;
            endDate = value.endDate;
          } else if (focusedRange[1] === 0) {
            var dayOffset = (0, _differenceInCalendarDays.default)(endDate || now, startDate);
            var calculateEndDate = function calculateEndDate2() {
              if (moveRangeOnFirstSelection) {
                return (0, _addDays.default)(value, dayOffset);
              }
              if (retainEndDateOnFirstSelection) {
                if (!endDate || (0, _isBefore.default)(value, endDate)) {
                  return endDate;
                }
                return value;
              }
              return value || now;
            };
            startDate = value;
            endDate = calculateEndDate();
            if (maxDate)
              endDate = (0, _min.default)([endDate, maxDate]);
            nextFocusRange = [focusedRange[0], 1];
          } else {
            endDate = value;
          }
          var isStartDateSelected = focusedRange[1] === 0;
          if ((0, _isBefore.default)(endDate, startDate)) {
            isStartDateSelected = !isStartDateSelected;
            var _ref = [endDate, startDate];
            startDate = _ref[0];
            endDate = _ref[1];
          }
          var inValidDatesWithinRange = disabledDates.filter(function(disabledDate) {
            return (0, _isWithinInterval.default)(disabledDate, {
              start: startDate,
              end: endDate
            });
          });
          if (inValidDatesWithinRange.length > 0) {
            if (isStartDateSelected) {
              startDate = (0, _addDays.default)((0, _max.default)(inValidDatesWithinRange), 1);
            } else {
              endDate = (0, _addDays.default)((0, _min.default)(inValidDatesWithinRange), -1);
            }
          }
          if (!nextFocusRange) {
            var nextFocusRangeIndex = (0, _utils.findNextRangeIndex)(_this.props.ranges, focusedRange[0]);
            nextFocusRange = [nextFocusRangeIndex, 0];
          }
          return {
            wasValid: !(inValidDatesWithinRange.length > 0),
            range: {
              startDate,
              endDate
            },
            nextFocusRange
          };
        });
        _defineProperty(_assertThisInitialized(_this), "setSelection", function(value, isSingleValue) {
          var _this$props2 = _this.props, onChange = _this$props2.onChange, ranges = _this$props2.ranges, onRangeFocusChange = _this$props2.onRangeFocusChange;
          var focusedRange = _this.props.focusedRange || _this.state.focusedRange;
          var focusedRangeIndex = focusedRange[0];
          var selectedRange = ranges[focusedRangeIndex];
          if (!selectedRange)
            return;
          var newSelection = _this.calcNewSelection(value, isSingleValue);
          onChange(_defineProperty({}, selectedRange.key || "range".concat(focusedRangeIndex + 1), _objectSpread(_objectSpread({}, selectedRange), newSelection.range)));
          _this.setState({
            focusedRange: newSelection.nextFocusRange,
            preview: null
          });
          onRangeFocusChange && onRangeFocusChange(newSelection.nextFocusRange);
        });
        _defineProperty(_assertThisInitialized(_this), "handleRangeFocusChange", function(focusedRange) {
          _this.setState({
            focusedRange
          });
          _this.props.onRangeFocusChange && _this.props.onRangeFocusChange(focusedRange);
        });
        _defineProperty(_assertThisInitialized(_this), "updatePreview", function(val) {
          var _ranges$focusedRange$;
          if (!val) {
            _this.setState({
              preview: null
            });
            return;
          }
          var _this$props3 = _this.props, rangeColors = _this$props3.rangeColors, ranges = _this$props3.ranges;
          var focusedRange = _this.props.focusedRange || _this.state.focusedRange;
          var color = ((_ranges$focusedRange$ = ranges[focusedRange[0]]) === null || _ranges$focusedRange$ === void 0 ? void 0 : _ranges$focusedRange$.color) || rangeColors[focusedRange[0]] || color;
          _this.setState({
            preview: _objectSpread(_objectSpread({}, val.range), {}, {
              color
            })
          });
        });
        _this.state = {
          focusedRange: props.initialFocusedRange || [(0, _utils.findNextRangeIndex)(props.ranges), 0],
          preview: null
        };
        _this.styles = (0, _utils.generateStyles)([_styles.default, props.classNames]);
        return _this;
      }
      _createClass(DateRange2, [{
        key: "render",
        value: function render() {
          var _this2 = this;
          return _react.default.createElement(_Calendar.default, _extends({
            focusedRange: this.state.focusedRange,
            onRangeFocusChange: this.handleRangeFocusChange,
            preview: this.state.preview,
            onPreviewChange: function onPreviewChange(value) {
              _this2.updatePreview(value ? _this2.calcNewSelection(value) : null);
            }
          }, this.props, {
            displayMode: "dateRange",
            className: (0, _classnames.default)(this.styles.dateRangeWrapper, this.props.className),
            onChange: this.setSelection,
            updateRange: function updateRange(val) {
              return _this2.setSelection(val, false);
            },
            ref: function ref(target) {
              _this2.calendar = target;
            }
          }));
        }
      }]);
      return DateRange2;
    }(_react.Component);
    DateRange.defaultProps = {
      classNames: {},
      ranges: [],
      moveRangeOnFirstSelection: false,
      retainEndDateOnFirstSelection: false,
      rangeColors: ["#3d91ff", "#3ecf8e", "#fed14c"],
      disabledDates: []
    };
    DateRange.propTypes = _objectSpread(_objectSpread({}, _Calendar.default.propTypes), {}, {
      onChange: _propTypes.default.func,
      onRangeFocusChange: _propTypes.default.func,
      className: _propTypes.default.string,
      ranges: _propTypes.default.arrayOf(_DayCell.rangeShape),
      moveRangeOnFirstSelection: _propTypes.default.bool,
      retainEndDateOnFirstSelection: _propTypes.default.bool
    });
    var _default = DateRange;
    exports.default = _default;
  }
});

// node_modules/react-date-range/dist/defaultRanges.js
var require_defaultRanges = __commonJS({
  "node_modules/react-date-range/dist/defaultRanges.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.createStaticRanges = createStaticRanges;
    exports.defaultInputRanges = exports.defaultStaticRanges = void 0;
    var _differenceInCalendarDays = _interopRequireDefault((init_differenceInCalendarDays(), __toCommonJS(differenceInCalendarDays_exports)));
    var _isSameDay = _interopRequireDefault((init_isSameDay(), __toCommonJS(isSameDay_exports)));
    var _endOfWeek = _interopRequireDefault((init_endOfWeek(), __toCommonJS(endOfWeek_exports)));
    var _startOfWeek = _interopRequireDefault((init_startOfWeek(), __toCommonJS(startOfWeek_exports)));
    var _addMonths = _interopRequireDefault((init_addMonths(), __toCommonJS(addMonths_exports)));
    var _endOfMonth = _interopRequireDefault((init_endOfMonth(), __toCommonJS(endOfMonth_exports)));
    var _startOfMonth = _interopRequireDefault((init_startOfMonth(), __toCommonJS(startOfMonth_exports)));
    var _startOfDay = _interopRequireDefault((init_startOfDay(), __toCommonJS(startOfDay_exports)));
    var _endOfDay = _interopRequireDefault((init_endOfDay(), __toCommonJS(endOfDay_exports)));
    var _addDays = _interopRequireDefault((init_addDays(), __toCommonJS(addDays_exports)));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var defineds = {
      startOfWeek: (0, _startOfWeek.default)(/* @__PURE__ */ new Date()),
      endOfWeek: (0, _endOfWeek.default)(/* @__PURE__ */ new Date()),
      startOfLastWeek: (0, _startOfWeek.default)((0, _addDays.default)(/* @__PURE__ */ new Date(), -7)),
      endOfLastWeek: (0, _endOfWeek.default)((0, _addDays.default)(/* @__PURE__ */ new Date(), -7)),
      startOfToday: (0, _startOfDay.default)(/* @__PURE__ */ new Date()),
      endOfToday: (0, _endOfDay.default)(/* @__PURE__ */ new Date()),
      startOfYesterday: (0, _startOfDay.default)((0, _addDays.default)(/* @__PURE__ */ new Date(), -1)),
      endOfYesterday: (0, _endOfDay.default)((0, _addDays.default)(/* @__PURE__ */ new Date(), -1)),
      startOfMonth: (0, _startOfMonth.default)(/* @__PURE__ */ new Date()),
      endOfMonth: (0, _endOfMonth.default)(/* @__PURE__ */ new Date()),
      startOfLastMonth: (0, _startOfMonth.default)((0, _addMonths.default)(/* @__PURE__ */ new Date(), -1)),
      endOfLastMonth: (0, _endOfMonth.default)((0, _addMonths.default)(/* @__PURE__ */ new Date(), -1))
    };
    var staticRangeHandler = {
      range: {},
      isSelected: function isSelected(range) {
        var definedRange = this.range();
        return (0, _isSameDay.default)(range.startDate, definedRange.startDate) && (0, _isSameDay.default)(range.endDate, definedRange.endDate);
      }
    };
    function createStaticRanges(ranges) {
      return ranges.map(function(range) {
        return _objectSpread(_objectSpread({}, staticRangeHandler), range);
      });
    }
    var defaultStaticRanges = createStaticRanges([{
      label: "Today",
      range: function range() {
        return {
          startDate: defineds.startOfToday,
          endDate: defineds.endOfToday
        };
      }
    }, {
      label: "Yesterday",
      range: function range() {
        return {
          startDate: defineds.startOfYesterday,
          endDate: defineds.endOfYesterday
        };
      }
    }, {
      label: "This Week",
      range: function range() {
        return {
          startDate: defineds.startOfWeek,
          endDate: defineds.endOfWeek
        };
      }
    }, {
      label: "Last Week",
      range: function range() {
        return {
          startDate: defineds.startOfLastWeek,
          endDate: defineds.endOfLastWeek
        };
      }
    }, {
      label: "This Month",
      range: function range() {
        return {
          startDate: defineds.startOfMonth,
          endDate: defineds.endOfMonth
        };
      }
    }, {
      label: "Last Month",
      range: function range() {
        return {
          startDate: defineds.startOfLastMonth,
          endDate: defineds.endOfLastMonth
        };
      }
    }]);
    exports.defaultStaticRanges = defaultStaticRanges;
    var defaultInputRanges = [{
      label: "days up to today",
      range: function range(value) {
        return {
          startDate: (0, _addDays.default)(defineds.startOfToday, (Math.max(Number(value), 1) - 1) * -1),
          endDate: defineds.endOfToday
        };
      },
      getCurrentValue: function getCurrentValue(range) {
        if (!(0, _isSameDay.default)(range.endDate, defineds.endOfToday))
          return "-";
        if (!range.startDate)
          return "∞";
        return (0, _differenceInCalendarDays.default)(defineds.endOfToday, range.startDate) + 1;
      }
    }, {
      label: "days starting today",
      range: function range(value) {
        var today = /* @__PURE__ */ new Date();
        return {
          startDate: today,
          endDate: (0, _addDays.default)(today, Math.max(Number(value), 1) - 1)
        };
      },
      getCurrentValue: function getCurrentValue(range) {
        if (!(0, _isSameDay.default)(range.startDate, defineds.startOfToday))
          return "-";
        if (!range.endDate)
          return "∞";
        return (0, _differenceInCalendarDays.default)(range.endDate, defineds.startOfToday) + 1;
      }
    }];
    exports.defaultInputRanges = defaultInputRanges;
  }
});

// node_modules/react-date-range/dist/components/InputRangeField/index.js
var require_InputRangeField = __commonJS({
  "node_modules/react-date-range/dist/components/InputRangeField/index.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var MIN = 0;
    var MAX = 99999;
    var InputRangeField = function(_Component) {
      _inherits(InputRangeField2, _Component);
      var _super = _createSuper(InputRangeField2);
      function InputRangeField2(props, context) {
        var _this;
        _classCallCheck(this, InputRangeField2);
        _this = _super.call(this, props, context);
        _defineProperty(_assertThisInitialized(_this), "onChange", function(e) {
          var onChange = _this.props.onChange;
          var value = parseInt(e.target.value, 10);
          value = isNaN(value) ? 0 : Math.max(Math.min(MAX, value), MIN);
          onChange(value);
        });
        return _this;
      }
      _createClass(InputRangeField2, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
          var _this$props = this.props, value = _this$props.value, label = _this$props.label, placeholder = _this$props.placeholder;
          return value !== nextProps.value || label !== nextProps.label || placeholder !== nextProps.placeholder;
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props, label = _this$props2.label, placeholder = _this$props2.placeholder, value = _this$props2.value, styles = _this$props2.styles, onBlur = _this$props2.onBlur, onFocus = _this$props2.onFocus;
          return _react.default.createElement("div", {
            className: styles.inputRange
          }, _react.default.createElement("input", {
            className: styles.inputRangeInput,
            placeholder,
            value,
            min: MIN,
            max: MAX,
            onChange: this.onChange,
            onFocus,
            onBlur
          }), _react.default.createElement("span", {
            className: styles.inputRangeLabel
          }, label));
        }
      }]);
      return InputRangeField2;
    }(_react.Component);
    InputRangeField.propTypes = {
      value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
      label: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.node]).isRequired,
      placeholder: _propTypes.default.string,
      styles: _propTypes.default.shape({
        inputRange: _propTypes.default.string,
        inputRangeInput: _propTypes.default.string,
        inputRangeLabel: _propTypes.default.string
      }).isRequired,
      onBlur: _propTypes.default.func.isRequired,
      onFocus: _propTypes.default.func.isRequired,
      onChange: _propTypes.default.func.isRequired
    };
    InputRangeField.defaultProps = {
      value: "",
      placeholder: "-"
    };
    var _default = InputRangeField;
    exports.default = _default;
  }
});

// node_modules/react-date-range/dist/components/DefinedRange/index.js
var require_DefinedRange = __commonJS({
  "node_modules/react-date-range/dist/components/DefinedRange/index.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _styles = _interopRequireDefault(require_styles());
    var _defaultRanges = require_defaultRanges();
    var _DayCell = require_DayCell();
    var _InputRangeField = _interopRequireDefault(require_InputRangeField());
    var _classnames = _interopRequireDefault(require_classnames());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var DefinedRange = function(_Component) {
      _inherits(DefinedRange2, _Component);
      var _super = _createSuper(DefinedRange2);
      function DefinedRange2(props) {
        var _this;
        _classCallCheck(this, DefinedRange2);
        _this = _super.call(this, props);
        _defineProperty(_assertThisInitialized(_this), "handleRangeChange", function(range) {
          var _this$props = _this.props, onChange = _this$props.onChange, ranges = _this$props.ranges, focusedRange = _this$props.focusedRange;
          var selectedRange = ranges[focusedRange[0]];
          if (!onChange || !selectedRange)
            return;
          onChange(_defineProperty({}, selectedRange.key || "range".concat(focusedRange[0] + 1), _objectSpread(_objectSpread({}, selectedRange), range)));
        });
        _this.state = {
          rangeOffset: 0,
          focusedInput: -1
        };
        return _this;
      }
      _createClass(DefinedRange2, [{
        key: "getRangeOptionValue",
        value: function getRangeOptionValue(option) {
          var _this$props2 = this.props, _this$props2$ranges = _this$props2.ranges, ranges = _this$props2$ranges === void 0 ? [] : _this$props2$ranges, _this$props2$focusedR = _this$props2.focusedRange, focusedRange = _this$props2$focusedR === void 0 ? [] : _this$props2$focusedR;
          if (typeof option.getCurrentValue !== "function") {
            return "";
          }
          var selectedRange = ranges[focusedRange[0]] || {};
          return option.getCurrentValue(selectedRange) || "";
        }
      }, {
        key: "getSelectedRange",
        value: function getSelectedRange(ranges, staticRange) {
          var focusedRangeIndex = ranges.findIndex(function(range) {
            if (!range.startDate || !range.endDate || range.disabled)
              return false;
            return staticRange.isSelected(range);
          });
          var selectedRange = ranges[focusedRangeIndex];
          return {
            selectedRange,
            focusedRangeIndex
          };
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props3 = this.props, headerContent = _this$props3.headerContent, footerContent = _this$props3.footerContent, onPreviewChange = _this$props3.onPreviewChange, inputRanges = _this$props3.inputRanges, staticRanges = _this$props3.staticRanges, ranges = _this$props3.ranges, renderStaticRangeLabel = _this$props3.renderStaticRangeLabel, rangeColors = _this$props3.rangeColors, className = _this$props3.className;
          return _react.default.createElement("div", {
            className: (0, _classnames.default)(_styles.default.definedRangesWrapper, className)
          }, headerContent, _react.default.createElement("div", {
            className: _styles.default.staticRanges
          }, staticRanges.map(function(staticRange, i) {
            var _this2$getSelectedRan = _this2.getSelectedRange(ranges, staticRange), selectedRange = _this2$getSelectedRan.selectedRange, focusedRangeIndex = _this2$getSelectedRan.focusedRangeIndex;
            var labelContent;
            if (staticRange.hasCustomRendering) {
              labelContent = renderStaticRangeLabel(staticRange);
            } else {
              labelContent = staticRange.label;
            }
            return _react.default.createElement("button", {
              type: "button",
              className: (0, _classnames.default)(_styles.default.staticRange, _defineProperty({}, _styles.default.staticRangeSelected, Boolean(selectedRange))),
              style: {
                color: selectedRange ? selectedRange.color || rangeColors[focusedRangeIndex] : null
              },
              key: i,
              onClick: function onClick() {
                return _this2.handleRangeChange(staticRange.range(_this2.props));
              },
              onFocus: function onFocus() {
                return onPreviewChange && onPreviewChange(staticRange.range(_this2.props));
              },
              onMouseOver: function onMouseOver() {
                return onPreviewChange && onPreviewChange(staticRange.range(_this2.props));
              },
              onMouseLeave: function onMouseLeave() {
                onPreviewChange && onPreviewChange();
              }
            }, _react.default.createElement("span", {
              tabIndex: -1,
              className: _styles.default.staticRangeLabel
            }, labelContent));
          })), _react.default.createElement("div", {
            className: _styles.default.inputRanges
          }, inputRanges.map(function(rangeOption, i) {
            return _react.default.createElement(_InputRangeField.default, {
              key: i,
              styles: _styles.default,
              label: rangeOption.label,
              onFocus: function onFocus() {
                return _this2.setState({
                  focusedInput: i,
                  rangeOffset: 0
                });
              },
              onBlur: function onBlur() {
                return _this2.setState({
                  rangeOffset: 0
                });
              },
              onChange: function onChange(value) {
                return _this2.handleRangeChange(rangeOption.range(value, _this2.props));
              },
              value: _this2.getRangeOptionValue(rangeOption)
            });
          })), footerContent);
        }
      }]);
      return DefinedRange2;
    }(_react.Component);
    DefinedRange.propTypes = {
      inputRanges: _propTypes.default.array,
      staticRanges: _propTypes.default.array,
      ranges: _propTypes.default.arrayOf(_DayCell.rangeShape),
      focusedRange: _propTypes.default.arrayOf(_propTypes.default.number),
      onPreviewChange: _propTypes.default.func,
      onChange: _propTypes.default.func,
      footerContent: _propTypes.default.any,
      headerContent: _propTypes.default.any,
      rangeColors: _propTypes.default.arrayOf(_propTypes.default.string),
      className: _propTypes.default.string,
      renderStaticRangeLabel: _propTypes.default.func
    };
    DefinedRange.defaultProps = {
      inputRanges: _defaultRanges.defaultInputRanges,
      staticRanges: _defaultRanges.defaultStaticRanges,
      ranges: [],
      rangeColors: ["#3d91ff", "#3ecf8e", "#fed14c"],
      focusedRange: [0, 0]
    };
    var _default = DefinedRange;
    exports.default = _default;
  }
});

// node_modules/react-date-range/dist/components/DateRangePicker/index.js
var require_DateRangePicker = __commonJS({
  "node_modules/react-date-range/dist/components/DateRangePicker/index.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _DateRange = _interopRequireDefault(require_DateRange());
    var _DefinedRange = _interopRequireDefault(require_DefinedRange());
    var _utils = require_utils();
    var _classnames = _interopRequireDefault(require_classnames());
    var _styles = _interopRequireDefault(require_styles());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _extends() {
      _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self2, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self2);
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self2;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    var DateRangePicker = function(_Component) {
      _inherits(DateRangePicker2, _Component);
      var _super = _createSuper(DateRangePicker2);
      function DateRangePicker2(props) {
        var _this;
        _classCallCheck(this, DateRangePicker2);
        _this = _super.call(this, props);
        _this.state = {
          focusedRange: [(0, _utils.findNextRangeIndex)(props.ranges), 0]
        };
        _this.styles = (0, _utils.generateStyles)([_styles.default, props.classNames]);
        return _this;
      }
      _createClass(DateRangePicker2, [{
        key: "render",
        value: function render() {
          var _this2 = this;
          var focusedRange = this.state.focusedRange;
          return _react.default.createElement("div", {
            className: (0, _classnames.default)(this.styles.dateRangePickerWrapper, this.props.className)
          }, _react.default.createElement(_DefinedRange.default, _extends({
            focusedRange,
            onPreviewChange: function onPreviewChange(value) {
              return _this2.dateRange.updatePreview(value ? _this2.dateRange.calcNewSelection(value, typeof value === "string") : null);
            }
          }, this.props, {
            range: this.props.ranges[focusedRange[0]],
            className: void 0
          })), _react.default.createElement(_DateRange.default, _extends({
            onRangeFocusChange: function onRangeFocusChange(focusedRange2) {
              return _this2.setState({
                focusedRange: focusedRange2
              });
            },
            focusedRange
          }, this.props, {
            ref: function ref(t) {
              return _this2.dateRange = t;
            },
            className: void 0
          })));
        }
      }]);
      return DateRangePicker2;
    }(_react.Component);
    DateRangePicker.defaultProps = {};
    DateRangePicker.propTypes = _objectSpread(_objectSpread(_objectSpread({}, _DateRange.default.propTypes), _DefinedRange.default.propTypes), {}, {
      className: _propTypes.default.string
    });
    var _default = DateRangePicker;
    exports.default = _default;
  }
});

// node_modules/react-date-range/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-date-range/dist/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "DateRange", {
      enumerable: true,
      get: function get() {
        return _DateRange.default;
      }
    });
    Object.defineProperty(exports, "Calendar", {
      enumerable: true,
      get: function get() {
        return _Calendar.default;
      }
    });
    Object.defineProperty(exports, "DateRangePicker", {
      enumerable: true,
      get: function get() {
        return _DateRangePicker.default;
      }
    });
    Object.defineProperty(exports, "DefinedRange", {
      enumerable: true,
      get: function get() {
        return _DefinedRange.default;
      }
    });
    Object.defineProperty(exports, "defaultInputRanges", {
      enumerable: true,
      get: function get() {
        return _defaultRanges.defaultInputRanges;
      }
    });
    Object.defineProperty(exports, "defaultStaticRanges", {
      enumerable: true,
      get: function get() {
        return _defaultRanges.defaultStaticRanges;
      }
    });
    Object.defineProperty(exports, "createStaticRanges", {
      enumerable: true,
      get: function get() {
        return _defaultRanges.createStaticRanges;
      }
    });
    var _DateRange = _interopRequireDefault(require_DateRange());
    var _Calendar = _interopRequireDefault(require_Calendar());
    var _DateRangePicker = _interopRequireDefault(require_DateRangePicker());
    var _DefinedRange = _interopRequireDefault(require_DefinedRange());
    var _defaultRanges = require_defaultRanges();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});
export default require_dist();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=react-date-range.js.map
