import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';

export default class FarmImage extends Component {
  render() {
    return (
	
      <Image
          style={{width: 190, height: 300,}}
          source={require('../images/MenuView/Farms.png')}
        />

    );
  }
}


const styles = StyleSheet.create({

	
})