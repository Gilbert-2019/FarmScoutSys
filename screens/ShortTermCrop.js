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
			Picker
							} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import TimePicker from "react-native-24h-timepicker";


import Menu from '../components/Menu';
import ShortTermScreen from '../components/ShortTermScreen';
import FarmLogo from '../components/FarmLogo';

var ImagePicker = require('react-native-image-picker');


				

const{width : WIDTH} = Dimensions.get('window')
			

 class ShortTermCrop extends Component {
	 static navigationOptions = {
		
		header :null
	}	
	
	 constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
	  	pickerSelection:'selectable',
		time: "",
		filePath: {},
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
  
 
  onCancel() {
    this.TimePicker.close();
  }
 
  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  }
  
  
  
  
  chooseFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };

	
  render() {
    return (

		
		<View style={styles.container}>
		<ScrollView>
		<StatusBar backgroundColor="#F9AA33" barStyle="light-content" />
		
		
		<View style={styles.RowFlexcontainer}>
		
		<TouchableOpacity onPress={() => this.props.navigation.navigate
			('MenuView')}>
		<Menu/>
        
		</TouchableOpacity>
		
			
		<View style = {styles.alignInputContainer5}>
				<View style = {styles.buttonalign}>						
					<TouchableOpacity style = {styles. Buttoncontainer3} 
					>
						
						<Text style = {styles. buttonText2}>
						Report
						</Text>
					</TouchableOpacity>
					</View>		
		
		</View>
		
		</View>

       
		
		<View style={styles.TopImagecontainer}>
		<View style={styles.ImagerowContainer}>
        <FarmLogo/>
        <ShortTermScreen/>
		</View>
		</View>

		
		<View style={styles.Topcontainer}>
		<View style={styles.itemcontainer}>
			<Text style={styles.itemTextcontainer}>Plant Name </Text>
			
			
			
		<View style = {styles.alignInputContainer}>
				<TextInput style= {styles.TextInputContainer}
						placeholder={'Plant'}
						placeholderTextColor={'#232F34'}
						underLineColorAndroid='transparent'
						/>
		
		
		</View>

		</View>

        <View style = {styles.itemcontainer}>
		<Text style={styles.itemTextcontainer}> Activity </Text>
		<View style = {styles.alignInputContainer7}>
		<Text style={styles.TextInputContainer}></Text>
				
			<Picker
				style={{backgroundcolor:'white', position:'absolute',bottom:0, left:'45%', right:0, top:'6%',
				fontFamily:'Montaga-Regular',
				fontSize:15,
				borderColor:'#03DAC5',
				color:'#344955'				}}
				selectedValue={this.state.pickerSelection}
				onValueChange={(itemValue, itemIndex) =>
					this.setState({pickerSelection: itemValue})
			}>
			
				<Picker.Item label="-Select-" value="Activity" />
				<Picker.Item label="Scout" value="Scout" />
				<Picker.Item label="Cultivation" value="Cultivation" />
                <Picker.Item label="Feeding" value="Feeding" />
				<Picker.Item label="Fertilizing" value="Fertilizing" />
				<Picker.Item label="Sell" value="Sell" />
				<Picker.Item label="Export" value="Export" />
				<Picker.Item label="Other" value="Other" />
			</Picker>
			
		</View>	
		</View>	
		
		
		
		
		<View style={styles.itemcontainer}>
			<Text style={styles.itemTextcontainer}>Date </Text>
		<View style = {styles.alignInputContainer2}>
		
					<TouchableOpacity style = {styles. Buttoncontainer1} onPress={this.showDateTimePicker}>
						<Text style = {styles. buttonText1}>
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
			<Text style={styles.itemTextcontainer}>Time </Text>
		<View style = {styles.alignInputContainer2}>
		
					<TouchableOpacity style = {styles. Buttoncontainer1} onPress={() => this.TimePicker.open()}>
						<Text style = {styles. buttonText1}>
						Set Time
						</Text>
					</TouchableOpacity>

        <TimePicker
          ref={ref => {
            this.TimePicker = ref;
          }}
          onCancel={() => this.onCancel()}
          onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
        />
						
		</View>
		
		</View>

        <View style={styles.itemcontainer}>
			<Text style={styles.itemTextcontainer}>Used Equipment</Text>
			
			
			
		<View style = {styles.alignInputContainer4}>
				<TextInput style= {styles.TextInputContainer}
						placeholder={'Equipment'}
						placeholderTextColor={'#232F34'}
						underLineColorAndroid='transparent'
						/>
		
		
		</View>
        </View>

        <View style = {styles.itemcontainer}>
		<Text style={styles.itemTextcontainer}> No of used</Text>
		<View style = {styles.alignInputContainer3}>
		<Text style={styles.TextInputContainer}></Text>
				
			<Picker
				style={{backgroundcolor:'white', position:'absolute',bottom:0, left:'45%', right:0, top:'6%',
				fontFamily:'Montaga-Regular',
				fontSize:15,
				borderColor:'#03DAC5',
				color:'#344955'				}}
				selectedValue={this.state.pickerSelection}
				onValueChange={(itemValue, itemIndex) =>
					this.setState({pickerSelection: itemValue})
			}>
			
				<Picker.Item label="-Select-" value="Equipment" />
				<Picker.Item label="1" value="1" />
				<Picker.Item label="2" value="2" />
				<Picker.Item label="3" value="3" />
				<Picker.Item label="4" value="4" />
				<Picker.Item label="5" value="5" />
				<Picker.Item label="5+" value="5+" />
			</Picker>
			
		</View>	
		</View>	


        <View style={styles.itemcontainer1}>
			<Text style={styles.itemTextcontainer}>Suggestion</Text>
			
			
			
		<View style = {styles.alignInputContainer1}>
				<TextInput style= {styles.TextInputContainer1}
						placeholder={'Suggestion'}
						placeholderTextColor={'#232F34'}
                        underLineColorAndroid='transparent'
						/>
		
		
		</View>

   
        </View>

		
		<View style={styles.itemcontainer}>
			<Text style={styles.itemTextcontainer}>Permission </Text>
			
			
			
		<View style = {styles.alignInputContainer9}>
				<View style = {styles.buttonalign}>						
					<TouchableOpacity style = {styles. Buttoncontainer}  
					onPress={this.chooseFile.bind(this)}
					>
						
						<Text style = {styles. buttonText}>
						Take Snap
						</Text>
					</TouchableOpacity>
					</View>		
		
		</View>

		<View>

            
		
          <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
            }}
            style={{ width: 100, height: 100 }}
          />
          <Image
            source={{ uri: this.state.filePath.uri }}
            style={{ width: 250, height: 250 }}
          />
          <Text style={{ alignItems: 'center' }}>
            {this.state.filePath.uri}
          </Text>
          
		</View>
		
		

		
		
		
		</View>		
		</View>			
		
		</ScrollView>
			

		</View>
		
			
    );
  }
}


