var Main = require('./App/Components/Main');

import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

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

AppRegistry.registerComponent('BobbyNannier', () => BobbyNannier);
