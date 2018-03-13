import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const s = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    width: '30%',
    alignSelf: 'center',
    padding: 10,
  }
})

const Button = ({ children, onPress, style, ...props }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[style, s.button]} {...props}>
      <Text>{children}</Text>
    </View>
  </TouchableOpacity>
);

Button.defaultProps = {
  children: null,
};

export default Button;
