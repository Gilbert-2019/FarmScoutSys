import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
	
	<View style={styles.imagecontainer}>
      <Image
          style={{width: 200, height: 200}}
          source={require('../images/logo.png')}
        />
	</View>
    );
  }
}


const styles = StyleSheet.create({
	imagecontainer:{
		alignItems: "center" ,
		paddingTop:'10%',
		
	},
})