import React from "react";
import { View, StyleSheet , FlatList } from "react-native";

import ListItem from '../Listitem/Listitem';


const placeList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.value}
          onItemPressed={() => props.onItemDeleted(info.item.key.toString())}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default placeList;
