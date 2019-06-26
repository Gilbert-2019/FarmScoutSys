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
			ScrollView,			} from 'react-native';
			
			
import LoginImage from '../components/LoginImage';			

const{width : WIDTH} = Dimensions.get('window')
			

 class LoginScreen extends Component {
  state = { 
	  		username: '',
			password: '',
			usernameError: false,
			PasswordError: false
		 };
			

		 onchangePassword =(text)=> {
			console.log("onchangePassword", text);
			this.setState( { password: text } );
			this.setState( { PasswordError: false } );
		 }

		 onchangeUsername =(text)=> {
			console.log("onchangeUsername", text);
			this.setState( { username: text } );
			this.setState( { usernameError: false } );
		 }

		 onPressloginButton = () => {
			 if(this.state.username.length !== 0){
				
				if(this.state.password.length !== 0) {
					
					console.log("onPressloginButton", this.state.username.length);
					this.props.navigation.navigate('GroundDetailsSet')

				} else {
					this.setState( { PasswordError: true } );
				}

				
			 } else {
				console.log("onPressloginButton");
				this.setState( { usernameError: true } );
				if(this.state.password.length == 0) {
					this.setState( { PasswordError: true } );
				} 
			 }
			
		 }


  render() {
    return (

		
		<View style={styles.container}>
		<ScrollView>
		<StatusBar backgroundColor="#232F34" barStyle="light-content" />
		
				
		<View style= {styles.alignItemsContainer}>
				<Text style= {styles.TextHeadingContainer}>Farm Scout System</Text>	
		</View>
		
		<LoginImage/>
		
		<View style= {styles.paddingTextInput}>
		
		<View style= {styles.alignItemsContainer}>
		<View style={styles.alignTextInput}>
			<TextInput style= {this.state.usernameError == true ? styles.ErrorTextInputContainer : styles.TextInputContainer}
						placeholder={'User Name'}
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						onChangeText={(text) => this.onchangeUsername(text)}
						/>
		 
		 
		</View>
		
		<View style={styles.alignTextInput}>		
		 <View stlye = {styles.alignInputContainer}>
			<TextInput style= {this.state.PasswordError == true ? styles.ErrorTextInputContainer : styles.TextInputContainer}
						placeholder={'Password'}
						secureTextEntry={true}
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						onChangeText={(text) => this.onchangePassword(text)}
						/>
		 
				</View>
		</View>
				
		<View style = {styles.buttonalign}>						
					<TouchableOpacity style = {styles. Buttoncontainer}  
					onPress={() => this.onPressloginButton()}
					>
						
						<Text style = {styles. buttonText}>
						Login
						</Text>
					</TouchableOpacity>
					</View>		
			
			</View>
				
			<View style = {styles.copyrightTextalign}>
			
				<TouchableOpacity onPress={() => this.props.navigation.navigate('SignupScreen')}>
			
					<Text style = {styles.copyrightText}>Don't have an account ? | SignUp |</Text>
					
				</TouchableOpacity>
				
					</View>
				
				
			</View>	
			
</ScrollView>

		</View>
		
			
    );
  }
}


export default LoginScreen;

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
	
	TextExperienceContainer : {
		color:'#FFFFFF', 
		justifyContent: "center",
		fontFamily:'PoiretOne-Regular',
		fontSize: 15,
		paddingTop:8,
		paddingLeft:40,
		
	},
	
	alignInputContainer: {
		paddingTop:30,
	},
	
	
	
	TextInputContainer:{
		fontFamily:'Montaga-Regular',
		fontSize:13,
		width:WIDTH -75,
		borderRadius:20,
		borderWidth:1.1,
		borderColor:'#F9AA33',
		height:35,	
		paddingLeft:35,
		color:'white'
		
	},

	ErrorTextInputContainer:{
		fontFamily:'Montaga-Regular',
		fontSize:13,
		width:WIDTH -75,
		borderRadius:20,
		borderWidth:1.1,
		borderColor:'#ff0000',
		height:35,	
		paddingLeft:35,
		color:'white'
		
	},

	
	paddingTextInput:{
		paddingTop:30,
	},
	
	
	alignTextInput:{
		paddingTop:20,
	},
	
	alignItemsContainer:{
		alignItems:'center',
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
	paddingTop:95,
	},
	
		
		
	

});