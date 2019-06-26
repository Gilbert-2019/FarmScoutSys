import React, { Component } from 'react';
import { Text, 
			View,
			StyleSheet,
			Image,
			TouchableOpacity,
			ActivityIndicator,
			Dimensions,
			StatusBar,			
			ScrollView,	
			style,			} from 'react-native';
			
import { Button } from 'react-native';
			
import Farm from '../components/farm';
			
const{width : WIDTH} = Dimensions.get('window')
			

 class HomeScreen extends Component {
	 static navigationOptions = {
		header : null
	}
  render() {
    return (	

					<View style={styles.container}>
					<StatusBar backgroundColor="#232F34" barStyle="light-content" />
							
							<Text style= {styles.TextHeadingContainer}>Farm Scout System</Text>
						
						<Text style= {styles.TextExperienceContainer}>
							Enjoy the experience
						</Text>
						
						<Farm/>								
								
					<View style = {styles.buttonalign}>

					
					<TouchableOpacity style = {styles. Buttoncontainer} onPress={() => this.props.navigation.navigate('LoginScreen')}>
						<Text style = {styles. buttonText}>
						Login
						</Text>
					</TouchableOpacity>
					
					<View style = {styles.seperatorbuttonalign}>
					
					<TouchableOpacity style = {styles. Buttoncontainer} onPress={() => this.props.navigation.navigate('SignupScreen')}>
						<Text style = {styles. buttonText}>
						Sign Up
						</Text>
					</TouchableOpacity>
					
					</View>
					</View>
					
					<View style={[styles.container, styles.horizontal]}>
						
					 </View>
					
					
					<View style = {styles.copyrightTextalign}>
					<Text style = {styles.copyrightText}>2019 © All rights | SenzAgro</Text>
					</View>
					
					
					

					</View>
    );
  }
}


export default HomeScreen;


const styles = StyleSheet.create({
	
	container : {
		backgroundColor:'#344955',
		flex: 1,
		alignItems: "center" ,
		
		
	},
	
	TextHeadingContainer : {
		color:'#F9AA33', 
		justifyContent: "center",
		fontFamily:'Courgette-Regular',
		fontSize: 35,
		paddingTop:20,
	
	},
	
	TextAppContainer : {
		color:'#FFFFFF', 
		justifyContent: "center",
		fontFamily:'Courgette-Regular',
		fontSize: 16,
		paddingTop:8,
		
	},
	
	TextExperienceContainer : {
		color:'#FFFFFF', 
		justifyContent: "center",
		fontFamily:'PoiretOne-Regular',
		fontSize: 20,
		paddingTop:8,
		
	},
	
	
	buttonText :{
		fontFamily:'Montaga-Regular',
		fontSize:18,
		color:'#344955'
	},
	
	Buttoncontainer : {
		width:WIDTH - 170,
		borderRadius:20,
		backgroundColor:'#F9AA33',
		height:40,
		justifyContent: "center",
		alignItems: "center" ,
		
	
	},
	
	buttonalign:{
		
	paddingTop:40,
	
	},
	
	seperatorbuttonalign:{
		
	paddingTop:20,
	
	},
	
	alignText: {
	alignItems:'center',
	},
	
	copyrightText: {
		fontFamily:'Quicksand-Medium',
		fontSize: 10,
		color:'#FFFFFF',
		
	
	},
	
	copyrightTextalign:{
	alignItems:'center',
	paddingBottom:15,
	},
	
	 horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
	
	
	
	


	});    