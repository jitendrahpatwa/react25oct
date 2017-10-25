import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Constants } from 'expo';

import Home from './src/components/home/Home';
import Routes from './src/components/Routes';

export default class App extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}