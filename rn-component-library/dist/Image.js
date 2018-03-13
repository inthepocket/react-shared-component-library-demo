'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ImageComponent = function ImageComponent(_ref) {
  var source = _ref.source,
      props = _objectWithoutProperties(_ref, ['source']);

  return _react2.default.createElement(_reactNative.Image, _extends({ source: { uri: 'https://media.giphy.com/media/3o85xIO33l7RlmLR4I/giphy.gif' } }, props));
};

exports.default = ImageComponent;