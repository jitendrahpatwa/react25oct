import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { Constants } from 'expo';

export default class Drawerpage2 extends React.Component{

    render(){
        return (
            <View>
                <View style={styles.statusBar} />
                <Text>
                    Its About Drawerpage2 df
                </Text>
                <Button
        onPress={() => {this.props.navigation.navigate('DrawerOpen');}}
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