import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { Constants } from 'expo';

import Start from '../start/Start';

export default class Dashboard extends React.Component{

    componentDidMount(){
        this.props.navigation.navigate('DrawerOpen');
    }
    render(){
        return (
            <View>
                <View style={styles.statusBar} />
                <Text>
                    Its Dashboard
                </Text>
                <Start />
                <Button
        onPress={() => {console.log(this.props.navigation);this.props.navigation.navigate('DrawerOpen');}}
        title="opend"
      />
      <Button
        onPress={() => this.props.navigation.navigate('DrawerClose')}
        title="closed"
      />
            </View>
        );
    }
    
}
const styles = StyleSheet.create({
    statusBar: {
      backgroundColor: "#00185B",
      height: Constants.statusBarHeight,
    },
  
    // rest of the styles
  });