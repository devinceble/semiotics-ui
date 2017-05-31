import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import { Button } from 'semiotics-ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class exampleui extends Component { // eslint-disable-line
  render() {
    return (
      <View style={styles.container}>
        <Button />
      </View>
    );
  }
}


AppRegistry.registerComponent('exampleui', () => exampleui);
