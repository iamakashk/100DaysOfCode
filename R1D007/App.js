import  { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';

//Register screens
Navigation.registerComponent("awesome-places.AuthScreen" , () => AuthScreen);
Navigation.registerComponent("awesome-places.SharePlaceScreen" , () => SharePlaceScreen);
Navigation.registerComponent("awesome-places.FindPlaceScreen" , () => FindPlaceScreen);

//Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'awesome-places.AuthScreen', // unique ID registered with Navigation.registerScreen
    title: 'Login', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  }
});