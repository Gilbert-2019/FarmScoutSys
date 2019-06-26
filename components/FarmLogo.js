import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';

export default class FarmLogo extends Component {
  render() {
    return (
    
        <View style={styles.TopImagecontainer}>
      <Image
          style={{width: 80, height:80 }}
          source={require('../images/Quotes/logo.png')}
        />
        </View>

    );
  }
}


const styles = StyleSheet.create({
	TopImagecontainer:{

    },
})