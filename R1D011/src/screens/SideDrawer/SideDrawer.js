import React, { Component } from 'react'
import { View , Text , Dimensions  } from 'react-native';

class SideDrawer extends Component {
  render() {
    return (
      <View>
        <Text style={{width: Dimensions.get("window").width * 0.8}}>
          SideDrawer
        </Text>
      </View>
    )
  }
}

export default SideDrawer;