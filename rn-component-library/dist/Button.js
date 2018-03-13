'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var s = _reactNative.StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    width: '30%',
    alignSelf: 'center',
    padding: '1rem'
  }
});

var Button = function Button(_ref) {
  var children = _ref.children,
      onPress = _ref.onPress,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ['children', 'onPress', 'style']);

  return _react2.default.createElement(
    _reactNative.TouchableOpacity,
    { onPress: onPress },
    _react2.default.createElement(
      _reactNative.View,
      _extends({ style: [style, s.button] }, props),
      _react2.default.createElement(
        _reactNative.Text,
        null,
        children
      )
    )
  );
};

Button.defaultProps = {
  children: null
};

exports.default = Button;