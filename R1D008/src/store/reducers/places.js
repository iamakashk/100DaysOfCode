import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes'; 

const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_PLACE:
    return {
      ...state,
      places: state.places.concat({
        key: Math.random().toString(),
        name: action.placeName ,
        image: {
          uri: "https://cdn-images-1.medium.com/max/900/1*EntHChgUyirgbZ9A3zTxkA.png"
        }
      })
    };
    case DELETE_PLACE: 
    return {
        ...state, 
        places:   state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        })
    };
    default: 
      return state;
  }
};

export default reducer;