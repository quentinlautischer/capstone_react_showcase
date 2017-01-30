/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

var shared = require("./shared.js");

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class AwesomeProject extends Component {
  constructor()
  {
    super();
    this.text = 'Rendered Text';
    this.state =
    {
      mode: 'sign-in'
    }
  }
  render() {
    if (this.state.mode === 'sign-in'){
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Starting Page!
          </Text>
          <Button 
            onPress={() => this.start()}
            title="Login"
          />
        </View>
      );
    }
    else{
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Main App
          </Text>
          <Text>{this.text}</Text>
          <Button 
            onPress={() => this.render_text()}
            title="Render"
          />
        </View>
      );
    }
  }

  render_text()
  {
    var render_result = shared.call_shared_foo(this.text);
    this.text = render_result;
    this.forceUpdate();
  }

  start()
  {
    this.state.mode = 'app'
    this.forceUpdate();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('mobile_app_react_native', () => AwesomeProject);
