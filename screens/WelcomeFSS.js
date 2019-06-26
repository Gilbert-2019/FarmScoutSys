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
			style,	
			ProgressBarAndroid,			} from 'react-native';
			
import { Button } from 'react-native';
			
import Farm from '../components/farm';

const{width : WIDTH} = Dimensions.get('window')
			

 class WelcomeFSS extends Component {
	 static navigationOptions = {
		header : null
	}
	
		constructor(props) {
		super(props);
		this.state = {
			isLoading:true,
			dataSource:null,
		}
		}

		componentWillMount() {
			setTimeout(() => {
				this.props.navigation.navigate('HomeScreen')
			}, 1000);
		}
		
  render() {
    return (	

					<View style={styles.container}>
					<StatusBar backgroundColor="#232F34" barStyle="light-content" />

						
					 
						
							<Farm/>
							
							<Text style= {styles.TextHeadingContainer}>Farm Scout System</Text>
						
						<Text style= {styles.TextExperienceContainer}>
							Enjoy the experience
						</Text>
						
						<View style = {styles.buttonalign2}>
						<View style = {styles.alignText}>
							<Text style= {styles.TextAppContainer}>
							
							Scout Farming Application to help {'\n'} 
							
							Farm Owner and Farm Manager {'\n'}
							
							for the proper Farm management. {'\n'}
							
							</Text>
						</View>
					</View>

									
					
					<View style={[styles.container, styles.horizontal]}>
						<ActivityIndicator size="large" color="#00ff00" />
					 </View>
					 
					
					
					<View style = {styles.copyrightTextalign}>
					<Text style = {styles.copyrightText}>2019 © All rights | SenzAgro</Text>
					</View>
					
					
					

					</View>
    );
  }
}


export default WelcomeFSS;


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
		
	paddingTop:20,
	
	},
	
	buttonalign2:{
		
	paddingTop:40,
	
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