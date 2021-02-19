import React from "react";
import { View, Text, FlatList } from "react-native";

import CarItem from "../CarItem";
import styles from "./styles";
import cars from "./cars";

const CarsList = (props) => {
  console.log(cars);

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
      <FlatList data={cars} renderItem={renderCar} />
    </View>
  );
};

export default CarsList;
