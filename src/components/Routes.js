import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { Route, Router } from 'react-native-router-flux';

import { StackNavigator } from 'react-navigation';

import Home from './home/Home';
import About from './about/About';
import Dashboard from './dashboard/Dashboard';
import Start from './start/Start';


const Routes = StackNavigator({
    Home: {
      screen: Home,
      routeName:'Home',
      path:'home'
    },
    About: {
      screen: About,
      routeName:'About',
      path:'about'
    },
    Dashboard: {
      screen: Dashboard,
      routeName:'Dashboard',
      path:'dashboard'
    },
    Start: {
      screen: Start,
      routeName:'Start'
    },
},{
    initialRouteName : 'Home',
    headerMode: 'none',
    navigationOptions: {
        gesturesEnabled: false,
    }
});

export default Routes;

// export default class Routes extends React.Component{

//     static navOptions={
//         title:'Home'
//     };
//     render(){
//         return (
//             <Button
//                 onPress={() => this.props.navigation.navigate('About', {name: 'Lucy'})}
//                 title="Go to Lucy's profile"
//             />
//         );
//     }
    
// }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  