 import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
 const startTabs = () =>  {
   Promise.all([
    Icon.getImageSource("md-map" , 30),
    Icon.getImageSource("md-share" , 30),
    Icon.getImageSource("md-menu", 30) 
   ]).then(
     sources => {
      Navigation.startTabBasedApp(
        {
          tabs : [
            
            {
              screen : "awesome-places.FindPlaceScreen",
              label : "Find Place",
              title : "Find Place",
              icon: sources[0],
              navigatorButtons: {
                leftButtons: [{ 
                  title: 'Menu' ,
                  icon: sources[2],
                  id: "sideDrawerToggle"
                  
                }]
              }
            },
            {
              screen : "awesome-places.SharePlaceScreen",
              label : "Share Place",
              title : "Share Place",
              icon: sources[1],
              navigatorButtons: {
                leftButtons: [{ 
                  title: 'Menu' ,
                  icon: sources[2],
                  id: "sideDrawerToggle"
                }]
              }
              }
          ],
          drawer: {
            left: {
              // optional, define if you want a drawer from the left
              screen: 'awesome-places.SideDrawer' // unique ID registered with Navigation.registerScreen
              // passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
              // disableOpenGesture: false, // can the drawer be opened with a swipe instead of button (optional, Android only)
              // fixedWidth: 500 // a fixed width you want your left drawer to have (optional)
            },
          }
        }
      )    
     }
   )
   
 };

 export default startTabs;