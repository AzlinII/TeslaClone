import { StyleSheet, Dimensions, StatusBar } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    // StatusBar.currentHeight will be 0 for ios.
    height: Dimensions.get("window").height + StatusBar.currentHeight,
  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subtitleCTA: {
    textDecorationLine: "underline",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: 50,
  },
});

export default styles;
