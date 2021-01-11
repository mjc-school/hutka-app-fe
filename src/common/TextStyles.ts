import { StyleProp, StyleSheet, TextStyle, Platform } from "react-native";
import Colors from "./Colors";

const font = Platform.select({ web: "Sans Sherif" });

const Large: StyleProp<TextStyle> = {
  // fontFamily: font,
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: 32,
  lineHeight: 40,
  textAlign: "center",
  letterSpacing: 0.37,
};

const H6: StyleProp<TextStyle> = {
  // fontFamily: font,
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: 15,
  lineHeight: 20,
  textAlign: "center",
  letterSpacing: 0.3,
};

const H7: StyleProp<TextStyle> = {
  // fontFamily: font,
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: 14,
  lineHeight: 18,
  textAlign: "center",
  letterSpacing: -0.24,
};

const H1: StyleProp<TextStyle> = {
  // fontFamily: font,
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: 22,
  lineHeight: 28,
  textAlign: "center",
  letterSpacing: 0.34,
};

const Body2: StyleProp<TextStyle> = {
  // fontFamily: font,
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: 15,
  lineHeight: 20,
  textAlign: "center",
  letterSpacing: -0.24,
  color: Colors.secondary,
};

export default { Large, H6, H1, H7, Body2 };
