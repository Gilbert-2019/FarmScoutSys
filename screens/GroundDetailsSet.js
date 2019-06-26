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
			Button,
							} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
			
import LoginImage from '../components/LoginImage';			

const{width : WIDTH} = Dimensions.get('window')
			

 class GroundDetailsSet extends Component {
	 static navigationOptions = {
		title : "Field-Info"
	}	
	
	 constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false
    };
  }
 
  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };
 
  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };
 
  handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.hideDateTimePicker();
  };

	
  render() {
    return (

		
		<View style={styles.container}>
		<ScrollView>
		<StatusBar backgroundColor="#232F34" barStyle="light-content" />
		
		<View style={styles.itemcontainer}>
			<Text style={styles.itemTextcontainer}>FIELD NAME </Text>
		<View style = {styles.alignInputContainer}>
				<TextInput style= {styles.TextInputContainer}
						placeholder={'Field Name'}
						placeholderTextColor={'#232F34'}
						underLineColorAndroid='transparent'
						/>
		</View>
		
		</View>
		
		<View style={styles.itemcontainer}>
			<Text style={styles.itemTextcontainer}>PLANTING CROP</Text>
		<View style = {styles.alignInputContainer2}>
				<TextInput style= {styles.TextInputContainer2}
						placeholder={'Plant Crop'}
						placeholderTextColor={'#232F34'}
						underLineColorAndroid='transparent'
						/>
		</View>
		
		</View>
		
		<Text style={styles.lineBG}></Text>
		
		<View style={styles.itemcontainer}>
			<Text style={styles.itemTextcontainer}>ACRES </Text>
		<View style = {styles.alignInputContainer3}>
				<TextInput style= {styles.TextInputContainer}
						placeholder={'Acres'}
						placeholderTextColor={'#232F34'}
						underLineColorAndroid='transparent'
						/>
		</View>
		
		</View>
		
		<View style={styles.itemcontainer}>
			<Text style={styles.itemTextcontainer}>CROP VARIETY </Text>
		<View style = {styles.alignInputContainer4}>
				<TextInput style= {styles.TextInputContainer}
						placeholder={'Crop Variety'}
						placeholderTextColor={'#232F34'}
						underLineColorAndroid='transparent'
						/>
		</View>
		
		</View>
		
		<View style={styles.itemcontainer}>
			<Text style={styles.itemTextcontainer}>FARM NAME </Text>
		<View style = {styles.alignInputContainer5}>
				<TextInput style= {styles.TextInputContainer}
						placeholder={'Farm Name'}
						placeholderTextColor={'#232F34'}
						underLineColorAndroid='transparent'
						/>
		</View>
		
		</View>
		
		<View style={styles.itemcontainer}>
			<Text style={styles.itemTextcontainer}>CLIENT NAME </Text>
		<View style = {styles.alignInputContainer6}>
				<TextInput style= {styles.TextInputContainer}
						placeholder={'Client Name'}
						placeholderTextColor={'#232F34'}
						underLineColorAndroid='transparent'
						/>
		</View>
		
		</View>
		
		<View style={styles.itemcontainer}>
			<Text style={styles.itemTextcontainer}>PLANTING DATE </Text>
		<View style = {styles.alignInputContainer7}>
		
					<TouchableOpacity style = {styles. Buttoncontainer} onPress={this.showDateTimePicker}>
						<Text style = {styles. buttonText}>
						Set Date
						</Text>
					</TouchableOpacity>
						
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
						
		</View>
		
		</View>
		
		<View style={styles.itemcontainer}>
			<Text style={styles.itemTextcontainer}>PLANTING NOTES </Text>
		<View style = {styles.alignInputContainer8}>
				<TextInput style= {styles.TextInputContainer}
						placeholder={'Plantig Notes'}
						placeholderTextColor={'#232F34'}
						underLineColorAndroid='transparent'
						/>
		</View>
		
		</View>
		
		
		
		<TouchableOpacity onPress={() => this.props.navigation.navigate('MenuView')}>
			
					<Text style = {styles.copyrightText}>To add more plantings or edit this field, Visit the web DashBoard</Text>
					
				</TouchableOpacity>
			
				
			
		</ScrollView>

		</View>
		
			
    );
  }
}


export default GroundDetailsSet;

const styles = StyleSheet.create({
	
	container : {
		backgroundColor:'#FFFFFF',
		flex: 1,
		
		
	},
	
	lineBG:{
		backgroundColor:'#344955'
	},
	

	alignInputContainer: {
		paddingTop:'3%',
		paddingLeft:'11%',
	
	},
	
	alignInputContainer2: {
		paddingTop:'3%',
		paddingLeft:'4%',
	},
	
	alignInputContainer3: {
		paddingTop:'3%',
		paddingLeft:'25%',
	},
	
	alignInputContainer4: {
		paddingTop:'3%',
		paddingLeft:'7%',
	},
	
	alignInputContainer5: {
		paddingTop:'3%',
		paddingLeft:'12%',
	},
	
	alignInputContainer6: {
		paddingTop:'3%',
		paddingLeft:'8%',
	},
	
	alignInputContainer7: {
		paddingTop:'3%',
		paddingLeft:'3%',
	},
	
	alignInputContainer8: {
		paddingTop:'3%',
		paddingLeft:'1%',
	},
	

	TextInputContainer:{
		fontFamily:'Montaga-Regular',
		fontSize:15,
		width:WIDTH -210,
		borderRadius:5,
		borderWidth:1.2,
		borderColor:'#F9AA33',
		height:40,	
		paddingLeft:'10%',
		color:'#344955'
		
	},
		
	TextInputContainer2:{
		fontFamily:'Montaga-Regular',
		fontSize:15,
		width:WIDTH -210,
		borderRadius:5,
		borderWidth:1.2,
		borderColor:'#F9AA33',
		height:40,	
		paddingLeft:'10%',
		color:'#344955'
		
	},

	
	Buttoncontainer : {
		width:WIDTH - 210,
		borderRadius:5,
		backgroundColor:'#F9AA33',
		height:40,
		justifyContent: "center",
		paddingLeft:'10%',
		
	},
	
	
	buttonText :{
		fontFamily:'Montaga-Regular',
		fontSize:18,
		color:'#344955'
	},
	
	copyrightText: {
		fontFamily:'Quicksand-Medium',
		fontSize: 10,
		color:'black',
		paddingLeft:"15%"
		
	
	},
	

	
	itemcontainer:{
		flex:1,
		alignSelf:'stretch',
		height:70,
		borderWidth:2,
		borderColor:'#344955',
		flexDirection: 'row' ,
	},
	
	itemTextcontainer:{
		paddingLeft:'5%',
		paddingTop:'5%',
		fontFamily:'Montaga-Regular',
		fontSize: 18,
		color:'#344955',
		
	},
	
	
		
		
	

});