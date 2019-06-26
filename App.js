import React, { Component } from 'react';

import WelcomeFSS from './screens/WelcomeFSS.js'; 
import HomeScreen from './screens/HomeScreen.js';
import SignupScreen from './screens/SignupScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import TermandCondition from './screens/TermandCondition.js';
import GroundDetailsSet from './screens/GroundDetailsSet.js';
import MenuView from './screens/MenuView.js';
import ScoutView from './screens/ScoutView.js';
import TrackPath from './screens/TrackPath.js';
import FarmTypes from './screens/FarmTypes';
import LongTermCrop from './screens/LongTermCrop';
import ShortTermCrop from './screens/ShortTermCrop';
import LiveStockScreen from './screens/LiveStockScreen';
import PoultryScreen from './screens/PoultryScreen';







import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';

export default class App extends Component{
	
	render() {
	  return (
			<AppStackNavigator/>
	  );
	}
  }


const AppNavigator2 = createDrawerNavigator({
	
	LongTermCrop:LongTermCrop,
	ShortTermCrop:ShortTermCrop,
	LiveStockScreen:LiveStockScreen,
	PoultryScreen:PoultryScreen,


});
const AppDrawerNavigator = createAppContainer(AppNavigator2);


const AppNavigator = createStackNavigator({
	WelcomeFSS:WelcomeFSS,
  	HomeScreen:HomeScreen,
	SignupScreen:SignupScreen,
	LoginScreen:LoginScreen,
	TermandCondition:TermandCondition,
	GroundDetailsSet:GroundDetailsSet,
	MenuView:MenuView,
	ScoutView:ScoutView,
	TrackPath:TrackPath,
	FarmTypes:FarmTypes,
	
	AppDrawerNavigator :AppDrawerNavigator

}, {	
	
	defaultNavigationOptions:{
		headerStyle:{
			backgroundColor:'#232F34'
			},
			
			headerTintColor: '#F9AA33',
			
			headerTitleStyle: {
				fontSize:17,
				fontFamily: 'PoiretOne-Regular',
				flex:1,
				
			}
		}
		
	}


);

const AppStackNavigator = createAppContainer(AppNavigator);

