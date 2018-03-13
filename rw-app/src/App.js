import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import logo from './logo.svg';
import './App.css';

import RNWButton from 'rn-components-library/dist/Button';

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
  }
});

class App extends Component {
  state = { title: 'React' }

  theBigChange = (_) => this.setState({ title: 'React… Native 🤔' });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.state.title}</h1>
        </header>
        <p className="App-intro">
          Running {this.state.title} on {Platform.OS}
        </p>
        <RNWButton style={styles.button} onPress={this.theBigChange}>
          {this.state.title === "React" ? "Touch Me 😏" : `I'M AMAZED 😍`}
        </RNWButton>
      </div>
    );
  }
}

export default App;
