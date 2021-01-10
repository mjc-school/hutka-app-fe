import { StyleProp, TextStyle } from "react-native";
import Icons from '@expo/vector-icons';

export type ButtonProps = {
    name: string,
    color: string,
    onPress?: (event) => void,
    iconType: string,
  };