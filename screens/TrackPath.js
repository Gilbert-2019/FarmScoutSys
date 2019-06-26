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
import MapView from 'react-native-maps'; 
import { Marker } from 'react-native-maps';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
			
const{width : WIDTH} = Dimensions.get('window')
			








 class TrackPath extends Component {
	 static navigationOptions = {
		title : "Track Path"
	}

	constructor(props) {
		super(props);
	
		this.state = {
		  markers: []
		}
		this.handlePress = this.handlePress.bind(this);
	  }
	  handlePress(e) {
		this.setState({
		  markers: [
			...this.state.markers,
			{
			  coordinate: e.nativeEvent.coordinate,
			  cost: `$${getRandomInt(50, 300)}`
			}
		  ]
		})
	}
  render() {
    return (	
	
					<View style={styles.container}>
						
					<StatusBar backgroundColor="#232F34" barStyle="light-content" />


					<View style={styles.mapcontainer}>
				
					<MapView
      					 style={styles.map}
      					 initialregion={{
        					 latitude: 6.795069,
         					 longitude: 79.900750,
        					 latitudeDelta: 0.015,
        					 longitudeDelta: 0.0121,
      					 }} onPress={this.handlePress}>

					 {this.state.markers.map((marker) => {
        return (
          <Marker {...marker} >
            <View style={styles.marker}>
              <Text style={styles.text}>{marker.cost}</Text>
            </View>
          </Marker>
        )
      })}
</MapView>
					  </View>
						
					

					</View>
    );
  }
}


export default TrackPath;


const styles = StyleSheet.create({
	
	container : {
		backgroundColor:'#FFFFFF',
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

  mapcontainer: {
	...StyleSheet.absoluteFillObject,
	flex:1,
	justifyContent: 'flex-end',
	alignItems: 'center',
  },
  map: {
	...StyleSheet.absoluteFillObject,
  },
	
	
	
	


	});    