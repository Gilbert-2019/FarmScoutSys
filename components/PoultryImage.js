import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';

export default class Poultry extends Component {
  render() {
    return (
	
      <Image
          style={{width: 190, height: 300,}}
          source={require('../images/FarmMenu/Poultry.png')}
        />

    );
  }
}


const styles = StyleSheet.create({

	
})