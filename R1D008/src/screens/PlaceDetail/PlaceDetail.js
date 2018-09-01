import React from 'react';
import {  View , Image , Text , Button , StyleSheet , TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = (props) => {
   
  return (
   <View style={styles.container}>
     <Image source={props.selectedPlace.image} style={styles.placeImage}/>
     <Text style={styles.placeName}>
       {props.selectedPlace.name}
     </Text>
     <View>
       <TouchableOpacity onPress={props.onItemDeleted}>
         <View style={styles.deleteButton}>
         <Icon size={30} name="md-trash" color="red"/>
         </View>
       </TouchableOpacity>
     </View>
   </View>
 
   ) 
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

export default placeDetail;

/*
if we just want to have some view or text as then we can use ( code goes here ) without return 
and if we want to have conditional blocks then we should have{ return ( code here))
*/