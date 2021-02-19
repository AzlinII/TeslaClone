import React from "react";
import PropTypes from "prop-types";
import { View, Text, Pressable } from "react-native";

import styles from "./styles";

const StyledButton = (props) => {
  const { type, text, onPress } = props;

  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      </Pressable>
    </View>
  );
};

StyledButton.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default StyledButton;
