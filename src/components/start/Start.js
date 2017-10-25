import React from 'react';
import { StyleSheet, Text, View, Button, Image, StatusBar } from 'react-native';
import { Constants } from 'expo';

import Home from '../home/Home';
import About from '../about/About';

import Drawerpage1 from '../drawer/Drawerpage1';
import Drawerpage2 from '../drawer/Drawerpage2';

import { DrawerNavigator } from 'react-navigation';

class MyHomeScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home'
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      );
    }
  }
  
  class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications'
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }
  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
  
  const Start = DrawerNavigator({
    Home: {
      screen: Drawerpage1,
    },
    Notifications: {
      screen: Drawerpage2,
    },
  },{
    drawerWidth: 200,
    drawerPosition: 'left',
    // contentComponent: props => <Home {...props} />,
    // drawerBackgroundColor: 'transparent'
  });

export default Start;