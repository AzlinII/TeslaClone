import React from "react";
import PropTypes from "prop-types";
import { View, Text, ImageBackground, Image } from "react-native";

import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
  const { name, tagline, image } = props;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.backgroundImage} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          text="Custom Order"
          onPress={() => console.warn("custom order was pressed")}
        />
        <StyledButton
          type="secondary"
          text="Existing Inventory"
          onPress={() => console.warn("Existing inventory was pressed")}
        />
      </View>
    </View>
  );
};

CarItem.propTypes = {
  name: PropTypes.string,
  tagline: PropTypes.string,
  image: Image.propTypes.source,
};

export default CarItem;
