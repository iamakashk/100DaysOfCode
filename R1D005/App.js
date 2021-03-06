import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import placeImage from './src/assets/beautiful-place.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { connect }from 'react-redux';
import { addPlace, selectPlace, deletePlace, deselectPlace } from './src/store/actions/index';


class App extends Component {
 

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };
  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  };
  placeDeletedHandler = (key) => {
   this.props.onDeletePlace(key);
  }
  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }

  render() {
    return (
      <View style={styles.container} >
      <PlaceDetail selectedPlace={this.props.selectedPlace}  
      onItemDeleted={this.placeDeletedHandler} 
      onModalClosed={this.modalClosedHandler}/>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps = (state) => {
  return {
    places: state.places.places,
    selectedPlace : state.places.selectedPlace
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace : (name) => dispatch(addPlace(name)),
    onDeletePlace : (key) => dispatch(deletePlace(key)),
    onSelectPlace : (key) => dispatch(selectPlace(key)),
    onDeselectPlace : () => dispatch(deselectPlace())
  }
}

export default connect( mapStateToProps , mapDispatchToProps )(App);