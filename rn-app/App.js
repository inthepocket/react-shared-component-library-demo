import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNWButton from 'rn-components-library/src/Button.js';

export default class App extends Component {
  state = { showStuff: false }

  showAlert = () => this.setState({ showStuff: true })

  render() {
    return (
      <View style={styles.container}>
        {this.state.showStuff && <Text>PLATFORM AGNOSTIC CODE YO ✌🏻</Text>}
        <RNWButton onPress={this.showAlert}>
          Press me
        </RNWButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
