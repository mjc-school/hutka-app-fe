import { StyleProp, TextStyle } from "react-native";

export type ButtonProps = {
    text: string,
    buttonStyle: "primary" | "secondary" | "transparent",
    textStyle?: StyleProp<TextStyle>,
    onPress?: (event) => void,
  };