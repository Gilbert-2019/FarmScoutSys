import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';

export default class Menu extends Component {
  render() {
    return (
	
	<View style={styles.imagecontainer}>
      <Image
          style={{width: 40, height: 40}}
          source={require('../images/Menu.png')}
        />
	</View>
    );
  }
}


const styles = StyleSheet.create({
	imagecontainer:{
		top:10,
		left:10,
		
	},
})