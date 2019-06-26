import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';

export default class SignUpImage extends Component {
  render() {
    return (
	
	<View style={styles.imagecontainer}>
      <Image
          style={{width: 150, height: 150}}
          source={require('../images/agriculture-2.png')}
        />
	</View>
    );
  }
}


const styles = StyleSheet.create({
	imagecontainer:{
		alignItems: "center" ,
		paddingTop:'5%',
		
	},
})