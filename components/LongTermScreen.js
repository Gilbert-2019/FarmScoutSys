import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';

export default class LongTermScreen extends Component {
  render() {
    return (
    
        <View style={styles.TopImagecontainer}>
      <Image
          style={{width: 250, height:70 }}
          source={require('../images/Quotes/Quotes01.png')}
        />
        </View>

    );
  }
}


const styles = StyleSheet.create({
	TopImagecontainer:{
        paddingLeft:'3%',
        paddingTop:'3%'
    },
})