export default ShortTermCrop;

const styles = StyleSheet.create({
	
	container : {
		backgroundColor:'#FFFFFF',
		flex: 1,
		
		
	},
	
	text: {
    fontSize: 20,
    marginTop: 10
  },
	
	lineBG:{
		backgroundColor:'#6200EE'
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
		paddingTop:'3%',
		paddingLeft:'12%',
	
    },
    
    alignInputContainer1: {

        paddingLeft:'47%',
        paddingBottom:'10%'
	
	},
	
	alignInputContainer2: {
		paddingTop:'4%',
		paddingLeft:'26%',
	},
	
	alignInputContainer3: {
		paddingTop:'3%',
		paddingLeft:'13%',
	},
	
	alignInputContainer4: {
		paddingTop:'3%',
		paddingLeft:'3%',
    },

    alignInputContainer9: {
		paddingTop:'3%',
		paddingLeft:'13%',
	},
	
	alignInputContainer5: {
		paddingTop:'3%',
		paddingLeft:'60%',
    },

    alignInputContainer7: {
		paddingTop:'3%',
		paddingLeft:'20%',
	},
	
    
    alignInputContainer8: {

        paddingLeft:'40%',
        paddingBottom:'15%'
	},


	TextInputContainer:{
		fontFamily:'Montaga-Regular',
		fontSize:15,
		width:WIDTH -210,
		borderRadius:5,
		borderWidth:1.5,
		borderColor:'#F9AA33',
		height:40,	
		paddingLeft:35,
		color:'#344955'
		
    },
    
    TextInputContainer1:{
		fontFamily:'Montaga-Regular',
		fontSize:15,
		width:WIDTH -210,
		borderRadius:5,
		borderWidth:1.5,
		borderColor:'#F9AA33',
		height:150,	
        color:'#344955',
        paddingLeft:25,
        
		
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
		width:WIDTH - 210,
		borderRadius:5,
		backgroundColor:'#F9AA33',
		height:35,
		justifyContent: "center",
		
	},
	
		Buttoncontainer3 : {
		width:WIDTH - 300,
		borderRadius:20,
		backgroundColor:'#F9AA33',
		height:40,
		justifyContent: "center",
		alignItems:'center',
		
	},
	
	Buttoncontainer1 : {
		width:WIDTH - 210,
		borderRadius:5,
		backgroundColor:'#F9AA33',
		height:35,
		justifyContent: "center",
		
	},
	
	buttonalign:{
		
    paddingTop:'1%',
 
	
	},
	
	buttonText :{
		fontFamily:'Montaga-Regular',
		fontSize:15,
		borderColor:'#344955',
		color:'#344955',
		paddingLeft:'20%',
	},
	
	buttonText2 :{
		fontFamily:'Montaga-Regular',
		fontSize:15,
		borderColor:'#344955',
		color:'#344955',
	},

	copyrightText: {
		fontFamily:'Quicksand-Medium',
		fontSize: 10,
		color:'black',
		paddingLeft:"15%"
		
	
	},
	
	Topcontainer:{
		paddingTop:'20%',
	},
	
	buttonText1 :{
		fontFamily:'Montaga-Regular',
		fontSize:15,
		borderColor:'#344955',
		color:'#344955',
		paddingLeft:'1%',
	},
	
	Buttoncontainer1 : {
		width:WIDTH - 210,
		borderRadius:5,
		backgroundColor:'#F9AA33',
		height:35,
		justifyContent: "center",
		paddingLeft:35,
		
	},
	
	TopImagecontainer:{
        paddingTop:'5%',
        paddingLeft:'9%',
	},
	
	copyrightTextalign:{
	alignItems:'center',
	paddingTop:95,
	},
	
	itemcontainer:{
		flex:1,
		alignSelf:'stretch',
		height:70,
		borderWidth:2,
		borderColor:'#344955',
		flexDirection: 'row' ,
    },
    
    itemcontaine1:{
		flex:1,
		alignSelf:'stretch',
		height:100,
		borderWidth:2,
		borderColor:'#344955',
		flexDirection: 'row' ,
    },
    

	
	itemTextcontainer:{
		paddingLeft:'10%',
		paddingTop:'5%',
		fontFamily:'Quicksand-Medium',
		fontSize: 18,
		color:'#344955',
		
	},
		ImagerowContainer:{
        flexDirection: 'row',
		paddingTop:'3%',
    },
	
	RowFlexcontainer:{
		flexDirection: 'row',
	},
		
	
	
		
		
	

});