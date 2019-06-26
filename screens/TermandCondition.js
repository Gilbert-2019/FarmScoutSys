import React, { Component } from 'react';
import { Text, 
			View,
			ImageBackground,
			StyleSheet,
			Image,
			TouchableOpacity,
			StatusBar,
			TextInput,
			Dimensions,	
			ScrollView,
			Picker,	
			CheckBox, 	} from 'react-native';
			
			
import SignUpImage from '../components/LoginImage';			

const{width : WIDTH} = Dimensions.get('window')
			

 class TermandCondition extends Component {
	 
	 
	 constructor(props){
			super (props);
				this.state={
				pickerSelection:'selectable'
							}
						}
	

			
  render() {
    return (

		
		<View style={styles.container}>
		<StatusBar backgroundColor="#232F34" barStyle="light-content" />
		
				
		<View style= {styles.alignItemsContainer}>
				<Text style= {styles.TextHeadingContainer}>Farm Scout System</Text>	
		</View>
		
				 
						<View style = {styles.buttonalign2}>
						<View style = {styles.alignText}>
							<Text style= {styles.TextInputContainer}>
							
							Scout Farming Application to help {'\n'} 
							
							Farm Owner and Farm Manager {'\n'}
							
							for the proper Farm management. {'\n'} {'\n'}
							
							A Terms and Conditions agreement {'\n'}
							
							or a Privacy Policy are legally {'\n'}

							binding agreements between you {'\n'}

							(the company, the mobile app  {'\n'}
							
							developer, the website owner, {'\n'} {'\n'}

							the e-commerce store owner etc.) {'\n'}
							
							and users using your website, {'\n'}
							
							mobile app, Facebook app etc. {'\n'}
							
							The most common way to link to {'\n'}

							these legal agreements is through {'\n'}

							the browsewrap method. Through {'\n'} 
							 
							this method, you include links {'\n'}

							to your legal agreements somewhere {'\n'}

							in the footer of your website or {'\n'} 
							
							within the mobile app. {'\n'}
							
							</Text>
						</View>
					</View>
		
		
		
		

		<View style = {styles.alignTextInput}>
  		<View style={styles.CheckBoxContainer}>
			<View style={{ flexDirection: 'row' }}>
				<CheckBox
					value={this.state.checked}
				onValueChange={() => this.setState({ checkBoxChecked: [] })}
				/>
				<Text style={{marginTop: 5 , 
								color:'white', 
								fontFamily:'Montaga-Regular',
								fontSize:13, 
								}}> I have read and agree to these terms </Text>
			</View>
			
		</View>
		</View>
  

		
		<View style = {styles.buttonalign}>						
					<TouchableOpacity style = {styles. Buttoncontainer}  onPress={() => this.props.navigation.navigate('LoginScreen')}>
						<Text style = {styles. buttonText}>
						SignUp
						</Text>
					</TouchableOpacity>
					</View>		

 
		</View>
		
			
    );
  }
}


export default TermandCondition;

const styles = StyleSheet.create({
	
	container : {
		backgroundColor:'#344955',
		flex: 1,

		
		
	},
	
	TextHeadingContainer : {
		color:'#F9AA33', 
		justifyContent: "center",
		fontFamily:'Courgette-Regular',
		fontSize: 30,
		paddingTop:20,
		alignItems:'center',
	
	},
	
	TextAppContainer : {
		color:'#FFFFFF', 
		justifyContent: "center",
		fontFamily:'Courgette-Regular',
		fontSize: 16,
		paddingTop:8,
		
	},
	
	alignInputContainer: {
		paddingTop:30,
	},
	
	buttonalign2:{
		
	paddingTop:40,
	
	},
	
	
	
	TextInputContainer:{
		fontFamily:'Montaga-Regular',
		fontSize:15,
		width:WIDTH -75,
		borderRadius:10,
		borderWidth:1.5,
		borderColor:'#F9AA33',
		height:380,	
		paddingLeft:35,
		color:'white'
		
	},
	
	CheckBoxTextInputContainer:{
		fontFamily:'Montaga-Regular',
		fontSize:15,
		paddingRight:170,
		color:'white',
		paddingTop:10,
		alignItems:'center',
		
	},
	
	TextInputContainer2:{
		fontFamily:'Montaga-Regular',
		fontSize:13,
		width:WIDTH -75,
		borderRadius:20,
		borderWidth:1.1,
		borderColor:'#F9AA33',
		height:35,	
		paddingLeft:30,
		color:'white'
		
	},
	
	
	alignText: {
	alignItems:'center',
	},
	
	
	alignTextInput:{
		paddingTop:20,
		alignItems:'center',
	},
	
	alignItemsContainer:{
		alignItems:'center',
	},
	
	Buttoncontainer : {
		borderRadius:20,
		backgroundColor:'#F9AA33',
		height:40,
		justifyContent: "center",
		alignItems: "center" ,
		width:WIDTH - 170,
		
	},
	
	buttonalign:{
		
	paddingTop:15,
	alignItems:'center',
	
	},
	
	buttonText :{
		fontFamily:'Montaga-Regular',
		fontSize:18,
		color:'#344955'
	},
	
	copyrightText: {
		fontFamily:'Quicksand-Medium',
		fontSize: 10,
		color:'#FFFFFF',
		
	
	},
	
	copyrightTextalign:{
	alignItems:'center',
	paddingTop:80,
	paddingBottom:20,
	
	},
	
	RegisterText : {
		fontFamily:'Montaga-Regular',
		fontSize:15,
		color:'white'
	},
	
	RegisterTextConainer :{
		alignItems:'center',
		paddingTop:10,
	},
	
	CheckBoxContainer:{
		color:'white'
	},
		
		
	

});