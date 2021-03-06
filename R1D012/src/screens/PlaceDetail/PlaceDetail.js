import React, {Component} from 'react';
import {  View , Image , Text , Button , StyleSheet , TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {deletePlace} from '../../store/actions/index';

class PlaceDetail extends Component{

  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }
  onNavigatorEvent  = (event) => {
    console.log(event);
    if(event.type === "NavBarButtonPress"){
      if(event.id === "sideDrawerToggle"){
        this.props.navigator.toggleDrawer({
          side: "left"
        })
      }
        }
  }

  placeDeleteHandler = () => {
      this.props.onDeletePlace(this.props.selectedPlace.key);
      this.props.navigator.pop();

  }
   render(){
    return (
      <View style={styles.container}>
        <Image source={this.props.selectedPlace.image} style={styles.placeImage}/>
        <Text style={styles.placeName}>
          {this.props.selectedPlace.name}
        </Text>
        <View>
          <TouchableOpacity onPress={this.placeDeleteHandler}>
            <View style={styles.deleteButton}>
            <Icon size={30} name="md-trash" color="red"/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    
    )
   }
};
const styles = StyleSheet.create({
  container : {
    margin : 22
  },
  placeImage: {
    width: "100%", 
    height : 200
  },
  placeName : {
    fontWeight: "bold", 
    textAlign: "center",
    fontSize : 28
  },
  deleteButton:{
    alignItems: "center"
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    onDeletePlace : (key) => dispatch(deletePlace(key))
  }
}
export default connect(null, mapDispatchToProps)(PlaceDetail);

/*
if we just want to have some view or text as then we can use ( code goes here ) without return 
and if we want to have conditional blocks then we should have{ return ( code here))
*/