import  { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';

import { Provider} from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

//Register screens
Navigation.registerComponent("awesome-places.AuthScreen" , 
                              () => AuthScreen, 
                              store, 
                              Provider);
Navigation.registerComponent("awesome-places.SharePlaceScreen" , 
                              () => SharePlaceScreen, 
                              store, 
                              Provider);
Navigation.registerComponent("awesome-places.FindPlaceScreen" , 
                              () => FindPlaceScreen ,
                              store, 
                              Provider);
Navigation.registerComponent("awesome-places.PlaceDetailScreen" , 
                              () => PlaceDetailScreen 
                              );

//Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.AuthScreen', // unique ID registered with Navigation.registerScreen
    title: 'Login', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  }
});