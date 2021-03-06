'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabBarItem = function (_Component) {
    _inherits(TabBarItem, _Component);

    function TabBarItem() {
        _classCallCheck(this, TabBarItem);

        return _possibleConstructorReturn(this, (TabBarItem.__proto__ || Object.getPrototypeOf(TabBarItem)).apply(this, arguments));
    }

    _createClass(TabBarItem, [{
        key: 'getIconNode',
        value: function getIconNode() {
            return _react2.default.createElement(_Icon2.default, { name: this.props.selected && this.props.selectedIconName ? this.props.selectedIconName : this.props.iconName,
                family: this.props.family,
                size: this.props.iconSize || 30,
                color: this.props.selected && this.props.selectedIconColor ? this.props.selectedIconColor : this.props.iconColor,
                style: {
                    marginBottom: -2
                } });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_reactNative.TabBarIOS.Item, _extends({}, this.props, {
                iconComponent: this.getIconNode() }));
        }
    }]);

    return TabBarItem;
}(_react.Component);

TabBarItem.propTypes = {
    iconName: _react.PropTypes.string.isRequired,
    selectedIconName: _react.PropTypes.string,
    iconSize: _react.PropTypes.number,
    iconColor: _react.PropTypes.string,
    selectedIconColor: _react.PropTypes.string
};
exports.default = TabBarItem;