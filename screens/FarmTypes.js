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
			

import LongTerm from '../components/LongTermImage';
import ShortTerm from '../components/ShortTermimage';
import Livestock from '../components/LiveStockImage';
import Poultry from '../components/PoultryImage';




const{width : WIDTH} = Dimensions.get('window')
			

 class FarmTypes extends Component {
    static navigationOptions = {
		title : "Types"
	}
	 
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
		
        <ScrollView>
           

            <View style={styles.ImageContainer}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('LongTermCrop')}>
                    <LongTerm/>
                </TouchableOpacity>
   
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ShortTermCrop')}>
                    <ShortTerm/>
				</TouchableOpacity>
                 
            </View>

            <View style={styles.ImageContainer}>
		     	<TouchableOpacity onPress={() => this.props.navigation.navigate('LiveStockScreen')}>
                  <Livestock/>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => this.props.navigation.navigate('PoultryScreen')}>
                 <Poultry/>
				 </TouchableOpacity>
            </View>


			
        </ScrollView>
 
		</View>
		
			
    );
  }
}


export default FarmTypes;

const styles = StyleSheet.create({
	
	container : {
		backgroundColor:'#FFFFFF',
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
    
    ImageContainer:{
        flexDirection: 'row',
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

