import React from "react";
import { View, FlatList, Dimensions, StatusBar } from "react-native";

import CarItem from "../CarItem";
import styles from "./styles";
import cars from "./cars";

const CarsList = (props) => {
  console.log(StatusBar.currentHeight);

  const renderCar = (data) => {
    // actual data in Flat list is in key "item"
    const { item } = data;

    return (
      <CarItem
        name={item.name}
        tagline={item.tagline}
        taglineCTA={item.taglineCTA}
        image={item.image}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={renderCar}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={
          Dimensions.get("window").height + StatusBar.currentHeight
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CarsList;
