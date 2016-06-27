var Main = require('./app/components/main');

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet
} from 'react-native';

class BobbyNannier extends React.Component{
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Github NoteTaker',
          component: Main
        }} />
    );
  }
};

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

AppRegistry.registerComponent('BobbyNannier', () => BobbyNannier);
