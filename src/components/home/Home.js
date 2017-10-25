import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { Constants } from 'expo';

export default class Home extends React.Component{

    componentDidMount(){
        console.log(this.props);
        //this.props.navigation.navigate('About', {});
    }
    render(){
        return (
            <View>
            <View style={styles.statusBar} />
                <Text>
                    Its home dear ok----
                </Text>
                    <Button
        onPress={() => this.props.navigation.navigate('About', {})}
        title="Go to Lucy's profile"
      />
      <Button
        onPress={() => this.props.navigation.navigate('Dashboard', {})}
        title="Go to Dashboard"
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