'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _echarts = require('echarts');

var _echarts2 = _interopRequireDefault(_echarts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Echarts = function (_Component) {
  _inherits(Echarts, _Component);

  function Echarts(props) {
    _classCallCheck(this, Echarts);

    var _this = _possibleConstructorReturn(this, (Echarts.__proto__ || Object.getPrototypeOf(Echarts)).call(this, props));

    _this.props = props;
    _this.echartsDom = null;
    return _this;
  }

  _createClass(Echarts, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.rerender();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.dispose();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      // 修改 theme/opts/events 时，先 dispose 再 rerender
      if (prevProps.theme !== this.props.theme || !(0, _isEqual2.default)(prevProps.opts, this.props.opts) || !(0, _isEqual2.default)(prevProps.events, this.props.events)) {
        this.dispose();
        this.rerender();
        return;
      }
      var echartObj = this.renderEchartDom();
      // 样式修改的时候，有可能大小会变化，触发一下 resize
      if (!(0, _isEqual2.default)(prevProps.style, this.props.style) || !(0, _isEqual2.default)(prevProps.className, this.props.className)) {
        try {
          echartObj.resize();
        } catch (e) {
          console.warn(e);
        }
      }
    }
  }, {
    key: 'getEchartsInstance',
    value: function getEchartsInstance() {
      var _props = this.props,
          theme = _props.theme,
          opts = _props.opts,
          option = _props.option;

      return _echarts2.default.getInstanceByDom(this.echartsDom) || _echarts2.default.init(this.echartsDom, theme, opts);
    }
  }, {
    key: 'renderEchartDom',
    value: function renderEchartDom() {
      var echartObj = this.getEchartsInstance();
      echartObj.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate || false);
      this.bindEvents(echartObj);
      return echartObj;
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents(instance) {
      var events = this.props.events;

      if (events) {
        var _loop = function _loop(eventName) {
          // hasOwnProperty() 方法会返回一个布尔值，检测一个对象是否含有特定的自身属性
          if (Object.prototype.hasOwnProperty.call(events, eventName)) {
            // instance.off(eventName); // 已经 dispose 在重建，所以无需 off 操作
            instance.on(eventName, function (param) {
              events[eventName](param, instance);
            });
          }
        };

        for (var eventName in events) {
          _loop(eventName);
        }
      }
    }
  }, {
    key: 'rerender',
    value: function rerender() {
      var _this2 = this;

      try {
        setTimeout(function () {
          if (_this2.echartsDom === null) {
            return;
          }
          var echartObj = _this2.renderEchartDom();
        }, 100);
      } catch (e) {
        console.warn(e);
      }
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      if (this.echartsDom) {
        _echarts2.default.dispose(this.echartsDom);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          style = _props2.style,
          className = _props2.className;

      var styles = _extends({
        width: this.props.width ? this.props.width : '100%',
        height: this.props.height ? this.props.height : '400px'
      }, style);
      return _react2.default.createElement('div', { ref: function ref(e) {
          _this3.echartsDom = e;
        },
        className: 'react-echarts ' + (className ? className : ''),
        style: styles });
    }
  }]);

  return Echarts;
}(_react.Component);

exports.default = Echarts;


Echarts.propTypes = {
  theme: (0, _propTypes.oneOfType)([_propTypes.object, _propTypes.string]),
  option: _propTypes.object.isRequired,
  events: _propTypes.object,
  opts: (0, _propTypes.shape)({
    devicePixelRatio: _propTypes.number,
    renderer: (0, _propTypes.oneOf)(['canvas', 'svg']),
    width: (0, _propTypes.oneOfType)([_propTypes.number, (0, _propTypes.oneOf)([null, undefined, 'auto'])]),
    height: (0, _propTypes.oneOfType)([_propTypes.number, (0, _propTypes.oneOf)([null, undefined, 'auto'])])
  }),
  notMerge: _propTypes.bool,
  lazyUpdate: _propTypes.bool,
  style: _propTypes.object,
  className: _propTypes.string
};