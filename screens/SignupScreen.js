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
			

 class SignupScreen extends Component {
	 
	 
	 constructor(props){
			super (props);
				this.state={
				pickerSelection:'selectable'
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
		
		
		<View style= {styles.RegisterTextConainer}>
			<Text style={styles.RegisterText}>
			REGISTER
			</Text>
		</View>
		
		<SignUpImage/>
		
		<View style= {styles.paddingTextInput}>
		
		
		
		<View style= {styles.alignItemsContainer}>
		<View style={styles.alignTextInput}>
			<TextInput style= {styles.TextInputContainer}
						placeholder={'First Name'}
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						/>
		 
		 
		</View>
		
		<View style= {styles.alignItemsContainer}>
		<View style={styles.alignTextInput}>	
			<TextInput style= {styles.TextInputContainer}
						placeholder={'Last Name'}
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						/>
		</View>
		</View>
		
		<View style= {styles.alignItemsContainer}>
		<View style={styles.alignTextInput}>	
			<TextInput style= {styles.TextInputContainer}
						placeholder={'Email address'}
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						/>
		</View>
		</View>
		
		<View style= {styles.alignItemsContainer}>
		<View style={styles.alignTextInput}>	
			<TextInput style= {styles.TextInputContainer}
						placeholder={'Mobile No:'}
						 keyboardType = 'numeric'
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						/>
		</View>
		</View>
		
		<View style= {styles.alignItemsContainer}>
		<View style={styles.alignTextInput}>	
			<TextInput style= {styles.TextInputContainer}
						placeholder={'User Name'}
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						/>
		</View>
		</View>
		
		<View style={styles.alignTextInput}>		
		 <View stlye = {styles.alignInputContainer}>
			<TextInput style= {styles.TextInputContainer}
						placeholder={'Password'}
						secureTextEntry={true}
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						/>
		 
				</View>
		</View>
		
		<View style={styles.alignTextInput}>		
		 <View stlye = {styles.alignInputContainer}>
			<TextInput style= {styles.TextInputContainer}
						placeholder={'Confirm Password'}
						secureTextEntry={true}
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						/>
		 
				</View>
		</View>
		
		<View style= {styles.alignItemsContainer}>
		<View style={styles.alignTextInput}>	
			<TextInput style= {styles.TextInputContainer}
						placeholder={'Organization\'s Name'}
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						/>
		</View>
		</View>
		
		
		<View style = {styles.alignItemsContainer}>
			<View style = {styles.alignTextInput}>
		<Text style={styles.buttonText}>State is {this.state.pickerSelection}</Text>
				<TextInput style= {styles.TextInputContainer2}></TextInput>
				
			<Picker
				style={{backgroundcolor:'white', position:'absolute',bottom:0, left:15, right:0, top:30, color:'white', fontSize:10, }}
				selectedValue={this.state.pickerSelection}
				onValueChange={(itemValue, itemIndex) =>
					this.setState({pickerSelection: itemValue})
			}>
			
				<Picker.Item label="-Select the State-" value="State" />
				<Picker.Item label="Afghanistan" value="Afghanistan" />
				<Picker.Item label="Algeria" value="Algeria" />
				<Picker.Item label="Afghanistan" value="Afghanistan" />
				<Picker.Item label="Australia" value="Australia" />
				<Picker.Item label="Austria" value="Austria" />
				<Picker.Item label="Brazil" value="Brazil" />
				<Picker.Item label="Brunei" value="Brunei" />
				<Picker.Item label="Canada" value="Canada" />
				<Picker.Item label="China" value="China" />
				<Picker.Item label="Cuba" value="Cuba" />
				<Picker.Item label="Denmark" value="Denmark" />
				<Picker.Item label="France" value="France" />
				<Picker.Item label="Germany" value="Germany" />
				<Picker.Item label="India" value="India" />
				<Picker.Item label="Ireland" value="Ireland" />
				<Picker.Item label="Israel" value="Israel" />
				<Picker.Item label="Japan" value="Japan" />
				<Picker.Item label="Kuwait" value="Kuwait" />
				<Picker.Item label="Malaysia" value="Malaysia" />
				<Picker.Item label="New Zealand" value="New Zealand" />
				<Picker.Item label="Norway" value="Norway" />
				<Picker.Item label="Pakistan" value="Pakistan" />
				<Picker.Item label="Sri Lanka" value="Sri Lanka" />
			</Picker>
			
		</View>	
		</View>

		<View style = {styles.alignTextInput}>
  <Text style = {styles.CheckBoxTextInputContainer}>-Oragnization Type-</Text>
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
								}}> Long Term Crop Farm </Text>
			</View>
			<View style={{ flexDirection: 'row' }}>								
				<CheckBox
					value={this.state.checked}
				onValueChange={() => this.setState({ checkBoxChecked: [] })}
				/>
				<Text style={{marginTop: 5 , 
								color:'white', 
								fontFamily:'Montaga-Regular',
								fontSize:13, 
								}}> Short Term Crop Farm </Text>
								
				
			</View>
			<View style={{ flexDirection: 'row' }}>								
				<CheckBox
					value={this.state.checked}
				onValueChange={() => this.setState({ checkBoxChecked: [] })}
				/>
				<Text style={{marginTop: 5 , 
								color:'white', 
								fontFamily:'Montaga-Regular',
								fontSize:13, 
								}}> Live Stock Farm </Text>
								
				
			</View>
			
				<View style={{ flexDirection: 'row' }}>								
				<CheckBox
					value={this.state.checked}
				onValueChange={() => this.setState({ checkBoxChecked: [] })}
				/>
				<Text style={{marginTop: 5 , 
								color:'white', 
								fontFamily:'Montaga-Regular',
								fontSize:13, 
								}}> Poultry Farm </Text>
								
				
			</View>
		</View>
		</View>
  

		
		<View style = {styles.buttonalign}>						
					<TouchableOpacity style = {styles. Buttoncontainer}  onPress={() => this.props.navigation.navigate('TermandCondition')}>
						<Text style = {styles. buttonText}>
						SignUp
						</Text>
					</TouchableOpacity>
					</View>		
				
			<View style = {styles.copyrightTextalign}>
			
				<TouchableOpacity onPress={() => this.props.navigation.navigate('SignupScreen')}>
			
					<Text style = {styles.copyrightText}>Already have an account ? | LogIn |</Text>
					
				</TouchableOpacity>
				
					</View>
				
				
			</View>	
			</View>
			
</ScrollView>

 
		</View>
		
			
    );
  }
}


export default SignupScreen;

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
	
	CheckBoxTextInputContainer:{
		fontFamily:'Montaga-Regular',
		fontSize:15,
		paddingRight:170,
		color:'white',
		paddingTop:10,
		
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
		borderRadius:20,
		backgroundColor:'#F9AA33',
		height:40,
		justifyContent: "center",
		alignItems: "center" ,
		width:WIDTH - 170,
		
	},
	
	buttonalign:{
		
	paddingTop:60,
	
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