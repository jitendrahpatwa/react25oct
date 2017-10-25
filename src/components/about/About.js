import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { Constants } from 'expo';

export default class About extends React.Component{

    render(){
        return (
            <View>
                <View style={styles.statusBar} />
                <Text>
                    Its About
                </Text>
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