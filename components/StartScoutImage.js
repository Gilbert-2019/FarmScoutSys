import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';

export default class StartScoutImages extends Component {
  render() {
    return (
	

      <Image
          style={{width: 190, height: 300}}
          source={require('../images/MenuView/SCout.png')}
        />

    );
  }
}


const styles = StyleSheet.create({

})